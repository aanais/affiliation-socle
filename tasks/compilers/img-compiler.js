const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload-2');
const webp = require('gulp-webp');
const parameters = require("../parameters");
const {compileSquelModules, createDebugger} = require("../helpers");

/**
 * Compile function for images
 * @param gulp
 * @param squelModule
 * @returns {function(*): void}
 */
const compile = (gulp, squelModule) => resolve => {

    const createStream = handler => resolve => {
        let stream = gulp.src(squelModule.path + '/Assets/img/**/*', {allowEmpty: true})
        if (parameters.debug) {
            stream.pipe(createDebugger('compileImg'))
        }
        stream = handler(stream);
        stream.pipe(gulp.dest('public/dist/img/' + squelModule.name + '/'))
            .pipe(livereload())
            .on('end', () => resolve());
    }

    const transformToWebP = () => new Promise(createStream(stream => {
        return stream.pipe(webp())
    }))

    const minifyImages = () => new Promise(createStream(stream => {
        return stream.pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ], {verbose: parameters.debug}))
    }))

    const action = parameters.isWebP ? transformToWebP : minifyImages
    Promise.resolve(action()).then(() => resolve())
}

module.exports = compileSquelModules(compile);
