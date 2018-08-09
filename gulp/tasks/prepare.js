const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('../config');

const DEVELOPMENT = config.environment.isDevelopment;

// TODO run browserSync after all tasks finished
const devSequence = ['clean', ['scss', 'html', 'js', 'images']];

const buildSequence = devSequence;
const sequence = DEVELOPMENT ? devSequence : buildSequence;

gulp.task('prepare', () => runSequence(...sequence));

module.exports = {
    buildSequence
};
