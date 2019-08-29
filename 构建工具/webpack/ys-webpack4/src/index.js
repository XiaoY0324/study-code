
// 实现的 webpack 我们需要把这段代码换成
// var sync = __webpack_require__('./src/sync.js');
import sync from './sync';

console.log(sync);
console.log('我是入口文件🍌');

