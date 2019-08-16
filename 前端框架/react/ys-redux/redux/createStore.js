/**
 * 接收默认状态 添加发布订阅
 */
export default function createStore(reducer, initState, rewriteCreateStoreFunc) {
    // 如果有 则走合并中间件中的逻辑
    if (rewriteCreateStoreFunc) {
        const newCreateStore = rewriteCreateStoreFunc(createStore);

        return newCreateStore(reducer, initState);
    }

    let state = initState;
    let listeners = []; // 监听者列表

    function getState() {
        return state;
    };

    function subscribe(listener) {
        listeners.push(listener); // 维护监听者列表

        // 取消订阅 怎么取消 ？？？
        return function unsubscribe() {
            const index = listeners.indexOf(listener);

            listeners.splice(index, 1);
        }
    };

    // 接受外部 action 行为 对 state 进行更新
    function dispatch(action) {
        /**
         * 接受老的 state 和 action
         * 返回一个新的 state 
         */
        state = reducer(state, action); 

        // 通知监听者
        for (const listener of listeners) {
            // console.log(listener); // 打印 订阅者 订阅者是一个函数哦 store.subscribe(fn); 也就是 fn
            listener();
        }
    };

    // createStore 后如果想更新 reducer 提供更新方法
    function replaceReducer(nextReducer) {
        reducer = nextReducer;

        dispatch({ type: Symbol() }); // 执行更新
    }

    dispatch({ type: Symbol() }); // 如果没有调用 dispatch 默认的 state 不能为空 所以我们帮它调一次
    
    return {
        getState,
        subscribe,
        dispatch,
        replaceReducer
    }
}