/**
 * 打日志 中间件 最后一个参数为 action
 * 相当于增强了 dispath 做了一系列操作 最后调用 dispath(action)
 * 
 * @param
 * store -> { getState, subscribe, dispath, replaceReducer... }
 * next -> store.dispath 方法
 * action -> 传入的状态 { type: 'INCERMENT' }
 */

 // 柯里化的写法
 const loggerMiddleware = (store) => (next) => (action) => {
    console.log('cur state', store.getState());
    console.log('action', action);
    console.log("✨✨✨✨-------------------------");
    next(action);

    console.log('next state', store.getState());
 }

 export default loggerMiddleware;