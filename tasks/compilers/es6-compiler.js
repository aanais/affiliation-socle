const livereload = require('gulp-livereload-2');
const clean = require('gulp-clean');
const webpack = require('webpack-stream');
const fs = require('fs');
const parameters = require("../parameters");
const {compileSquelModules, createDebugger} = require("../helpers");

const compile = (gulp, squelModule) => resolve => {
    gulp.src('public/dist/js/' + squelModule.name + '/modules/*', {allowEmpty: true})
        .pipe(clean());

    if (!fs.existsSync(squelModule.path + '/Assets/js/modules/entry.js')) {
        resolve()
    } else {
        const stream = gulp.src(squelModule.path + '/Assets/js/modules/entry.js', {allowEmpty: true})
            .pipe(webpack({
                devtool: 'source-map',
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        '@babel/preset-env'
                                    ],
                                    plugins: [
                                        '@babel/plugin-transform-runtime',
                                        '@babel/plugin-proposal-class-properties'
                                    ]
                                }
                            }
                        }
                    ]
                },
                output: {
                    filename: 'bundle.js'
                },
                resolve: {
                    modules: [
                        process.cwd() + '/node_modules',
                        squelModule.path + '/node_modules'
                    ]
                },
            }))

        if (parameters.debug) {
            stream.pipe(createDebugger('compileES6'))
        }

        stream.pipe(gulp.dest('public/dist/js/' + squelModule.name + '/modules/'))
            .pipe(livereload())
            .on('end', () => resolve());
    }
}

module.exports = compileSquelModules(compile);
