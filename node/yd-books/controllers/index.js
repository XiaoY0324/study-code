/**
 * 此文件管理所有路由
 */
const router = require('koa-simple-router');
const IndexController = require('./IndexController');
const indexController = new IndexController();

module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.actionIndex);
        _.get('/index.html', indexController.actionIndex);
    }));
}