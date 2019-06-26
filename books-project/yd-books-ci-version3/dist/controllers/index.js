"use strict";

/**
 * 此文件管理所有路由
 */
var router = require('koa-simple-router');

var IndexController = require('./IndexController');

var indexController = new IndexController();

var BooksController = require('./BooksController');

var booksController = new BooksController();

module.exports = function (app) {
  app.use(router(function (_) {
    _.get('/', indexController.actionIndex);

    _.get('/index.html', indexController.actionIndex);

    _.get('/books/list', booksController.actionList); // _.get('/books/list/:id', booksController.actionDelete);

  }));
};