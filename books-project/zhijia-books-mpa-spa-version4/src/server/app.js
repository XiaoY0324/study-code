import Koa from 'koa';
const app = new Koa();
import serve from 'koa-static';    // Koa 静态文件
import convert from 'koa-convert'; // koa1 转换器 (koa-static 为koa1的插件)
import render from 'koa-swig';
import { wrap } from 'co'; // 兼容koa-swig koa1 => koa2
import { configure, getLogger } from 'log4js';
import { join } from 'path';
import registerCtrl from './controllers';

import config from './config'; 
import errorHandle from './middlewares/errorHandle.js';

configure({
  appenders: { cheese: { type: 'file', filename: join(__dirname, '..' ,'/logs/err.log') } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

// 配置koa-swig
app.context.render = wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: false, // 开启缓存  尽量设置成false
    ext: 'html',
    varControls: ['[[', ']]'], // 更改模板变量语法符号 把花括号改成[[ data ]], 防止和vue冲突
    writeBody: false
}));

const logger = getLogger('cheese');

// 错误处理 要在所有路由之前
errorHandle.error(app, logger);

// 静态目录
app.use(convert(serve(config.staticDir)));
app.use(convert(serve(join(__dirname, '..', 'dist', 'assets'))));
app.use(convert(serve('dist')));

registerCtrl(app); // 注册路由

app.listen(config.port || '8081', () => {
    console.log('图书管理平台启动成功📚, localhost:' + config.port);
});