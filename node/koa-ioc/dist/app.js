"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _path = require("path");

var _log4js = require("log4js");

var _errorHandle = _interopRequireDefault(require("./middlewares/errorHandle.js"));

var _awilix = require("awilix");

var _awilixKoa = require("awilix-koa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用到里面的容器(createContainer)、 生命周期(Lifetime)
// 用到里面的 loadControllers， scopePerReques
const app = new _koa.default();
(0, _log4js.configure)({
  appenders: {
    cheese: {
      type: 'file',
      filename: (0, _path.join)(__dirname, '..', '/logs/err.log')
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});
const container = (0, _awilix.createContainer)(); // 创建容器

container.loadModules([__dirname + '/services/*.js'], {
  // 把 Service 融入到容器里, 以便依赖哪个取哪个
  formatName: 'camelCase',
  // 驼峰
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED // 每次执行完销毁

  }
});
const logger = (0, _log4js.getLogger)('cheese'); // 错误处理 要在所有路由之前

_errorHandle.default.error(app, logger); // 终极注入


app.use((0, _awilixKoa.scopePerRequest)(container)); // 把容器中的东西作为中间件去应用

app.use((0, _awilixKoa.loadControllers)(__dirname + '/controllers/*.js')); // 加载所有的controller 作为中间件应用 

app.listen('3000', () => {
  console.log('The server is run, localhost: 3000');
});