# node version
v10

# descripe
shun-crm 的 react 16同构 版

# install
yarn

# npm task
```js
  server 服务端打包
  client 客户端打包
  执行之后 把 dist 目录的 app.js demo.js 丢进 server/assets/, 把 index.html 丢进 server/views/, nodemon src/server/app.js 启动服务
  mv dist/app.js src/server/assets 
  mv dist/demo.js src/server/assets 
  mv dist/index.html src/server/views
nodemon src/server/app.js
```
