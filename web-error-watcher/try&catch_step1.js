try {
    // error;  // 能捕获
    // var error = 'error; // 捕获不到 js引擎遇到语法错误 会退出进程 catch 不执行
    setTimeout(() => {  // 不能触发console.log(e) 触发的是浏览器自身的报错 所以捕获失败 
        error;
    });
} catch(e) {
    console.log(e); 
}
