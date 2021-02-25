const fs = require("fs");
const livereload = require('gulp-livereload-2');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const squelModules = require('./modules');
const parameters = require("./parameters");
const path = require("path");

/**
 * Compile all the Squels modules and execute the done function when it does
 * @param compile
 * @returns {function(*=): function(*): void}
 */
const compileSquelModules = compile => gulp => done => {
    const promises = getSquelModules().map(squelModule => new Promise(compile(gulp, squelModule)));
    Promise.all(promises).then(() => done());
}

/**
 * Create a debugger for gulp streams
 * @param title
 * @returns {*}
 */
const createDebugger = title => debug({
    logger: message => {
        // Message is not shown if it says that 0 items are compile
        if (message !== 'gulp-debug: \u001b[32m0 items\u001b[39m') {
            console.log(title, message)
        }
    }
})

/**
 * Fonction qui permet de récupérer tous les socles de squel-source.
 * A l'ajout d'un nouveau socle, bien penser à l'ajouter dans ce tableau
 * @returns {*[]}
 */
function getSquelModules () {
    const projectPath = process.cwd();
    let modules = [];
    const paths = [`${projectPath}/app/Modules`];

    if (parameters.isGlobal) {
        paths.push(`${projectPath}/vendor/audivox/squel-source/app/Modules`);
    }

    paths.forEach(function (path) {
        fs.readdirSync(path).filter(function (file) {
            let spl = file.split('/');
            let name = 'admin/' + spl[spl.length - 1].toLowerCase();
            modules.push({name: name, path: path + '/' + file});
        });
    });

    modules = [...modules, ...squelModules(projectPath)];

    if (parameters.isGlobal) {
        modules = [
            {
                name: 'app',
                path: projectPath + '/app/Common'
            },
            {
                name: 'common',
                path: projectPath + '/vendor/audivox/squel-source/app/Common'
            },
            ...modules
        ];
    }

    return modules;
}

function getFolders(dir) {
    try {
        return fs.readdirSync(dir)
            .filter(function (file) {
                return fs.statSync(path.join(dir, file)).isDirectory();
            });
    } catch (err) {
        return [];
    }
}

const cleanAll = gulp => done => {
    return gulp.src('public/dist', {read: false, allowEmpty: true})
        .pipe(clean())
        .pipe(livereload())
        .on('end', () => done());
}

/**
 * Fonction utilitaire pour compiler les vendors CSS / JS / FONTS
 * @param gulp
 * @param dest
 * @returns {function(*, *=): void}
 */
const utilsCompileVendor = (gulp, dest) => vendor => {
    if (typeof vendor.files !== "undefined") {
        const stream = gulp.src(vendor.files, {allowEmpty: true})
            .pipe(concat(vendor.name))
        if (parameters.debug) stream.pipe(debug({
            logger: message => console.log('compileVendor', message)
        }))
        stream.pipe(gulp.dest(dest))
    } else {
        const stream = gulp.src(vendor.path, {allowEmpty: true})
        if (parameters.debug) stream.pipe(debug({
            logger: message => console.log('compileVendor', message)
        }))
        stream.pipe(gulp.dest(dest + '/' + vendor.name));
    }
}

function compileViews(promise) {
    livereload.reload();
    promise();
}

const watchAll = gulp => done => {
    livereload.listen();
    for (const m of getSquelModules()) {
        const options = {usePolling: true, ignoreInitial: true}
        gulp.watch(m.path + '/Assets/less/**/*.less', options, gulp.series('compileLess'));
        gulp.watch([`${m.path}/Assets/js/**/*.js`, `!${m.path}/Assets/js/modules/**/*.js`], options, gulp.series('compileJs'));
        gulp.watch(m.path + '/Assets/js/modules/**/*.js', options, gulp.series('compileES6'));
        if (!parameters.withoutVue) {
            gulp.watch(m.path + '/Assets/js/vue/**/*.js', options, gulp.series('compileVue'));
            gulp.watch(m.path + '/Assets/js/**/*.vue', options, gulp.series('compileVue'));
        }
        gulp.watch(m.path + '/Views/**/*.twig', options, compileViews);
    }
    done();
}

module.exports = {
    compileSquelModules,
    getFolders,
    cleanAll,
    watchAll,
    createDebugger,
    utilsCompileVendor
}
