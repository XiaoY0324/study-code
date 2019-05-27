### 为什么会有同源策略
> 同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。 可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。 同源策略，它是由Netscape(美国网景公司)提出的一个著名的安全策略。

### 什么是同源
> 1. 协议相同
> 2. 端口相同
> 3. 域名相同

### 浏览器不同的域名不能访问对应的cookie, 但是对表单提交没有限制
### 通过koa的示栗 可以看出form表单提交并不存在跨域问题
> 1. http-server ./   // localhost:8080启动端口
> 2. node koa/server.js   // 服务跑在localhost:3000
> 3. 成功提交数据

### 同源策略限制的对象(跨域)
> 1. Cookie、LocalStorage和IndexDB无法读取
> 2. DOM无法获得
> 3. AJAX请求不能发送(img, iframe, script的src可以)

### 一级域名相同, 二级域名不同(我们修改/etc/hosts指向来测试), 如何共享cookie(hosts)
> 1. http://local.shunshunliuxue.com:8080/index.html
> 2. http://test.shunshunliuxue.com:8080/testCookie.html
```js
    // 方法1 index.html设置domain
    // index.html
    document.cookie = 'name=共享cookie0220; domain=shunshunliuxue.com'; 
    // testCookie.html
    console.log(document.cookie);

    // 方法2 服务端设置cookie 指定域名为 .shunshunliuxue.com(最实用的策略)
``` 

### 怎么突破同源策略
1. jsonP

```js
    function jsonpFn(data) {
        // 拿到数据
    }

    // 页面利用img等标签请求
    // <img src="http://xx.com/aws/list_data.php?callback=jsonpFn" alt="">

    // PHP那边执行回调
    if (callback) {
        jsonpFn({ data: 123 });
    } else {
        return { data: 123 }
    }
```
2. html标签(img, iframe, script) link(background)

3. CORS(跨资源分享) 跨域ajax的根本解决方法

#### 高级解决方法
4. postMessage(跨文档通信) http://aaa.com => http://bbb.com发消息，通过postMessage， 读取其他窗口的localStorage也成为可能。

5. websocket(不实行同源策略)

6. 代码压缩成图片 在别的域访问


### html 语义化
[http://www.cnblogs.com/freeyiyi1993/p/3615179.html]

##### 什么是语义化
```根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。```

##### 为什么要语义化
1. 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
2. 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用。
3. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
5. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

##### 怎么进行语义化
1. 尽可能少的使用无语义的标签div和span；
2. 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
不要使用纯样式标签，如：b、font、u等，改用css设置。
3. 需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
4. 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
5. 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；(过时)
6. 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。

##### h5新增语义化标签 
> [http://www.html5jscss.com/html5-semantics-section.html]