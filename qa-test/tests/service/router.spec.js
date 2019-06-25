const axios = require('axios');

describe("node接口", function() {
    it("test接口测试", function(done) {
        axios.get('http://xcsss.com').then((result) => {
            if (result === '期望值') {
                done(); // 正常结束
            } else {
                done(new Error('数据不是期望值')); // 抛出错误结束
            }
        }).catch((err) => {
            done(err);
        });
    })
});