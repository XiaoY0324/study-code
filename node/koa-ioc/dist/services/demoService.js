"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @fileoverview 实现Demo数据模型
 * @author yangshuai@shunshunliuxue.com
 * 
 */
class DemoService {
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
   * 获取数据
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData()
   */


  getData() {
    const data = {
      msg: '测试数据'
    };
    const dataPromise = new Promise(resolve => resolve(data));
    return dataPromise;
  }

}

var _default = DemoService;
exports.default = _default;