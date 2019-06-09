setTimeout(function () {
    console.log(1);
}, 100)

setImmediate(function () {
    console.log(2);   
});

process.nextTick(() => {
    console.log(3);
});

new Promise((resolve, reject) => {
    console.log(4);
    resolve(4);
}).then(function () {
    console.log(5);
});

console.log(6);

// 4
// 6
// 3 同步任务执行完 第二轮循环马上执行 nextTick
// 5 promise 异步回调优先级高于setTimeout 和 setImmediate
// 1 
// 2
// setTimeout 和 setImmediate这两个比较有意思，按道理是setTimeout最末执行 却先输出了 怎么会这样呢
// 改下setTimeout 100ms 试下结果？？？
// 传送门 https://segmentfault.com/a/1190000013102056