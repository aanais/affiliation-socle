const compilerJs = require("./compilers/js-compiler");
const compilerES6 = require("./compilers/es6-compiler");
const compilerImg = require("./compilers/img-compiler");
const compilerLess = require("./compilers/less-compiler");
const compilerFont = require("./compilers/font-compiler");
const compilerVue = require("./compilers/vue-compiler");
const parameters = require("./parameters");
const {utilsCompileVendor, watchAll, cleanAll} = require("./helpers");

$jsVendors = require('./vendors/js-vendors');
$cssVendors = require('./vendors/css-vendors');
$fonts = require('./vendors/font-vendors');

/**
 * Main function for gulp compiler
 * @param gulp
 * @returns {*}
 */
module.exports = function (gulp) {

    if (parameters.debug) console.log(parameters)

    gulp.task('compileES6', compilerES6(gulp));
    gulp.task('compileJs', compilerJs(gulp));
    gulp.task('compileImg', compilerImg(gulp));
    gulp.task('compileLess', compilerLess(gulp));
    gulp.task('compileFonts', compilerFont(gulp));
    gulp.task('compileVue', compilerVue(gulp));
    gulp.task('compileVendors', function (done) {
        $jsVendors.forEach(utilsCompileVendor(gulp, 'public/dist/js'));
        $cssVendors.forEach(utilsCompileVendor(gulp, 'public/dist/css'));
        $fonts.forEach(utilsCompileVendor(gulp, 'public/dist/fonts'));
        done();
    });

    const executedTasks = ['compileFonts', 'compileLess', 'compileES6', 'compileJs']

    if (!parameters.withoutVendors) {
        executedTasks.push('compileVendors')
    }
    if (!parameters.withoutImages) {
        executedTasks.push('compileImg')
    }
    if (!parameters.withoutVue) {
        executedTasks.push('compileVue')
    }

    gulp.task('clean', gulp.series(cleanAll(gulp)));
    gulp.task('default', gulp.parallel(...executedTasks));
    gulp.task('watch', gulp.parallel(watchAll(gulp)));

    return gulp;
}
