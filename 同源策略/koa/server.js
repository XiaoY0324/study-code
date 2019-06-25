const Koa = new require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

router.post('/post_form_api', async (ctx, next) => {
    console.log(ctx.request.body, 'body');
    ctx.cookies.set('name', 'tobi');
    ctx.cookies.set(
        'from_server', 
        'cookie from server',
        {
            domain: '.shunshunliuxue.com',  // 写cookie所在的域名
            maxAge: 7200000 // cookie有效时长
        }
    );

    ctx.body = 'ok~';
});

app.use(router.routes());
app.listen(3000);
console.log('server is running on port 3000');