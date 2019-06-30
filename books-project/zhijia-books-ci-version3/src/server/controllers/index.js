/**
 * 此文件管理所有路由
 */
import router from 'koa-simple-router';
import IndexController from './IndexController';
const indexController = new IndexController();
import BooksController from './BooksController';
const booksController = new BooksController();

export default (app) => {
    app.use(router(_ => {
        _.get('/', indexController.actionIndex);
        _.get('/index.html', indexController.actionIndex);
        _.get('/books/list', booksController.actionList);
        // _.get('/books/list/:id', booksController.actionDelete);
    }));
}