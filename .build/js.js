const { src, dest, task, watch, parallel, series } = require('gulp')

const concatenator = require('gulp-concat')
const mapper = require('gulp-sourcemaps')

function buildJsFiles() {
	return src('./src/b_/**/[!_]*.js')
        .pipe(mapper.init())
        .pipe(concatenator('./script.js'))
        .pipe(mapper.write())
        .pipe(mapper.write('.'))
        .pipe(dest('./test/js'))
}
exports.js = buildJsFiles // run task: `gulp js`
