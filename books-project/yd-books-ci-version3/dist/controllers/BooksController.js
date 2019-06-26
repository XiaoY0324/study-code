"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Books = require('../models/Books');
/**
 * 路由具体实现
 */


var BooksController =
/*#__PURE__*/
function () {
  function BooksController() {
    (0, _classCallCheck2["default"])(this, BooksController);
  }

  (0, _createClass2["default"])(BooksController, [{
    key: "actionList",
    value: function () {
      var _actionList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(ctx, next) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new Books().getData({
                  url: 'index?r=books'
                });

              case 3:
                result = _context.sent;
                _context.next = 6;
                return ctx.render('index.html', {
                  title: "\uD83D\uDCDA\u56FE\u4E66\u5217\u8868",
                  bookLists: result.data
                });

              case 6:
                ctx.body = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function actionList(_x, _x2) {
        return _actionList.apply(this, arguments);
      }

      return actionList;
    }() // async actionDelete(ctx, next) {
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

  }]);
  return BooksController;
}();

module.exports = BooksController;