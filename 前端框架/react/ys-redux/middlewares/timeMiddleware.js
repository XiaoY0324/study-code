/**
 * 打日志 中间件 最后一个参数为 action
 */

 // 柯里化的写法
 const timeMiddleware = (store) => (next) => (action) => {
    console.log('⏰', new Date().getTime());
    next(action);
 }

 export default timeMiddleware;