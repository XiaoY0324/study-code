引用函数式编程的一句话, 我们可以把"范畴"想象成一个容器，里面包含两样东西。值(value)、值的变形关系，也就是函数。

1. 范畴论 世界对象和对象之间的关系
2. container(容器) 在 redux 中表现为 store
3. __value(值) 在 redux 中表现为 currentState
4. f (变形关系) 在 redux 中表现为 action
5. map(容器能对本身的对象进行遍历，接受变形关系，这个方法为map) 在 redux 中表现为 currentReducer
6. IO (脏操作) 在 redux 中表现为 middleware


##### node_modules/redux/src/* 分析文件用途
applyMiddleware.js  --------------------------------     redux 管理中间件 
bindActionCreators.js ------------------------------     把所有的 action 拿过来，能让我们调用 action
combineReducers.js  --------------------------------     合并 reducer
compose.js  ----------------------------------------     函数组合 柯里化写的洋葱代码层数较多时的解决方案 纯函数以及如何把它柯里化最后写出了洋葱式的代码 h(g(f(x))), 为了解决函数嵌套的问题, 我们需要用到"函数组合"。
createStore.js  ------------------------------------     创建一个 store 容器
index.js  ------------------------------------------     根文件
utils  ---------------------------------------------     工具函数

##### redux 细节
1. 状态(state) 不能被修改(遵循函数式编程的理念，状态不可变，产生一个新的), 每一次返回一个新的 state

#### ys-redux 
手动实现一个redux
