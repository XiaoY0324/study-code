import React from 'react';

const { useReducer, useContext, createContext } = React;

// 日志中间件
function middleWareLog(store, lastState, nextState, action) {
	console.log(action.type, '日志中间件🍊');
	console.log('🦊 lastState --->', lastState);
	console.log('🦊 nextState --->', nextState);
}

function reducerInAction(state, action) { // 通过reducer 获取新的state 
	// 若action里面有reducer 且为一个函数
	if (typeof action.reducer == 'function') {
		console.log('已经处理了 reducer in action');
		return action.reducer(state);
	}

	return state;
}
 
export default function createStore(params) {
	const AppContext = createContext(); // 全局的数据的传递管理
	const { initialState, reducer, middleWare } = { // 初始化的状态
		reducer: reducerInAction,
		...params,
		middleWare: [middleWareLog] // 挂载的中间件
	}; 

	// 新版 redux 状态管理机制
	const store = {
		_state: initialState,
		dispatch: undefined,
		getState: () => { // 此方法可能我们用不到了..
			return store._state;
		},
		useContext: () => {
			return useContext(AppContext); // 返回 hooks 上的 useContext 需要把全局的数据对象(createContext 生成的) 传递进去
		}
	}

	// 这里是处理 action reducer 集中处理营
	const middleWareReducer = (lastState, action) => {
		// state 更新前使用中间件 
		if (!Array.isArray(middleWare)) {
			throw new Error('middleware 必须是数组');
		}

		// action get reducer && reducer(state) 生成新的 state
		let nextState = reducer(lastState, action); // 新的更新后的 state

		for (let item of middleWare) {
			const newState = item(store, lastState, nextState, action);

			if (newState) {
				nextState = newState;
			}
		}
		
		store._state = nextState;
		return nextState;
	}

	const Provider = props => { 
		// 原来的 state, dispatch 是我们自己搞的 现在是从 useReducer 中取到的~~ 高能注意 
		// 传入一个 reducer 和 初始数据 返给我们一个经过处理的 state 状态, 一个 dispatch 方法
		const [state, dispatch] = useReducer(middleWareReducer, initialState);

		if (!store.dispatch) { // 如果 store 上没有 dispatch  用人家的 并且缓存引用
			store.dispatch = async(action) => {
				// console.log(action, '🍎');
				if (typeof action == 'function') {
					return action(dispatch, store._state);
				}

				dispatch(action);
			}
		}

		// <React.createContext().Provider/>  react 16.8的新api哦 Context 主要是解决props向多层嵌套的子组件传递的问题，原理是定义了一个全局对象
		// Provider 这个组件的意思是 如果一旦给 Provider 组件传递进一些值的话 那么我就可以对所有的子组件 灌进去一个叫做 value 的东西
		return <AppContext.Provider {...props} value={ state } /> 
	}

	return {
		Provider,
		store
	}
}