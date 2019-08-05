/**
 * 接收外部 action
 */
let initState = {
    counter: {
        count: 0
    }
}

export default function counterReducer(state, action) {
    if (!state) state = initState; // 如果没有传 state 我们给它赋值为默认的 state

    switch (action.type) {
        case 'INCERMENT':
            // 状态(state) 不能被修改, 每一次返回一个新的 state
            return {
                ...state.counter,
                count: state.counter.count + 1
            } 
        case 'DECREMENT':
                // 状态(state) 不能被修改, 每一次返回一个新的 state
                return {
                    ...state.counter,
                    count: state.count - 1
                } 
        default: 
            return state;
    }
 };