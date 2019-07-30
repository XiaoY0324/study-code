##### css变量
```
    :root {
        --opacity-val: 0.1;
        --mouse-x: 0.2;
        --margin-left-val: 20px;
    }

    div {
        opacity: var(--opacity-val);
        margin-left: calc(1000px * var(--mouse-x));
        // 默认值
        margin-left: var(--mouse-x, 10px);  
    }
```

##### 判断语句
```
    /* 写判断 如果支持display: flex 属性 则 */
    @supports(display: flex) {
        html, body {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    } 
```

##### css-doodle
一个绘制css图案的web component组件 css沙箱 不影响外部css