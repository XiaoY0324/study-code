### node -v
> 10.0

### jest(react-scripts里面封装了jest相关的包) 做react单测 不需要依赖karma
> 1. yarn init
> 2. yarn add react react-dom react-scripts react-testing-library --save
> 3. 配置"unit": "react-scripts test --env=jsdom"
> 4. npm run unit 走你

```js
    jest也可以做单测，e2e， 对react支持更好。
    后面会把它react-scripts拆开 手动用jest实现
```