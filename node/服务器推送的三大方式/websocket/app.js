const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

server = http.createServer(app);
const io = socketIO(server);

// app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// WebSocket 连接监听
io.on('connection', function(socket) {
  socket.emit('open', 'iii'); // 通知客户端已连接 发送给open事件 事件名可以自定义

  // 打印握手信息
  console.log(socket.handshake);

  // 构造客户端对象
  var client = {
    socket: socket,
    name: false
  }

  // 对message事件的监听
  socket.on('message', function(msg) {
    console.log('服务器接收到客户端的消息', msg);
    socket.emit('message', { result: msg })
    // console.log('接收到的msg', msg);

    // var obj = {
    //   time: getTime()
    // };

    // if (!client.name) {
    //   // 第一次登陆
    //   client.name = msg.uname;
    //   obj['text'] = client.name;
    //   obj['author'] = 'System';
    //   obj['type'] = 'welcome';
    //   console.log(client.name + 'login');

    //   // 返回消息(可以省略)
    //   socket.emit('system', obj);
    //   // 广播向其他用户发消息
    //   socket.broadcast.emit('system', obj);
    // } else {
    //   // 如果不是第一次的连接, 正常的聊天信息
    //   obj['text'] = msg.msg;
    //   obj['author'] = client.name;
    //   obj['type'] = 'message';
    //   obj['color'] = getColor();

    //   // 返回消息(可以省略)
    //   socket.emit('onMessage', obj);
    // }
  });

  // 监听退出事件
  socket.on('disconnect', function() {
    // 广播用户已退出
    // if (client.name) {
    //   var obj = {
    //     time: getTime()
    //   }

    //   obj['author'] = client.name;
    //   obj['author'] = 'System';
    //   obj['type'] = 'bye';

    //   // 返回消息(可以省略)
    //   socket.emit('onMessage', obj);

    //   // 广播向其他用户发消息
    //   socket.broadcast.emit('system', obj);
    // }
  });
});

app.get('/i', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
 
server.listen(3000);
module.exports = app;
