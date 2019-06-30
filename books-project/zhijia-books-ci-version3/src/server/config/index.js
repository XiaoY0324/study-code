import { extend } from 'lodash';
import { join } from 'path';

let config = {
    'viewDir': join(__dirname, '..'),
    'staticDir': join(__dirname, '..', '..', '..', 'assets')
}

if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: 8082,
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

export default config;