var fs = require('fs');
var _ = require('lodash');

var compose = _.flowRight;

// 基础函子
class Funtor {
    constructor(val) {
        this.val = val;
    }

    // 接收变形关系
    map(f) {
        return new Funtor(f(this.val));
    }
}

// Moned函子
class Moned extends Funtor {
    join() {
        return this.val;
    }

    flatMap(f){
        // console.log(this.map(f).val);
        return this.map(f).join();
    }
}

// Io函子
// 原型(非原型链)有个of方法 返回自身的实例 作为下一步脏操作的调用者
// 原型有个map方法 接收脏操作函数 返回合并后的脏操作(含上一步)。 且上一步的返回值作为下一步的参数
class IO extends Moned {
    static of(f) {
        return new IO(f); // this.val => Function
    }

    map(f) {
        return IO.of(compose(f, this.val))
    }
}

// 定义脏操作
var readFile = fileName => {
    return IO.of(() => {
       return fs.readFileSync(fileName, 'utf-8');
    });
}

var print = (text) => {
    console.log('🍎');
    return IO.of(() => {
        return console.log(text + ' 函数式')
    })
}

var tail = function (x) {
    // console.log(x);
    return IO.of(function () {
        return x +"【第二步 tail】";
    });
}

const result = readFile('./user.txt')
    .flatMap(print)()
    // .flatMap(tail)();

console.log(result.val());