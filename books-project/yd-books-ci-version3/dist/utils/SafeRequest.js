"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * 安全请求方法 
 * 每次node 请求 必须经过这一层
 */
var config = require('../config');

var _fetch = require('node-fetch');

var SafeRequest =
/*#__PURE__*/
function () {
  function SafeRequest(options) {
    (0, _classCallCheck2["default"])(this, SafeRequest);
    this.options = options;
    this.baseUrl = config.baseUrl;
  }

  (0, _createClass2["default"])(SafeRequest, [{
    key: "fetch",
    value: function fetch() {
      var _this = this;

      // 就算php后台都挂了 也在这拦住 给一个正常的返回值
      var result = {
        code: 0,
        message: "",
        data: []
      };
      return new Promise(function (resolve, reject) {
        var ydfetch = _fetch(_this.baseUrl + _this.options.url, _this.options.params);

        console.log(_this.baseUrl + _this.options.url, _this.options);
        ydfetch.then(function (res) {
          return res.json();
        }).then(function (json) {
          result.data = json;
          resolve(result);
        })["catch"](function (err) {
          console.log(err);
          result.code = 1;
          result.message = '❌node-fetch 请求数据失败';
          reject(result); // 失败也返回正常数据
        });
      });
    }
  }]);
  return SafeRequest;
}();

module.exports = SafeRequest;