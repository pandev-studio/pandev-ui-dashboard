const gulp = require('gulp');
const config = require('../config');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const prettify = require('gulp-prettify');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');

const DEVELOPMENT = config.environment.isDevelopment;
const PRODUCTION = !DEVELOPMENT;

gulp.task('html', () => {
    const data = {
        cssPath: config.CSS_TPL_PATH,
        jsPath: config.JS_TPL_PATH,
        dev: DEVELOPMENT,
        prod: PRODUCTION
    };

    gulp.src(config.TEMPLATE_PAGES)
        .pipe(plumber({
            errorHandler: e => gutil.log(gutil.colors.red(`${e.name} in ${e.plugin}: ${e.message}`))
        }))
        .pipe(nunjucks.compile(data))
        .pipe(rename(path => (path.extname = '.html')))
        .pipe(gulpif(PRODUCTION, prettify()))
        .pipe(gulp.dest(config.TEMPLATE_BUILD))
        .pipe(browserSync.stream())
});