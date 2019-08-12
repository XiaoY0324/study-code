import compose from './compose.js';

/**
 * 打破柯里化带来的坏处(洋葱式代码)
 * 使使用中间件更优雅 a(b(c(dispath))) -> applyMiddleware(a, b, c, d)
 */
const applyMiddleware = function(...middlewares) {
    return function(oldCreateStore) {
        return function newCreateStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState); // 根据老的逻辑 创建 store
            // let dispatch = store.dispatch;

            // 全部中间件执行 返回 { 0: (next) => xxx, 1: (next) => xxx }
            const chain = middlewares.map(middleware => middleware(store)); 
            console.log('生成的 dispath 函数集的链', chain);

            // // 调整执行顺序 使其按传入执行
            // chain.reverse().map(middleware => {
            //     dispatch = middleware(dispatch); // 每次执行返回一个上次封装后的 dispath
            // });

            // console.log('生成的结果', dispatch);
            // store.dispatch = dispatch;
            // return store;
            const dispatch = compose(...chain)(store.dispatch);

            return {
                ...store,
                dispatch
            }
        }
    }
}

export default applyMiddleware;