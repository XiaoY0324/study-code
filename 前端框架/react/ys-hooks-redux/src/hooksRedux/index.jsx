import React from 'react';
import YsHooksRedux from './hooks-redux';

const { Provider, store } = YsHooksRedux({ // 包裹组件的 Provider
	initialState: {
		name: '杨帅🏮',
		age: 18
	}
}); 

// 同步的 action (reducer in action 的写法)
function actionAdd() {
	return {
		type: 'init',
		reducer(state) {
			return { ...state, age: state.age + 1 }
		}
	}
}

// return promise 执行减 1 操作
function timeoutDecrease(a) {
	return new Promise(cb => setTimeout(() => cb(a - 1), 500));
}

// 异步的 action
const asyncActionDecrease = () => async(dispatch, ownState) => {
	const age = await timeoutDecrease(ownState.age);

	dispatch({
		type: "asyncDecrease",
		reducer(state) {
			return { ...state, age }
		}
	});
}

function Button() {
	// 同步更新数据
	function handleAdd() {
		console.warn(store);
		store.dispatch(actionAdd()); // 传进去一个对象 {type: "init", reducer: ƒ}
	}

	// 异步更新数据
	function handleDecrease() {
		store.dispatch(asyncActionDecrease()); // 传进去的是个函数 f
	}

	return <>
			<button onClick={ handleAdd }>点击增加(同步更新)</button>
			<button onClick={ handleDecrease }>点击减小(异步)</button>
		</>
}

function Page() {
	const state = store.useContext(); // 展示下看看

	return (
		<div>
			{ state.age }
			<hr/>
			<Button />
		</div>
	)
}

export default function App() {
	return (
		<Provider>
			<Page />
		</Provider>
	)
}