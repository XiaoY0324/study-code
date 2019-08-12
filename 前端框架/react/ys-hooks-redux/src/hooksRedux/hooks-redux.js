import React from 'react';

const { useReducer, useContext, createContext } = React;
 
export default function createStore(params) {
	const AppContext = createContext(); // 全局的数据的传递管理
	const { initialState } = { ...params }; // 初始化的状态

	// 这里是处理 action reducer 集中处理营
	const middleWareReducer = (lastState, action) => {
		switch(action.type) {
			case 'init':
				return {
					...lastState,
					age: lastState.age + 1
				}
			default:
				return {
					...lastState
				}
		}
	}

	// 新版 redux 状态管理机制
	const store = {
		_state: initialState,
		dispath: undefined,
		useContext: () => {
			return useContext(AppContext); // 返回 hooks 上的 useContext 需要把全局的数据对象(createContext 生成的) 传递进去
		}
	}

	const Provider = props => { 
	// 原来的 dispath 是我们自己搞的 现在是从 useReducer 中取到的~~ 高能注意
		const [state, dispath] = useReducer(middleWareReducer, initialState);

		if (!store.dispath) { // 如果 store 上没有 dispath  用人家的
			store.dispath = async(action) => {
				dispath(action);
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