"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Books = _interopRequireDefault(require("../models/Books"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 路由具体实现
 */
class BooksController {
  constructor() {}

  async actionList(ctx, next) {
    try {
      const result = await new _Books.default().getData({
        url: 'index?r=books'
      });
      ctx.body = await ctx.render('index.html', {
        title: `📚图书列表`,
        bookLists: result.data
      });
    } catch (e) {
      console.log(e);
    }
  } // async actionDelete(ctx, next) {
  //     console.log('sss');
  //     const result = await new Books().delData({
  //         url: 'delete?r=books',
  //         params: {
  //             method: 'POST',
  //             body: JSON.stringify({ id: 1 }) 
  //         }
  //     });
  //     console.log(请求接口, result, '--------------');
  // } 


}

var _default = BooksController;
exports.default = _default;