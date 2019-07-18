import Books from '../models/Books';
import cheerio from 'cheerio';

/**
 * 路由具体实现
 */
class BooksController {
    constructor() {
        
    }

    async actionList(ctx, next) {
        const result = await new Books().getData({
            url: 'index?r=books'
        });
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
            ctx.body = html;
        }
    }

    async actionAdd(ctx, next) {
        ctx.body = await ctx.render('books/pages/add');
    }
}

export default BooksController;