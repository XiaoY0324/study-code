"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @fileoverview 实现Books数据模型
 * @author yangshuai@shunshunliuxue.com
 * 
 */
var SafeRequest = require('../utils/SafeRequest');

var Books =
/*#__PURE__*/
function () {
  /**
   * Books类 获取后台图书信息的数据类
   * @class
   */

  /**
   * @constructor
   * @param {object} app Koa2执行的上下文
   */
  function Books(app) {
    (0, _classCallCheck2["default"])(this, Books);
    this.app = app;
  }
  /**
   * 获取后台全部图书列表数据
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData(options)
   */


  (0, _createClass2["default"])(Books, [{
    key: "getData",
    value: function getData(options) {
      var safeRequest = new SafeRequest(options);
      return safeRequest.fetch();
    }
    /**
    * 删除图书
    * @param {*} options 配置项
    * @example
    * return new Promise
    * getData(options)
    */

  }, {
    key: "delData",
    value: function delData(options) {
      var safeRequest = new SafeRequest(options);
      return safeRequest.fetch();
    }
  }]);
  return Books;
}();

module.exports = Books;