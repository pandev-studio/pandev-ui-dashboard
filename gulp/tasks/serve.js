const gulp = require('gulp');
const gutil = require('gulp-util');
const gwatch = require('gulp-watch');
const browserSync = require('browser-sync');
const copyToClipboard = require('copy-paste').copy;
const runSequence = require('run-sequence');

const config = require('../config');

const DEVELOPMENT = config.environment.isDevelopment;
const port = config.PORT;

gulp.task('serve', ['prepare'], () => {
    const baseDir = DEVELOPMENT ? [
        config.BUILD_BASE,
        config.NPM

    ] : config.BUILD_BASE;

    browserSync({
        port,
        server: { baseDir },
        open: false
    }, (unknown, bs) => {
        const finalPort = bs.options.get('port');
        copyToClipboard(
            `localhost:${finalPort}`,
            () => gutil.log(gutil.colors.green('Local server address has been copied to your clipboard'))
        );
    });

    const watch = (glob, tasks) => gwatch(glob, () => runSequence(...tasks));

    if (DEVELOPMENT) {
        watch(config.CSS_ALL, ['scss']);
        watch(config.JS_ALL, ['js']);
        watch(config.GFX_BASE, ['images']);
        watch(config.TEMPLATE_ALL, ['html']);
    }
});
