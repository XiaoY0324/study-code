const { extend } = require('lodash');
const { join } = require('path');

let config = {
    'viewDir': join(__dirname, '..', 'views'),
    'staticDir': join(__dirname, '..', 'assets')
}

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: 8081
    }

    config = extend(config, localConfig);
}

if (process.env.NODE_ENV === 'production') {
    const localConfig = {
        port: 80
    }

    config = extend(config, localConfig);
}

module.exports = config;