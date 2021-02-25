const livereload = require('gulp-livereload-2');
const clean = require('gulp-clean');
const babelify = require('babelify');
const bro = require('gulp-bro');
const uglifyify = require('uglifyify');
const envify = require('envify');
const parameters = require("../parameters");
const {compileSquelModules, createDebugger} = require("../helpers");

const compile = (gulp, squelModule) => resolve => {
    gulp.src('public/dist/js/' + squelModule.name + '/vue.js/*', {allowEmpty: true})
        .pipe(clean());

    const dirname = process.cwd()

    const stream = gulp.src(squelModule.path + '/Assets/js/vue/main.js', {allowEmpty: true})
        .pipe(
            bro({
                paths: [dirname + '/node_modules'],
                transform: [
                    babelify.configure({
                        presets: ["@babel/preset-env"]
                    }),
                    [uglifyify, {global: true}],
                    [envify, {global: true}],
                    ['vueify-babel-7-support']
                ]
            })
        )

    if (parameters.debug) {
        stream.pipe(createDebugger('compileVue'))
    }

    stream.pipe(gulp.dest('public/dist/js/' + squelModule.name + '/vue.js/'))
        .pipe(livereload())
        .on('end', () => resolve());
}

module.exports = compileSquelModules(compile);
