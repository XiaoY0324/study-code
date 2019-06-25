// 如果我们想往 Reflect 上面 挂东西怎么办呢
// js没有提供这样的权限
// es7 之后 我们可以使用 reflect-metadata 来完成

require('reflect-metadata');

class C {
    method () {
        console.log(this);
    }
}

Reflect.defineMetadata('val', '测试', C.prototype, 'method');

let metadata = Reflect.getMetadata('val', C.prototype, 'method');

console.log('🌶', metadata);

// 参考链接: https://www.npmjs.com/package/reflect-metadata