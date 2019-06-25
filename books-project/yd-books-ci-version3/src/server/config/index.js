const { extend } = require('lodash');
const { join } = require('path');

let config = {
    'viewDir': join(__dirname, '..', '..', 'client/views'),
    'staticDir': join(__dirname, '..', '..', '..', 'assets')
}

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: 8081,
        baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
    }

    config = extend(config, localConfig);
}

if (process.env.NODE_ENV === 'production') {
    const localConfig = {
        port: 80,
        baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
    }

    config = extend(config, localConfig);
}

module.exports = config;