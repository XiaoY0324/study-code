import { createStore, combineReducers } from './redux/index.js';
import CounterReducer from './reducers/counterReducer.js';
import InfoReducer from './reducers/infoReducer.js';

// 初始化 state
// let initState = { 
//     counter: {
//         count: 0
//     },
//     info: {
//         name: '',
//         description: ''
//     }
// };

// 合并reducer 通过 key 区分当前使用哪个 reducer
const reducer = combineReducers({
	counter: CounterReducer,
	info: InfoReducer
});

// 通过 createStore 创建了一个 state
// let store = createStore(reducer, initState); 
let store = createStore(reducer);

console.log('取当前的默认状态', store.getState()); // 若没有执行 dispath 操作 此时的 store 为 undefined, 这不是我们想要的, 所以我们在 createStore.js 中默认去调了一次 dispath
// 订阅 state
store.subscribe(() => {
	let state = store.getState(); // 得到当前state

	console.log('获取当前状态', state);
});

// 执行 count 增加操作 
setTimeout(function () {
	store.dispath({
		type: 'SET_NAME',
		name: '猫猫本尊'
	});
}, 1000)

// 执行 count 递减操作 
// store.dispath({
//     type: 'DECREMENT'
// });