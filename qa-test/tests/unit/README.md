# 单元测试
> 新建项目~/ys/qa测试/
> yarn init
> 新建tests>unit文件夹 新建文件index.js index.spec.js
> karma 安装 (cnpm i karma --save-dev)
> karma-cli 全局安装 yarn global add karma-cli (用于init)
> karma init (生成karma.conf.js 最后一项监听文件选择no)
> yarn add karma-jasmine karma-chrome-launcher jasmine-core --dev
> 配置package.json.scripts.unit -> karma start
> npm run unit 走你
> yarn add karma-coverage --dev 代码覆盖率检查

```js
    // karma是一个集成的测试环境。
    // karma.conf.js 里面需要配置file(指定测试文件的文件夹) 和 singleRun: true 指定不使用图形界面
    
    {
        files: [
          "./tests/**/*.js",
          "./tests/**/*.spec.js"
        ],
        // browsers: ['PhantomJS'], // 无头(虚拟)浏览器 二进制程序 无界面 只支持es5代码 可以持续集成
        browsers: ['Chrome'], // 有头的将来没法做持续集成
        /**
         * false -> 当browsers不为PhantomJs(无头浏览器)时候 会打开浏览器 
        */
        singleRun: false
    }
    
    // 如果配置成PhantomJs 和 true 时候 就是无头了, 试下？
```

### 测试用例书写
```js
    describe("测试基本函数的API", function () {
    // 钩子函数 beforEach befor 等..
    it("+1函数的应用", function () {
        expect(window.add(1)).toBe(1);
        expect(window.add(2)).toBe(3);
    })
});
```

### 检查单测覆盖率
> [https://www.npmjs.com/package/karma-coverage]
> 生成报表路径 doc/coverage/*
