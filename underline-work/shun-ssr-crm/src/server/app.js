const Koa = require("koa");
const serve = require("koa-static");
const render = require("koa-swig");
const router = require("koa-simple-router");
const assert = require("assert"); 
const co = require('co');
const serverEntry = require('../../dist/server-entry').default; // 入口 能这么引的原因是webpack 配置了 output.libraryTarget = commonjs2
const ReactDomServer = require("react-dom/server"); // 能够使将组建渲染为静态标记，通常使用与Node服务端做服务端渲染上
const LRU = require("lru-cache"); // 缓存管理(缓存到内存中, 原则上node重启容易丢不安全外, 比redis 要快很多) 
const app = new Koa();

// lru-cache 缓存管理的配置 
const options = {
  max: 500,
  length: function (n, key) { return n * 2 + key.length },
  dispose: function (key, n) { n.close() }, 
  maxAge: 1000 * 60 * 60
}
const cache = new LRU(options);

app.use(serve(__dirname + "/assets"));
app.context.render = co.wrap(render({ // swig 配置
  root: __dirname + "/views",
  autoescape: true,
  cache: false,
  ext: 'html',
  writeBody: false
}));

const ssrDictionaries = {
  "/": {
      title: "🏃项目首页"
  },
  "demos": {
      title: "🤮 测试页面"
  }
}

// 真路由
app.use(
  router(_ => {
    _.get("/api", async (ctx, next) => { // 数据的接口需要写在最前面 不然页面路由匹配到之后不会往后匹配了
        ctx.body = {
            data: 123
        }
    });

    _.get('/:controller?/:action?', async (ctx, next) => {
      console.log("输出路由", ctx.params.controller);
      const _controller = ctx.params.controller || "/";
      const { title } = ssrDictionaries[_controller];

      // ReactDomServer.renderToString 用于将 React 元素渲染到初始 HTML 中
      // 如果在已经有服务器渲染标记的节点上使用 ReactDOM.hydrate(), React 将保留它，并且只附加时间处理程序，使得第一次加载速度大大提升
      const result = await ctx.render('index', { // 拿到打包后的入口页面 具体渲染哪个组件 webpack 配合 router 去找
        title
      }); 

      let appString = "";
      console.log("得到缓存 🌺", cache.get(_controller));
      if (cache.get(_controller)) { 
          // 协商依次缓存
          console.log("命中缓存 🌺");
          appString = cache.get(_controller);
      } else {
          appString = ReactDomServer.renderToString(serverEntry(ctx.req.url)); // 此处也可以使用 stream 结合 buff 实现更优性能
          const _cache = cache.get(_controller);
          if (_cache) { // 为了兼容断言 undefined 的报错.. 哈哈
              const oldString = cache.get(_controller);

              if (assert.equal(oldString, appString) == false) {
                  cache.set(_controller, appString)
              }
          } else {
              console.log("种缓存 🌺");
              cache.set(_controller, appString)
          }
      }

      ctx.body = result.replace('<app/>', appString); // 把入口页的占位组件 <app/> 替换成对应 node 路由的组件
    });
  })
);

app.listen(8081, () => {
  console.log("shun-crm is running on server localhost:8081");
});