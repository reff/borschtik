const { watch, parallel, series } = require('gulp')

const pug = require('./.build/pug');
exports.pug = pug.pug;

const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function browserSyncFn() {
	browserSync.init({
		port: 8080,
		ui: {
    		port: 8081
		},
		server: {
			baseDir: './test/',
			index: 'index.html',
			serveStaticOptions: {
        		extensions: ["html"]
    		}
		},
		notify: false,
		online: true,
        open: false
	})
	watch('./src/**/*.pug', pug.pug).on('change', reload, {stream: true})
	watch('./src/b_/**/*.js', js.js).on('change', reload, {stream: true})
    watch('./src/img/**/*', imagemin.imagemin).on('change', reload, {stream: true})
	watch('./src/**/*.scss', scss.scss).on('change', reload, {stream: true})
}
exports.serve = browserSyncFn

const scss = require('./.build/scss')
exports.scss = scss.scss

const clean = require('./.build/clean')
exports.clean = clean.clean

const js = require('./.build/js')
exports.js = js.js

const imagemin = require('./.build/imagemin')
exports.minify = imagemin.imagemin

const copier = require('./.build/copier')
exports.copy = copier.copy

exports.default = series(parallel(pug.pug, scss.scss, js.js, imagemin.imagemin, copier.copy), browserSyncFn)
