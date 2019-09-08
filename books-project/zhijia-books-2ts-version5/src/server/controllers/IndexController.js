import { route, GET } from 'awilix-koa'; 

/**
 * 路由具体实现
 */
@route('/')
class IndexController {

    @route('/')
    @GET()
    async actionIndex(ctx) {
        // ctx.body = '效率';
        ctx.body = await ctx.render('books/pages/index', {
            data: '哼，一个能打的都没有！',
            title: 'ssr + csr'
        });
    }
}

export default IndexController;