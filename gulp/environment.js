const argv = require('yargs').argv;

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const isDevelopment = argv.dev || false;

module.exports = {
    type: isDevelopment ? DEVELOPMENT : PRODUCTION,
    isDevelopment,
    isProduction: !isDevelopment
};