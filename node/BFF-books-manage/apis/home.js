var express = require('express');
var router = new express.Router();
var request = require('request');

router.get('/books', function(req, res) {
    // res.send({
    //     mag: 123
    // });

    // 列表数据
    request.get('http://127.0.0.1:8080/index.php?r=books/index', function(error, response, body) {
        console.log(error);
        if (!error && response.statusCode == 200) { 
            console.log(response);
        }
    });
});

module.exports = router;