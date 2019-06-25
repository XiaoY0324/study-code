System.register([], function (_export, _context) {
  "use strict";

  var SafeRequest, Books;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      /**
       * @fileoverview 实现Books数据模型
       * @author yangshuai@shunshunliuxue.com
       * 
       */
      SafeRequest = require('../utils/SafeRequest');

      Books =
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
          _classCallCheck(this, Books);

          this.app = app;
        }
        /**
         * 获取后台全部图书列表数据
         * @param {*} options 配置项
         * @example
         * return new Promise
         * getData(options)
         */


        _createClass(Books, [{
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
    }
  };
});