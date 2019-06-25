/**
 * Funtor.of(value || func) 函子包含的值可能不仅仅是接收值 也有可能是函数
 * AP函子就是处理函数的
 */

class Functor {
    constructor (val) {
        this.__value = val;
    }

    map(f) {
        return Functor.of(f(this.__value));
    }
}

Functor.of = val => new Functor(val);

const addTwo = x => x + 2;

class Ap extends Functor {
     constructor(fn) {
        super();
        this.__value = fn;
     }

     map(obj) {
        return Ap.of(this.__value(obj.__value));
     }
 }

 Ap.of = fn => new Ap(fn);

//  Ap.of(addTwo).map(Functor.of(2));
const apObj = Ap.of(addTwo); // Ap {__value: ƒ}
const functorObj = Functor.of(2); // Functor {__value: 2}

apObj.map(functorObj); // Ap {__value: 4} 通过Ap函子在函数和值之间转换