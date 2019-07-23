import cheerio from 'cheerio';
import { route, GET } from 'awilix-koa'; 
import { Readable } from 'stream';
import { resolve } from 'any-promise';

/**
 * 路由具体实现
 */
// 父controller
@route('/books')
class BooksController {
    constructor({ booksService }) {
        this.booksService = booksService;
    }

    @route('/list')
    @GET()
    async actionList(ctx, next) {
        const result = await this.booksService.getData();
        const html = await ctx.render('books/pages/list', {
            title: `📚图书列表`,
            bookLists: result.data
        });

        if (ctx.request.header['x-pjax']) {
            console.log('站内跳');
            // 站内跳刷新一丢丢 你怎么知道刷新哪一丢丢呢 cheerio 来做
            const $ = cheerio.load(html); // 变成jq dom 对象
            let _result = '';

            $('.pjaxcontext').each(function() {
                console.log($(this));
                _result += $(this).html();
            });

            $('.lazyload-js').each(function() {
                _result += `<script src="${ $(this).attr('src') }"></script>`;
            });

            ctx.body = _result;
        } else {
            console.log('直接刷');
            /**
             * bigpipe 方式处理页面数据
             */
            function createSSRStreamPromise() {
                return new Promise((reject, resolve) => {
                    const htmlStream = new Readable();
                    
                    htmlStream.push(html);
                    htmlStream.push(null);
                    htmlStream.on('error', err => reject(err)).pipe(ctx.res); // 这一句是关键
                });
            }

            await createSSRStreamPromise();
            // ctx.body = html;
        }
    }

    @route('/add')
    @GET()
    async actionAdd(ctx, next) {
        ctx.body = await ctx.render('books/pages/add');
    }
}

export default BooksController;