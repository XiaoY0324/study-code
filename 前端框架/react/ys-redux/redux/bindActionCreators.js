/**
 * 类似 vuex 的 mapActions
 * ...mapActions == actions 里面的 action 都取出来
 * 目的为了整合所有的 action 可以通过 actions.incerment() 去调用 递增的方法 类似下面注释的样子
 */
//  function incerment() {
//      return { type: 'INCERMENT' }
//  }

//  期待生成的 actions 集合 用户可以不使用 dispath 去操作 action
//  const actions = {
//      'incerment': function() {
//          return store.dispatch(incerment.apply(this, arguments))
//      }
//  }

//  actions.incerment();

function bindActionCreator(actionCreators, dispatch) {
    /**
     * actionCreators 传入进来的函数体
     * dispatch 
     */
    return function() {
        return dispatch(actionCreators.apply(this, arguments));
    }
}

export default function bindActionCreators(actionCreators, dispatch) {
    /**
     * actionCreators 传入进来的函数体(incerment) 判断了如果为 {} 或 null 的情况
     */
    // 同步
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }

    if (typeof actionCreators !== 'object' || actionCreators === null) {
        throw new Error('actionCreators 必须是函数或者数组');
    }

    // 如果传入 actionCreators 为 { a, b, c}
    const keys = Object.entries(actionCreators); //   { ['0', incerment] }
    const boundActionsCreators = {}; // 返回的 actions 对象

    for (let item of keys) {
        const [key, actionCreator] = item;

        if (typeof actionCreator === 'function') {
            boundActionsCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }

    console.log('合并好的 actions', boundActionsCreators);
    return boundActionsCreators;
}