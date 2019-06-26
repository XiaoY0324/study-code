"use strict";

var Koa = require('koa');

var app = new Koa();

var serve = require('koa-static'); // Koa 静态文件


var convert = require('koa-convert'); // koa1 转换器 (koa-static 为koa1的插件)


var render = require('koa-swig');

var co = require('co'); // 兼容koa-swig koa1 => koa2


var log4js = require('log4js');

var _require = require('path'),
    join = _require.join;

var config = require('./config');

var errorHandle = require('./middlewares/errorHandle.js');

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: './logs/yd.log'
    }
  },
  categories: {
    "default": {
      appenders: ['cheese'],
      level: 'error'
    }
  }
}); // 配置koa-swig

app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: false,
  // 开启缓存  尽量设置成false
  ext: 'html',
  varControls: ['[[', ']]'],
  // 更改模板变量语法符号 把花括号改成[[ data ]], 防止和vue冲突
  writeBody: false
}));
var logger = log4js.getLogger('cheese'); // 错误处理 要在所有路由之前

errorHandle.error(app, logger); // 静态目录

app.use(convert(serve(config.staticDir)));
app.use(convert(serve('dist')));

require('./controllers')(app); // 注册路由


app.listen(config.port || '8081', function () {
  console.log('图书管理平台启动成功📚, localhost:' + config.port);
});