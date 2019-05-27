// 定义一个容器
var Container = function (x) {
    this._value = x;
}

// 函数式编程一般约定，函子有个of方法
//  注意不是挂在原型链上哦~ 挂在原型链上的话 就得通过new实例去访问了 构造函数无法直接访问
Container.of = x => new Container(x);

// 一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器 得到一个新的函子
Container.prototype.map = function(f) {
    // return new Container() // 为什么不这么写 函数式编程为了区分面向对象的写法 所以给函子挂了一个of方法
    return Container.of(f(this._value));
} 

Container.of(3)
    .map(x => x + 1) // Container {_value: 4}
    .map(x => 'result is ' + x) // Container {_value: "result is 3"}

/**
 * 联想数组 就是最常见的函子
 */

Array.of(3).map(x => x + 1); // [4]

export default Container;