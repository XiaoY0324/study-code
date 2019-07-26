setTimeout(() => {
    error;
});

window.onerror = function (msg, url, row, col, error) {
    console.log(msg, url, row, col, error, '我已经捕获到错误啦~');
    return true;
}

// try catch 用来捕获意料之内的错误 
// onerror用来捕获意料之外的错误 但捕获不到网络请求错误(记得关闭浏览器的Hide network)
// 需要返回true 返回true 之后 异常才会向上抛出
// 当遇到资源错误时 直接熄火