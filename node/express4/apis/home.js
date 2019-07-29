var express = require('express');
var router = new express.Router();
var app = express();

router.get('/ss', function(req, res) {
    const isScript = req.originalUrl.includes('alert');
   console.log(isScript);
});

router.post('/recieve', function(req, res) {
    console.log(req.body);
    req.models.user_info.create([{ userName: req.body.userName }], function(err, items) {
        console.log(err, 'sss')
        if (err) return res.status(500).send({
            msg: '插入数据失败'
        });
        
        res.send({
            msg: '插入数据成功~',
            data: items
        });
    })
});

module.exports = router;