const uglify = require('gulp-uglify-es').default;
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload-2');
const sourcemaps = require('gulp-sourcemaps');
const parameters = require("../parameters");
const {getFolders, compileSquelModules, createDebugger} = require("../helpers");

/**
 * Compile function for javascript files
 * @param gulp
 * @param squelModule
 * @returns {function(*=): void}
 */
const compile = (gulp, squelModule) => resolve => {

    const output = squelModule.name + '.js'
    const dest = 'public/dist/js/' + output;

    // Cleanup
    gulp.src(dest, {allowEmpty: true}).pipe(clean());

    const stream = gulp.src([`!${squelModule.path}/Assets/js/modules`, `${squelModule.path}/Assets/js/*.js`], {allowEmpty: true})
        .pipe(sourcemaps.init())
        .pipe(concat(output))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist/js/'))
        .pipe(livereload())

    if (parameters.debug) {
        stream.pipe(createDebugger('compileJs'))
    }

    stream.on('end', () => {

        const promises = getFolders(squelModule.path + '/Assets/js/').map(subFolder => new Promise(resolve1 => {
            if (subFolder == "vue" || subFolder == "modules") {
                resolve1();
                return;
            }

            const subOutput = squelModule.name + '/' + subFolder + '.js';
            const subDest = 'public/dist/js/' + subOutput;

            // Cleanup
            gulp.src(subDest, {allowEmpty: true}).pipe(clean());

            gulp.src(squelModule.path + '/Assets/js/' + subFolder + '/*.js', {allowEmpty: true})
                .pipe(concat(subOutput))
                .pipe(gulp.dest('public/dist/js/'))
                .pipe(livereload())
                .on('end', () => resolve1())
        }));

        Promise.all(promises).then(() => resolve());
    });
}

module.exports = compileSquelModules(compile);

