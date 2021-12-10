const { src, dest } = require('gulp')

function copyRootFolderFiles() {
    return src([
        './src/favicon.ico',
        './src/icon.png',
        './src/tile.png',
        './src/tile-wide.png',
        './src/humans.txt',
        './src/robots.txt',
        './src/browserconfig.xml',
        './src/site.webmanifest'
    ])
        .pipe(dest('./test'))
}

function copyFonts() {
    return src('./src/fonts/**/*.*')
        .pipe(dest('./test/fonts'))
}

function fileCopier() {
    copyFonts()
    return copyRootFolderFiles()
}

exports.copy = fileCopier // run task: `gulp copy`
