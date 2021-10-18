const { src, dest, task, watch, parallel, series } = require('gulp')

const del = require('del');

function deleteTestFolder() {
	return del('./test')
}

exports.clean = deleteTestFolder // run task: `gulp clean`
