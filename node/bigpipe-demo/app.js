const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('第一次传输<br/>');
        }, 1000);
    });
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('第二次传输<br/>');
        }, 2000);
    });
}

router.get('/', async(ctx, next) => {
    // ctx.body = 123;
    ctx.status = 200;
    ctx.type = 'html';
    ctx.res.write('loading... <br/>');

    const result = await task1();

    ctx.res.write(result);

    const result2 = await task2();

    ctx.res.write(result2);
    ctx.res.end();
});

app.use(router.routes())
.use(router.allowedMethods);

app.listen(8085, () => {
    console.log('server is on localhost:8085');
});