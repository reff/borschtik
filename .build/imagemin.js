const { src, dest, task, watch, parallel, series } = require('gulp')

const imagemin = require('gulp-imagemin')

function minifyImages() {
    return src('./src/img/**/*.+(jpg|jpe|jpeg|png|gif|svg)')
        .pipe(imagemin())
        .pipe(dest('./test/img'))
}
exports.imagemin = minifyImages // run `gulp imagemin`
