Function.prototype._bind = function(toThis) {
  if (typeof this !== 'function') {
    throw new TypeError('请使用函数执行');
  }

  var aArgs = Array.prototype.slice.call(arguments, 1); // bind接收的有效参数 除去第一个this
  var oldFunc = this; // 保存原函数
  var copyOldFuncPrototype = function(){}; // 空函数 保存原函数原型链 守护目标函数new调用时的原型链
  var targetFn = function() { // 目标函数 外部调用他 this指向window
     // 修改this
     // console.log(this); // window
     // console.log(toThis); // {a: 2}
     // console.log(targetFn);
     // this instanceof targetFn === true 时候 说明targetFn被当成new的构造函数调用 this为targetFn构造函数的实例 此时保留this指向
     // 否则 就改变this指向
     // 合并bind 和 targetFn接收的有效参数
     console.log(aArgs, '----');
     return oldFunc.apply(this instanceof targetFn ? this : toThis, aArgs.concat(Array.prototype.slice.call(arguments)));
  };

  // 维护原型链
  if (this.prototype) {
    copyOldFuncPrototype.prototype = this.prototype;
  }

  console.log(copyOldFuncPrototype);
  targetFn.prototype = new copyOldFuncPrototype();

  return targetFn; // 返回的处理后的函数
};
