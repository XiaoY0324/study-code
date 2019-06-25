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