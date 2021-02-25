const livereload = require('gulp-livereload-2');
const parameters = require("../parameters");
const {compileSquelModules, createDebugger} = require("../helpers");

/**
 * Compile function for font files
 * @param gulp
 * @param squelModule
 * @returns {function(*): void}
 */
const compile = (gulp, squelModule) => resolve => {
    const stream = gulp.src(squelModule.path + '/Assets/fonts/**/*', {allowEmpty: true})
    if (parameters.debug) {
        stream.pipe(createDebugger('compileFonts'))
    }
    stream.pipe(gulp.dest('public/dist/fonts/' + squelModule.name + '/'))
        .pipe(livereload())
        .on('end', resolve());
}

module.exports = compileSquelModules(compile);
