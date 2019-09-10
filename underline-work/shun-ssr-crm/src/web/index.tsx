import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './pages/app';

// render 换成 hydrate 做组件调和 不然服务端和客户端的代码会各渲染一次的
ReactDOM.hydrate(<App />, document.getElementById('main'));
