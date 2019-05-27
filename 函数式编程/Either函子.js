/**
 * 条件运算if... else...是最常见的运算之一，函数式编程里面，
 * 使用Either函子标表达。Either函子有两个值，left 和 right。
 * 右值是正常情况下使用的值，左值是右值不存在时使用的默认值
 */

class Either extends Functor {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    map(f) {
        return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right)
    }
}

Either.of = function(left, right) {
    return new Either(left, right);
}

var addOne = function(x) {
    return x + 1;
}

console.log(Either.of(5, 6).map(addOne)); // Either(5, 7)

console.log(Either.of(1, null).map(addOne)); // Either(2, null)
