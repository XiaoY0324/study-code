> ==phantomCss==: phantomJs的孪生妹妹<br>
> ==backstopjs==: 更好用(本次示栗用的)

>> 1. cnpm install -g backstopjs(yarn add 不太行)
>> 2. backstop init 生成backstop.json 按如下修改
>> 3. 配置命令 "backstop": "backstop test"
>> 4. npm run backstop 走你

```js
// 以测试腾讯地图为例 [http://map.qq.com/m/]
{
    "id": "qq",
    "viewports": [
        {
          "label": "phone",
          "width": 375,
          "height": 667
        },
        {
          "label": "ipad",
          "width": 1024,
          "height": 768
        }
    ],  
    "scenarios": [
        {
          "label": "map",
          "cookiePath": "backstop_data/engine_scripts/cookies.json",
          "url": "http://map.qq.com/m/", // 测试地址
        }
    ],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference", // 参考的文件夹 ui图放里面
        "bitmaps_test": "backstop_data/bitmaps_test", // 生成的文件的文件夹 每次测试都会生成图片 根据测试地址
        "engine_scripts": "backstop_data/engine_scripts", // 引擎脚本
        "html_report": "./docs/backstop_data/html_report", // 报表
        "ci_report": "./docs/backstop_data/ci_report" // ci报表
    }
}
```
![image](http://note.youdao.com/yws/res/3676/2017E4E7905144A3A7DEB8A2479E4149)
