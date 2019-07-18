"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 路由具体实现
 */
class IndexController {
  constructor() {}

  async actionIndex(ctx) {
    // ctx.body = '效率';
    ctx.body = await ctx.render('books/pages/index', {
      data: '哼，一个能打的都没有！',
      title: 'ssr + csr'
    });
  }

}

var _default = IndexController;
exports.default = _default;