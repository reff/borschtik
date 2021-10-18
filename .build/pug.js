const { src, dest, task, watch, parallel, series } = require('gulp')

const pug = require('gulp-pug')
const plumber = require('gulp-plumber')
const htmlBeautifier = require('gulp-html-beautify')
const htmlBemValidator = require('gulp-html-bem-validator')
const data = require('gulp-data')
const fs = require('fs')

const path = require('path');

// Ver 1.0
// function buildPugFiles() {
//     return src(['./src/**/*.+(jade|pug)', '!./src/b_/**/*.+(jade|pug)'])
//         .pipe(plumber())
//         .pipe(pug())
//         .pipe(htmlBeautifier({
//             indentSize: 4,
//             indent_char: ' '
//         }))
//         .pipe(htmlBemValidator())
//         .pipe(dest('./test'))
// }
// Ver 1.0

function buildPugFiles() {
    let globals = JSON.parse(fs.readFileSync('./src/data.json'));
    return src(['./src/**/*.+(jade|pug)', '!./src/b_/**/*.+(jade|pug)'])
        .pipe(plumber())
        .pipe(data(function (file) {
            let locals = JSON.parse(fs.readFileSync(path.dirname(file.path) + '/data.json'));
            console.log(path.dirname(file.path))
            return Object.assign(globals || {}, locals || {});
        }))
        .pipe(pug())
        .pipe(htmlBeautifier({
            indentSize: 4,
            indent_char: ' '
        }))
        .pipe(htmlBemValidator())
        .pipe(dest('./test'))
}
exports.pug = buildPugFiles // run task: `gulp pug`
