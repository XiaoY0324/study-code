// 需要在事件捕获阶段去拦住资源请求的错误
window.addEventListener('error', function (msg, url, row, col, error) {
    console.log(msg, url, row, col, error, '我已经捕获到错误啦~'); // 捕获到错误把当前时间发给服务端 服务端返回错误日志~
    return false;
}, true);

// 继续歇菜 promise 错误捕获不到
Promise.reject('xxx');
