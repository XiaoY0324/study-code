#####  目录结构
```
    middlewares/*.js            一些增强 dispath 的中间件 最终返回一个新的 dispath 方法
    reducers/*.js               一个个 reducer, reducer 是一个方法, (curState, action) => nextState;
    redux/combineReducers.js    生成 reducer 的方法 介绍同上
    redux/createStore.js        生成 store 对象的方法集 store 里面包含了一系列的方法 getState, subscribe, dispath, replaceReducer..
    redux/applyMiddleware.js    合并中间件, 函数组合的方式解决调用柯里化的代码弊端
    redux/bindActionCreators.js 如果我想直接调 action, 而不通过 dispath..(类似vuex 的 mapActions) 返回一个 actions对象 { 'incerment': func() } emm.. 这是个解决办法
    redux/compose.js            合并函数, 工具类函数, 帮助我们打平洋葱式代码 ?
    redux/index.js              用于解构引用 redux/*.js 的根文件 
    index.html                  测试模板
    index.js                    redux 入口文件
```