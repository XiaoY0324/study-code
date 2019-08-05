/**
 * 接收外部 action
 */
let initState = {
    name: '🐱猫猫今天也很可耐~',
    description: '猫猫的描述🐈'
}

export default function InfoReducer(state, action) {
    if (!state) state = initState; // 如果没有传 state 我们给它赋值为默认的 state

    switch (action.type) {
        case 'SET_NAME':
            // 状态(state) 不能被修改, 每一次返回一个新的 state
            return {
                ...state,
                name: action.name
            } 
        case 'SET_DESCRIPTION':
                // 状态(state) 不能被修改, 每一次返回一个新的 state
                return {
                    ...state,
                    count: action.description
                } 
        default: 
            return state;
    }
 };