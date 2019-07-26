// 继续歇菜 promise 错误捕获不到
Promise.reject('xxx');

window.addEventListener('unhandledrejection', function(e) {
    e.preventDefault(); // 阻止掉页面报错, 自己抛出错误
    console.log(e.reason, `promise错误`);
    return true;
});

new Promise(resolve => {
    resolve(3);
}).then(() => {
    throw '我来给你错误'; // promise 里 throw的信息 也能被 unhandledrejection 事件捕获到
});