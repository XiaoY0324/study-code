##### 技术栈
node + php + yii + koa2 + vue (csr + ssr) + 手写类underscore库 yd.js

##### 日志管理
log4js

##### 启动
启动第一版php代码 
```js
    
    cd ../yd-books-php-version1
    // php yii serve 切记别用php yii serve 启动服务
    启动xampp 8080 server
    
    访问 http://localhost:8080/yd-books-php-version1/web/index.php/index?r=books

    cd ./yd-books-bff-version2
    npm run dev
    http://localhost:8081/books/list
```

##### 图书管理系统
node 做 bff 层

##### 项目结构
gulpfile: 编译node

##### note
> cross-env 跨平台设置环境变量(linux - windows..)