"use strict";

var _require = require('lodash'),
    extend = _require.extend;

var _require2 = require('path'),
    join = _require2.join;

var config = {
  'viewDir': join(__dirname, '..'),
  'staticDir': join(__dirname, '..', '..', '..', 'assets')
};
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  var localConfig = {
    port: 8081,
    baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
  };
  config = extend(config, localConfig);
}

if (process.env.NODE_ENV === 'production') {
  var _localConfig = {
    port: 80,
    baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
  };
  config = extend(config, _localConfig);
}

module.exports = config;