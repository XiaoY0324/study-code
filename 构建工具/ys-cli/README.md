### node -v
v8.9

```js
手写我们的cli

yarn init -y
创建 /bin/ys 文件 内容为console.log('hello ys-cli');
node bin/ys -> 输出结果
npm link
执行 ys
/Users/ys/.nvm/versions/node/v8.9.1/bin/ys: line 1: syntax error near unexpected token `'手写cli''
/Users/ys/.nvm/versions/node/v8.9.1/bin/ys: line 1: `console.log('手写cli')'

报错了 why.. 这个包没有文件后缀名所以报错哈，你需要告诉 Linux 它是由node来启动的。

where node
cli 文件顶部增加 #!/usr/bin/env node
    wtf? 我node路径不是在/Users/ys/.nvm/versions/node/v8.9.1/bin/node 
    里么，其实我们/usr/bin/env 为当前环境的环境变量 加上个node，它能帮你去找
    node的路径。当然直接写/Users/ys/.nvm/versions/node/v8.9.1/bin/node 
    也是可以找到的，但是会有兼容性问题，挪到别的linux系统可能跑不动。
执行 ys 正确输出..
```

### 发布 我们的cli
> 1. npm login
> 2. npm publish 

### 使用
ys --help 查看可用命令
ys init 输入文件夹名称 新建文件夹
ys json2ts json格式转ts
ys -v 查看版本
...