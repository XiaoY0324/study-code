/**
 * 合并 reducer
 */

 export default function combineReducers(reducers) {
     const reducerKeys = Object.keys(reducers);

     return function combination(state = {}, action) {
         /**
          * 生成一个新的state
          */

        let nextState = {};

        for (let item of reducerKeys) { 
            const reducer = reducers[item]; // 遍历所有的reducer

            // 当前的 state, 流式的操作, 就是 state 是每一个 reducer 遍历执行后的结果, 自然包含所有 reducer 里面调用的默认值 
            const currentStateForKey = state[item];
            const nextStateForKey = reducer(currentStateForKey, action);

            // 返回类似 { counter: { count: 1 } } 这样的结构 
            nextState[item] = nextStateForKey; 
        }

        return nextState;
     }
 }