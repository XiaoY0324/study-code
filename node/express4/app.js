const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // 解析,用req.body获取post参数
const swig = require('swig');
const homeApi = require('./apis/home.js');
const orm = require('orm');
const request = require('request');
const cheerio = require('cheerio')

app.use(orm.express("mysql://root:@192.168.64.2/express_swig_test", {
    define: function (db, models, next) {
        models.user_info = db.define("user_info", { 
            id: Number,
            userName: String
        });
        
        next();
    }
}));

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
        title: 'express 测试'
    });
});

// 爬虫
app.get('/spider', function(req, res, next) {
    request('http://www.jikexueyuan.com/', function(error, response, body) {
        const $ = cheerio.load(body); // 拿到整个body的前端选择器
        
        console.log($('.header ul li').length); // 6

        if (!error && response.statusCode == 200) {
            // console.log(body); 
            res.send(body);
        }
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