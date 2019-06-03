// Proxy 代理
// Reflect 反射

function Tree () {
    // Proxy 参数一: target 用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
    // Proxy 参数二: 一个对象，其属性是当执行一个操作时定义代理的行为的函数。
    return new Proxy({}, handler);
}

var handler = {
    // target 为 目标对象  key为属性名, recevier为Proxy或者继承Proxy的对象(感觉和 target 差不多啊)
    get (target, key, receiver) {
        console.log(receiver, tree);
        if (!(key in target)) {
            target[key] = Tree();
        }

        return Reflect.get(target, key, receiver);
    }
}

var tree = new Tree();

tree.ys.student = '小驴'; // 怎么把它变成一层一层的对象

console.log(tree); // 得到层层嵌套的对象

