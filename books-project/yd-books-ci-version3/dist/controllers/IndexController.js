"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * 路由具体实现
 */
var IndexController =
/*#__PURE__*/
function () {
  function IndexController() {
    (0, _classCallCheck2["default"])(this, IndexController);
  }

  (0, _createClass2["default"])(IndexController, [{
    key: "actionIndex",
    value: function () {
      var _actionIndex = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(ctx) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ctx.render('books/index', {
                  data: '哼，一个能打的都没有！'
                });

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function actionIndex(_x) {
        return _actionIndex.apply(this, arguments);
      }

      return actionIndex;
    }()
  }]);
  return IndexController;
}();

module.exports = IndexController;