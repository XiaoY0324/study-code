const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // 解析,用req.body获取post参数
const swig = require('swig');
const homeApi = require('./apis/home.js');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static('public'));

app.use('/api/home', homeApi);

// 配置swig
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next) {
    res.render('index', {
        title: '图书管理'
    });
});

app.get('*', function(req, res, next) {
    res.status(404);
    res.end('404~');
});

app.use(function(err, req, res, next) {
    res.status(500);
    console.log(err)
    res.end('err~');
});

app.listen(8081, function() {
    console.log('server is running on localhost:8081');
});