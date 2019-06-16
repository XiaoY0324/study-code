const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');    // Koa 静态文件
const convert = require('koa-convert'); // koa1 转换器 (koa-static 为koa1的插件)
const render = require('koa-swig');
const co = require('co'); // 兼容koa-swig koa1 => koa2

const config = require('./config');

// 配置koa-swig
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: false, // 开启缓存  尽量设置成false
    ext: 'html',
    varControls: ['[[', ']]'], // 更改模板变量语法符号 把花括号改成[[ data ]], 防止和vue冲突
    writeBody: false
}));

// 静态目录
app.use(convert(serve(config.staticDir)));

require('./controllers')(app); // 注册路由

app.listen(config.port, () => {
    console.log('图书管理平台启动成功📚, localhost:' + config.port);
});