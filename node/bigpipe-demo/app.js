const koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const { resolve } = require('path');

const app = new koa();
const router = new Router();

const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`<script>addHtml('part1', '第一次传输')</script>`);
        }, 1000);
    });
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`<script>addHtml('part2', '第二次传输')</script>`);
        }, 1000);
    });
}

router.get('/', async(ctx, next) => {
    // ctx.body = 123;
    ctx.status = 200;
    ctx.type = 'html';

    // 不采用流的方式 读完再吐 用于读的文件较小
    // const file = fs.readFileSync('./index.html', 'utf-8'); // 如果这个文件较大我们采用流的方式 边读边吐
    // ctx.res.write(file);

    // 采用流的方式 边读边吐
    const stream = fs.createReadStream(resolve(__dirname, 'index.html'));
    // stream.pipe(ctx.res); // 此种方法pipe完后会执行ctx.res.end(); 故它适合单个文件读写的情景。不适合分块~~
    stream.on('data', chunk => { // 一段一段的写进页面
        ctx.res.write(chunk);
    })

    // 并行执行操作 task1 和 task2 同时返回数据
    await Promise.all([task1().then(r => {
        ctx.res.write(r);
    }), task2().then(r => {
        ctx.res.write(r);
    })]);

    // const result = await task1();

    // ctx.res.write(result);

    // const result2 = await task2();

    // ctx.res.write(result2);

    ctx.res.write(`</body></html>`); // 把页面合上
    ctx.res.end();
});

app.use(router.routes())
.use(router.allowedMethods);

app.listen(8085, () => {
    console.log('server is on localhost:8085');
});