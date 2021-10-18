const { src, dest, task, watch, parallel, series } = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const concatenator = require('gulp-concat')
const prefixer = require('gulp-autoprefixer')
const cleaner = require('gulp-clean-css')
const mapper = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')

function buildScssFiles() {
	return src('./src/[!_]*.scss')
	.pipe(sassGlob())
	.pipe(plumber())
	.pipe(mapper.init())
	.pipe(concatenator('./styles.css'))
	.pipe(sass({
		outputStyle: 'expanded'
	})
	.on('error', sass.logError))
	.pipe(prefixer({ overrideBrowserslist: ['since 2005'] }))
	.pipe(mapper.write())
	.pipe(mapper.write('.'))
	.pipe(dest('./test/css'))
}
exports.scss = buildScssFiles // run task: `gulp scss`