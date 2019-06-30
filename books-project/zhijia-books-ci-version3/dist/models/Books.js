"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SafeRequest = _interopRequireDefault(require("../utils/SafeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview 实现Books数据模型
 * @author yangshuai@shunshunliuxue.com
 * 
 */
class Books {
  /**
   * Books类 获取后台图书信息的数据类
   * @class
   */

  /**
   * @constructor
   * @param {object} app Koa2执行的上下文
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * 获取后台全部图书列表数据
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData(options)
   */


  getData(options) {
    const safeRequest = new _SafeRequest.default(options);
    return safeRequest.fetch();
  }
  /**
  * 删除图书
  * @param {*} options 配置项
  * @example
  * return new Promise
  * getData(options)
  */


  delData(options) {
    const safeRequest = new _SafeRequest.default(options);
    return safeRequest.fetch();
  }

}

var _default = Books;
exports.default = _default;