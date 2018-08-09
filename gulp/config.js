const environment = require('./environment');

const
    /* General */
    PORT = 5000,
    TITLE = 'Gulp Development Stack',

    /* Paths */
    NPM = './node_modules',
    DEVELOPMENT_BASE = './src',
    BUILD_BASE = './dist',

    /* Gulp */
    GULP_ALL = ['./gulpfile.js', './gulp/**/*.js'],

    /* CSS */
    CSS_BASE = `${DEVELOPMENT_BASE}/scss`,
    CSS_BUILD = `${BUILD_BASE}/css`,
    CSS_ENTRY = `${CSS_BASE}/main.scss`,
    CSS_ALL = `${CSS_BASE}/**/*.scss`,
    CSS_TPL_PATH = '/css',

    // /* JavaScript */
    JS_BASE = `${DEVELOPMENT_BASE}/js`,
    JS_MAIN_FILENAME = 'main.js',
    JS_ENTRY = `${JS_BASE}/${JS_MAIN_FILENAME}`,
    JS_ALL = [
        `${NPM}/jquery/dist/jquery.js`,
        `${NPM}/popper.js/dist/umd/popper.js`,
        `${JS_BASE}/**/*.js`
    ],
    JS_VENDOR_ALL = `${JS_BASE}/vendor/**/*.js`,
    JS_BUILD = `${BUILD_BASE}/js`,
    JS_TPL_PATH = '/js',

    // /* GFX */
    GFX_BASE = `${DEVELOPMENT_BASE}/images`,
    GFX_BUILD = `${BUILD_BASE}/images`,
    IMAGES_ALL = `${GFX_BASE}/**/*.{jpg,jpeg,png,gif}`,

    // /* Templates */
    TEMPLATE_BASE = `${DEVELOPMENT_BASE}/html`,
    TEMPLATE_BUILD = `${BUILD_BASE}/`,
    TEMPLATE_PAGES = `${TEMPLATE_BASE}/*.njk`,
    TEMPLATE_ALL = `${TEMPLATE_BASE}/**/*.njk`,

    // /* HTML */
    HTML_ALL = `${DEVELOPMENT_BASE}/*.html`,
    HTML_BUILD = `${BUILD_BASE}/*.html`;

module.exports = {
    PORT,
    TITLE,
    environment,

    NPM,
    DEVELOPMENT_BASE,
    BUILD_BASE,
    GULP_ALL,

    CSS_BASE,
    CSS_ENTRY,
    CSS_ALL,
    CSS_BUILD,
    CSS_TPL_PATH,
    // ,
    //
    JS_BASE,
    JS_MAIN_FILENAME,
    JS_ENTRY,
    JS_ALL,
    JS_VENDOR_ALL,
    JS_BUILD,
    JS_TPL_PATH,
    //
    GFX_BASE,
    GFX_BUILD,
    IMAGES_ALL,
    //
    TEMPLATE_BASE,
    TEMPLATE_PAGES,
    TEMPLATE_ALL,
    TEMPLATE_BUILD,
    HTML_ALL,
    HTML_BUILD
};