const Koa = require('koa');
const router = require('koa-simple-router');
const serve = require('koa-static');    // Koa 静态文件
const convert = require('koa-convert'); // koa1 转换器 (koa-static 为koa1的插件)
const path = require('path');
const render = require('koa-swig'); // koa-swig对Koa2支持不太好 依赖co进行转换
const co = require('co'); 

const app = new Koa();

// 静态目录
app.use(convert(serve(path.join(__dirname, './public'))));

// 注册swig
app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cahce: 'memory',
    ext: 'html',
    writeBody: false
}));

// 路由
app.use(router(_ => {
    _.get('/', (ctx, next) => {
      ctx.body = 'hello'
    })
    _.get('/index', async (ctx, next) => {
        ctx.body = await ctx.render('index.html');
    })
    _.get('/list/:id', (ctx, next) => {
        // console.log(ctx.query);
        // console.log(ctx.querystring);
        console.log(ctx.params) // { id: xxx }
        ctx.body = {
            data: 'index'
        }
    })  
}));

app.listen(3000, () => {
    console.log('server is running on localhost:3000');
});