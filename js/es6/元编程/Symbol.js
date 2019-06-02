var data = {
    [Symbol.toPrimitive]: ((i) => () => {
        // 缓存了 i 的值
        console.log(i);
        return ++i;
    })(0) 
    // 自执行函数传入个初始值为 0, 闭包内缓存的 i为 0, 注意是 ++i, 
    // ++i, 为前置加，则先执行加1操作，再执行后续操作，因此在此处先加1，再执行return操作，
    // i+1, i++, 为后置加，会先执行当前操作，再执行加1操作，因此会先return, 后+1
    // 但在一个函数中return了，后面就执行不到了，所以是直接返回 i 会一直为 0
}

if (data == 1 && data == 2 && data == 3) { // 注意不是三等号 调用data的Number方法 触发Symbol.toPrimitive
    console.log('bingo'); 
}
// 按正常理解 是不能打印bingo的 要打印怎么办 我们使用元编程
// ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
// 对象的Symbol.toPrimitive属性。指向一个方法。该对象被转化为原始类型的值时，会调用这个办法，返回该对象对应的原始类型值。
// Symbol.toPrimitive被调用时,会接受一个字符串参数，表示当前运算的模式，一个有三种模式。
// Number:该场合需要转成数值
// String:该场合需要转成字符串
// Default:该场合可以转成数值，也可以转成字符串。
// es6自执行函数 传入初始值 0 每次调用data变量 值加 1

// 举几个栗子🌰

// 没有 Symbol.toPrimitive 属性的对象
var obj1 = {};
console.log(+obj1);       //NaN
console.log(`${obj1}`);   //"[object Object]"
console.log(obj1 + "");   //"[object Object]"

// 上面的结果我们可以通过上面说的toSting()方法和value方法去理解。 
// 第一个，+符号。可以看成是是把数据转化为数字类型，由于obj是个空对象，所以结果是NaN 
// 第二个，是es6中的字符串的新语法，这里需要的结果是一个字符串，所以使用的是toString()方法，而toString()方法返回的是对象的类型。 
// 第三个，这里是连接符连接obj。实际上也是需要字符串的结果，所以同理。

// 拥有 Symbol.toPrimitive 属性的对象
let obj = {
    [Symbol.toPrimitive](hint) {
      if(hint === 'number'){
        console.log('Number场景');
        return 123;
      }
      if(hint === 'string'){
        console.log('String场景');
        return 'str';
      }
      if(hint === 'default'){
        console.log('Default 场景');
        return 'default';
      }
    }
  }
  console.log(2 * obj); // Number场景 246
  console.log(3 + obj); // Default场景 3default
  console.log(obj + "");  // Default场景 default
  console.log(String(obj)); // String场景 str
  // 由以上例子可以总结，一般情况下，+连接运算符传入的参数是default,
  // 而对于乘法等算数运算符传入的是number。对于String(str),${str}等情况，传入的参数是defalut。

//   当然，你也可以重写一个不做参数判断的Symbol.toPrimitive方法，结合上面提到的toString,可以有以下例子。

let ab = {
    valueOf() {
        return 0;
    },
    toString() {
        return '1';
    },
    [Symbol.toPrimitive]() {
        return 2;
    }
}
console.log(1 + ab); // 3
console.log('1' + ab); // 12

// 参考文档: https://segmentfault.com/a/1190000016300245