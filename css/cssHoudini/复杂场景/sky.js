/**
 * Worklets 脚本 插入到 paint(重绘) 过程中去执行的 
 * */
class YsSky {
    static get inputProperties() {
        // 代表 paint 方法里 properties 参数可以取到的变量 
        return ['--sky-density', '--star-opacity', '--star-seed']; 
    }

    /*
        * ctx 绘制用的上下文    相比 canvas 的做了一些优化
        * geom 当前元素的一些基础属性
        * properties 所有的变量 css 中声明的所有可取的变量
    */
    paint (ctx, geom, properties) {
        const xMax = geom.width; // 元素宽度
        const yMax = geom.height; // 元素高度

        ctx.fillRect(0, 0, xMax, yMax); // 填充

        let starDesity = properties.get('--sky-density').toString() || 1; // 获取密度

        starDesity > 1 && (starDesity = 1);

        let hmTimes = Math.round((xMax + yMax) * starDesity); // 渲染数量(尺寸 * 密度)

        for (let i = 0; i < hmTimes; i++) {
            let x = Math.floor(Math.random() * xMax + 1); // 星星x坐标
            let y = Math.floor(Math.random() * yMax + 1); // 星星y左标
            let size = Math.floor(Math.random() * 2 + 1); // 星星尺寸
            const hue = Math.floor(Math.random() * 360 + 1);
            const opacityOne =  Math.floor(Math.random() * 9 + 1);
            const opacityTwo = Math.floor(Math.random() * 9 + 1);
            const opacity = +('.' + (opacityOne + opacityTwo) * starDesity);

            ctx.fillStyle = `hsla(${ hue }, 30%, 80%, ${ opacity })`;
            ctx.fillRect(x, y, size, size);
        }
    }
}

registerPaint('ys-sky', YsSky);

