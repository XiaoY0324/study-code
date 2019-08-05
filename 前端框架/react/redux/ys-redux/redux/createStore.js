/**
 * 接收默认状态 添加发布订阅
 */
export default function createStore(reducer, initState) {
    let state = initState;
    let listeners = []; // 监听者列表

    function getState() {
        return state;
    };

    function subscribe(listener) {
        listeners.push(listener); // 维护监听者列表
    };

    // 接受外部 action 行为 对 state 进行更新
    function dispath(action) {
        /**
         * 接受老的 state 和 action
         * 返回一个新的 state 
         */
        state = reducer(state, action); 

        // 通知监听者
        for (const listener of listeners) {
            console.log(listener); // 打印 订阅者 订阅者是一个函数哦 store.subscribe(fn); 也就是 fn
            listener();
        }
    };

    dispath({ type: Symbol() }); // 如果没有调用 dispath 默认的 state 不能为空 所以我们帮它调一次
    
    return {
        getState,
        subscribe,
        dispath
    }
}