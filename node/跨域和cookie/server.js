var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // 允许此域名跨域
    res.header('Access-Control-Allow-Credentials', 'true'); // 允许客户端传递cookie
    next();
});

app.post('/test', function(req, res) {
    res.send({
        msg: 'ok了, 你的token是' + req.cookies['jwt-token']
    });
});

app.listen(3000);