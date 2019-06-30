"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 安全请求方法 
 * 每次node 请求 必须经过这一层
 */
class SafeRequest {
  constructor(options) {
    this.options = options;
    this.baseUrl = _config.default.baseUrl;
  }

  fetch() {
    // 就算php后台都挂了 也在这拦住 给一个正常的返回值
    let result = {
      code: 0,
      message: "",
      data: []
    };
    return new Promise((resolve, reject) => {
      let ydfetch = (0, _nodeFetch.default)(this.baseUrl + this.options.url, this.options.params);
      console.log(this.baseUrl + this.options.url, this.options);
      ydfetch.then(res => res.json()).then(json => {
        result.data = json;
        resolve(result);
      }).catch(err => {
        console.log(err);
        result.code = 1;
        result.message = '❌node-fetch 请求数据失败';
        reject(result); // 失败也返回正常数据
      });
    });
  }

}

var _default = SafeRequest;
exports.default = _default;