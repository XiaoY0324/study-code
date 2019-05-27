/**
 * Monad函子就是一种设计模式，表示将一个运算过程，通过函数拆解成互相连接的多个步骤。你只要提供下一步运算所需的函数，整个运算就会自动进行下去==(一个拆箱装箱的过程)
 * Promise 就是一种Monad
 * Monad让我们避开了嵌套地狱，可以轻松的进行深度嵌套的函数式编程，比如IO和其他异步任务。
 */

class Functor {
    constructor() {
        this.__value = 0;
    }

    map(f) {
        Functor.of(f(this.__value))
    }
}

Functor.of = function () {
    return new Functor();
}

// ------------------------------------

 class Monad extends Functor {
    join() {
        return this.__value;
    }

    flatMap(f) {
        return this.map(f).join(); // 一层一层取出嵌套的函子的结果
    }
 }