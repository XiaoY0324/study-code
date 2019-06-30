"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _path = require("path");

let config = {
  'viewDir': (0, _path.join)(__dirname, '..', '..', 'dist/views'),
  'staticDir': (0, _path.join)(__dirname, '..', '..', '..', 'assets')
};

if (process.env.NODE_ENV === 'development') {
  const localConfig = {
    port: 8082,
    baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
  };
  config = (0, _lodash.extend)(config, localConfig);
}

if (process.env.NODE_ENV === 'production') {
  const localConfig = {
    port: 80,
    baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
  };
  config = (0, _lodash.extend)(config, localConfig);
}

var _default = config;
exports.default = _default;