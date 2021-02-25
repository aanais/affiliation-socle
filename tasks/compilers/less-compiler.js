const clean = require('gulp-clean');
const concat = require('gulp-concat');
const path = require('path');
const livereload = require('gulp-livereload-2');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const parameters = require("../parameters");
const {createDebugger} = require("../helpers");
const {getFolders, compileSquelModules} = require("../helpers");

/**
 * Compile function for less files
 * @param gulp
 * @param squelModule
 * @returns {function(*=): void}
 */
const compile = (gulp, squelModule) => resolve => {

    const outputFilename = squelModule.name + '.css';
    const destination = 'public/dist/css/' + outputFilename;

    // Cleanup
    gulp.src(destination, {allowEmpty: true}).pipe(clean());

    // Process
    const stream = gulp.src(squelModule.path + '/Assets/less/*.less', {allowEmpty: true})
        .pipe(less({
            paths: [
                path.join(process.cwd(), 'node_modules'),
            ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            grid: true
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat(outputFilename))

    if (parameters.debug) {
        stream.pipe(createDebugger('compileLess'))
    }

    stream.pipe(gulp.dest('public/dist/css/'))
        .pipe(livereload())
        .on('end', () => {

            const promises = getFolders(squelModule.path + '/Assets/less/').map(subFolder => new Promise(resolve1 => {

                const subOutput = squelModule.name + '-' + subFolder + '.css';
                const subDest = 'public/dist/css/' + subOutput;

                // Cleanup
                gulp.src(subDest, {allowEmpty: true}).pipe(clean());

                // Process
                const stream = gulp.src(squelModule.path + '/Assets/less/' + subFolder + '/*.less', {allowEmpty: true})
                    .pipe(less({
                        paths: [
                            path.join(process.cwd(), 'node_modules'),
                            path.join(process.cwd(), 'vendor')
                        ]
                    }))
                    .pipe(cleanCSS({compatibility: 'ie8'}))
                    .pipe(concat(subOutput))
                    .pipe(livereload())
                    .on('end', () => {
                        resolve1();
                    })

                if (parameters.debug) {
                    stream.pipe(createDebugger('compileLess'))
                }

                stream.pipe(gulp.dest('public/dist/css/'))
            }));

            Promise.all(promises).then(() => resolve())
        });
}

module.exports = compileSquelModules(compile);
