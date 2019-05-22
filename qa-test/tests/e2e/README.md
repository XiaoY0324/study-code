## e2e端对端测试

### selenium-webdriver (baidu.spec.js)
> 1. 安装selenium-webdriver 
```
    yarn add selenium-webdriver --save
```
> 2. 添加基础代码到baidu.spec.js
```js
    const {Builder, By, Key, until} = require('selenium-webdriver');
    
    (async function example() {
      let driver = await new Builder().forBrowser('firefox').build(); // 指定火狐浏览器
      try {
        await driver.get('https://www.baidu.com'); // 找到百度首页
        await driver.findElement(By.name('wd')).sendKeys('javascript', Key.RETURN); // 找到name为wd的标签(搜索框) 输入javascript 按回车
        await driver.wait(until.titleIs('javascript_百度搜索'), 1000);
      } finally {
        await driver.quit();
      }
    })();
```
> 3. 添加命令 e2e -> "node ./tests/e2e/baidu.spec.js"
> 4. 下载自己系统的驱动文件 解压扔到我们的根目录 也就是QA-test/
【https://www.npmjs.com/package/selenium-webdriver】
> 5. npm run e2e:baidu 走你

### rize + puppeteer (git.spec.js)
> rize: 一个可以让你简单、优雅的使用 puppeteer 的 Node.js 库
> puppeteer: phantom.js(单例测试时候的无头浏览器)不维护后 这个是谷歌推出的 可以理解成我们日常使用的Chrome的无界面版本以及对其进行操控的js接口套装, 也是无头浏览器

> 1. 安装依赖包 yarn add rize puppeteer --save
> 2. npm run e2e:git

```js
    const Rize = require('rize');
    const rize = new Rize();
    rize
    .goto('https://github.com/')
    .type('input.header-search-input', 'node')
    .press('Enter')
    .waitForNavigation()
    //   .assertSee('xxx.js') // 换这个试试 
    .assertSee('node.js')
    .end()  // Don't forget to call `end` function to exit browser!
```