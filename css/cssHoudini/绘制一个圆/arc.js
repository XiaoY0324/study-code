/**
 * Worklets 脚本 插入到 paint(重绘) 过程中去执行的 
 * */
registerPaint('background-canvas', class {
    static get inputProperties() {
        // 代表 paint 方法里 properties 参数可以取到的变量 
        // 我们使用一个 --background-canvas 函数包裹所有变量 就不必写一大串数组了
        return ['--background-canvas']; 
    }

    /*
        * ctx 绘制用的上下文    相比 canvas 的做了一些优化
        * geom 当前元素的一些基础属性
        * properties 所有的变量 css 中声明的所有可取的变量
    */
    paint (ctx, geom, properties) {
        eval(properties.get('--background-canvas').toString())(ctx, geom, properties);
    }
});