<!-- 第一版 -->
### 基于yii2的 图书管理系统

### 启动server

> php yii serve

### 访问

> http://localhost:8080/index.php?r=books/index

<!-- 第二版 -->
##### 技术栈
node + php + yii + koa2 + vue (csr + ssr)

##### 图书管理系统
node 做 bff 层

##### 项目结构
> bin: 启动脚本
> components: 组件
> config: 项目配置
> controller 管理路由
> models
> tests: 单元测试
> views: swig模板
> 项目启动文件 app.js

##### note
> cross-env 跨平台设置环境变量(linux - windows..)