$(function() {
    var i = 0;

    $('button').on('click', function() {
        socket.send($('input').val()
        );
    });

    // 建立websocket连接
    socket = io.connect('ws://localhost:3000');

    // 收到server的连接确认
    socket.on('open', function() {
        console.log('已连接');

        // socket.send('连接成功');
        // $('#status').text(promt('请输入名字'));

        // var msg = {
        //     uname: $('#status').html(),
        //     msg: ''
        // }

        // socket.send(msg);
    });

    // 监听message事件, 打印消息信息
    socket.on('message', function(json) {
        console.log('服务端广播来的message', json);
    });

    // 登入或登出
    // socket.on('system', function(json) {
    //     if (json.text) {
    //         if (json.type == 'welcome') {
    //             content.append('<p class="welcome">' + json.time + '@' + json.text + '加入会话</p>');
    //         } else if (json.type == 'bye') {
    //             content.append('<p class="bye">' + json.time + '@' + json.text + '离开会话</p>');
    //         }
    //     }
    // });

    // // 监听频道
    // socket.on('onMessage', function(json) {
    //     var _class = 'right';

    //     if (i = 0) {
    //         _class = 'left';
    //     } else {
    //         _class = 'right';
    //         i = 0;
    //     }

    //     var strVar = "<div class=\"" + _class + "d\">";

    //     strVar += "<div class=\"speech" + _class + "\">" + json.time + '@<span style="color:' + json.color + '">';
    //     strVar += "<\/div>";

    //     content.append(strVar);
    // });


    // $('#submitchat').click(function() {
    //     var msg = {
    //         uname: $('#status').html(),
    //         msg: $('#chatinput').val()
    //     }

    //     socket.send(msg);
    // });
});