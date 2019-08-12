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
		// reducer(state) {
		// 	return { ...state, age: state.age + 1 }
		// }
	}
}

function Button() {
	function handleAdd() {
		console.log('点击事件');
		store.dispath(actionAdd());
	}

	return <button onClick={ handleAdd }>点击增加</button>
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