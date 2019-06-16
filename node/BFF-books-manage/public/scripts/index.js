$(function() {
    // 请求node 图书列表
    $.ajax({
        method: 'GET',
        url: '/api/home/books',
        success: function (data) {
            console.log(data);
        },
        fail: function (err) {
            console.log(err);
        }
    });
});