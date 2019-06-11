$(function(argument) {
    $('#submitBtn').click(function(e) {
        e.preventDefault(); // 取消默认事件

        $.ajax({
            url: '/api/home/recieve',
            type: 'POST',
            dataType: 'json',
            data: {
                userName: $('#userId').val()
            },
            success: function (data) {
                // alert('成功');
                console.log('success');
            },
            fail: function (e) {
                console.log(e);
            }
        });
    });
});