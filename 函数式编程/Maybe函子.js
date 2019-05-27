/**
 * 函子接受各种函数，处理容器内部的值。这里就有一个问题，
 * 容器内部的值可能是一个空值(比如null), 而外部函数未必
 * 有处理空值的机制，如果传入空值，很可能就会出错
 * Maybe函子 进行优雅的取值
 */

var Maybe = function(x) {
    this.__value = x;
}

Maybe.of = function(x) {
    return new Maybe(x);
}

Maybe.prototype.map = function(f) {
    return this.isNothing ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
}

Maybe.of(null).map(x => console.log(x)); // Maybe {__value: null}