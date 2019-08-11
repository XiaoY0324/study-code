import { createStore, combineReducers, applyMiddleware, bindActionCreators } from './redux/index.js';
import CounterReducer from './reducers/counterReducer.js';
import InfoReducer from './reducers/infoReducer.js';

// 引入我们的中间件 middlerware 是对 dispath 的增强
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import timeMiddleware from './middlewares/timeMiddleware.js';

// 引入 actions
import { incerment } from './actions/count.js';

// 合并reducer 通过 key 区分当前使用哪个 reducer
const reducer = combineReducers({
	counter: CounterReducer,
	info: InfoReducer
});

const rewriteCreateStoreFunc = applyMiddleware(timeMiddleware, loggerMiddleware);

/**
 * reducer 合并后的 reducer 方法的集合 (curState, action) => nextState;
 * initState  state 初始值, 不传会取每个 reducer 里定义的默认值
 * rewriteCreateStoreFunc  糅合中间件, 返回一个增强后的 dispath函数
 */
let store = createStore(reducer, {}, rewriteCreateStoreFunc);

/**
 * 更新 reducer 的方法 考虑到如果我们创建完 store 后如果我们再想更新 reducer 
 */
// const nextReducer = combineReducers({
// 	counter: counterReducer,
// 	info: InfoReducer
// });
// store.replaceReducer(nextReducer);

// console.log('取当前的默认状态', store.getState()); // 若没有执行 dispath 操作 此时的 store 为 undefined, 这不是我们想要的, 所以我们在 createStore.js 中默认去调了一次 dispath

// 订阅 state
store.subscribe(() => {
	let state = store.getState(); // 得到当前state

	console.log('获取state', state);
});

// 执行 count 增加操作 
store.dispatch({
	type: 'INCERMENT'
});

// 执行 count 递减操作 
store.dispatch({
    type: 'DECREMENT'
});

/**
 * 不通过 dispatch 更新 action  获取 actions 
 * @param
 * func: 传入一个函数体(解构得来的 incerment)
 * dispatch
 */
const actions = bindActionCreators({ incerment }, store.dispatch); 

actions.incerment();