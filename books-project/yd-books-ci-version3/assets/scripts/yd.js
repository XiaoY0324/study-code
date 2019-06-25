/**
 * 帮助类库 手动实现类似 underscoreJs 的方法库 node client都能引入使用
 * 闭包 防止变量污染
 * 主要做添加图书时节流方法
 */
(function() {
    // 赋值当前系统环境 window or node
    var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this ||
    {};
    var ArrayProto = Array.prototype;
    var push = ArrayProto.push; // point free风格

    // var arr = [1, 2, 4];

    // _(arr).map(arr, item => {
    //     console.log(item, 1);
    // });

    // _.map(arr, item => {
    //     console.log(item, 2);
    // });

    var _ = function(obj) {
        if (obj instanceof _) return obj; // 如果传入的对象是 _ 的实例
        if (!(this instanceof _)) return new _(obj); // 非new _(xxx)调用时 只有new 调用 this才与构造函数的原型链相等

        this._wrapped = obj; 
    };

    // -------------------------  start 框架组成以外的核心代码 start     ------------------------

    /**
     * 节流
     */
    _.throttle = function(fn, wait=500) {
        let timer;

        return function (...args) {
            if (timer == null) {
                // 500ms 之内只能操作一次
                timer = setTimeout(() =>{ timer = null }, wait);

                return fn.apply(this, args);
            }
        }
    }


    // -----------------------------   end 框架组成以外的核心代码 end    -------------------------


    _.map = function (wrapped, cb) {
        console.log(wrapped, cb, '🍊');
    }

    // _.prototype.map = _.map; // 会污染map方法 实例下面map方法改变 会导致原型链下map方法改变
    // _.prototype.map = function() { // 防止污染构造函数下面的map方法
    //    return _.map.call(this); // 取构造函数下面的map方法执行 只是借用执行
    // }

    // 遍历 _ 下方法名 调用cb处理
    _.each = function(arr, cb){
        /**
         * arr 为 ['map', 'each', 'isFunction', 'mixin'...]的数组
         * iteratee 为回调
         */
        if (Array.isArray(arr)) {
            for (let item of arr) {
                cb && cb.call(_, item);
            }
        }
    };

    _.functions = function(obj, callback) { // 返回值为 ['map', 'each', 'isFunction', 'mixin'...]的数组 把挂在 _ 上的值全部取出来
        var names = [];

        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    _.isFunction = function(obj) {
        return typeof obj == 'function' || false;
    };

    // 混入 也是实现通过原型链直接取方法 而不修改原型链~
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() { // 取构造函数原型链下面的_[name]方法执行 只是借用执行
            var args = [this._wrapped];
            push.apply(args, arguments);
            return func.apply(_, args);
          };
        });
        return _;
    };

    _.mixin(_);

    // 挂载到全局环境上
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
          exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }
}())