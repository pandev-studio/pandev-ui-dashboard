const gulp = require('gulp');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

const config = require('../config');

const DEVELOPMENT = config.environment.isDevelopment;
const PRODUCTION = !DEVELOPMENT;

function bundle() {
    return gulp.src(config.JS_ALL)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(gulpif(DEVELOPMENT, sourcemaps.init()))
        .pipe(babel())
        .pipe(gulp.dest(config.JS_BUILD))
        .pipe(concat('bundle.js'))
        .pipe(gulpif(DEVELOPMENT, sourcemaps.write()))
        .pipe(gulp.dest(config.JS_BUILD))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulpif(PRODUCTION, rename({suffix: '.min'})))
        .pipe(gulpif(PRODUCTION, uglify()))
        .pipe(gulpif(PRODUCTION, gulp.dest(config.JS_BUILD)))
}

gulp.task('js', bundle);
