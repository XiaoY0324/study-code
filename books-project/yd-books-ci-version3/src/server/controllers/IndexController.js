/**
 * 路由具体实现
 */
class IndexController {
    constructor() {
        
    }

    async actionIndex(ctx) {
        // ctx.body = '效率';
        ctx.body = await ctx.render('books/index', {
            data: '哼，一个能打的都没有！'
        });
    }
}

module.exports = IndexController;