"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaConvert = _interopRequireDefault(require("koa-convert"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = require("co");

var _log4js = require("log4js");

var _path = require("path");

var _controllers = _interopRequireDefault(require("./controllers"));

var _config = _interopRequireDefault(require("./config"));

var _errorHandle = _interopRequireDefault(require("./middlewares/errorHandle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
// { viewDir, staticDir, port }
(0, _log4js.configure)({
  appenders: {
    cheese: {
      type: 'file',
      filename: __dirname + '/logs/yd.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
}); // 配置koa-swig

app.context.render = (0, _co.wrap)((0, _koaSwig.default)({
  root: _config.default.viewDir,
  autoescape: true,
  cache: false,
  // 开启缓存  尽量设置成false
  ext: 'html',
  varControls: ['[[', ']]'],
  // 更改模板变量语法符号 把花括号改成[[ data ]], 防止和vue冲突
  writeBody: false
}));
const logger = (0, _log4js.getLogger)('cheese'); // 错误处理 要在所有路由之前

_errorHandle.default.error(app, logger); // 静态目录


app.use((0, _koaConvert.default)((0, _koaStatic.default)(_config.default.staticDir)));
app.use((0, _koaConvert.default)((0, _koaStatic.default)('dist')));
(0, _controllers.default)(app); // 注册路由

app.listen(_config.default.port || '8081', () => {
  console.log('图书管理平台启动成功📚, localhost:' + _config.default.port);
});