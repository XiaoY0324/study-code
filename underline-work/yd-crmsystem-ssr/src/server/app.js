const Koa = require("koa");
const serve = require("koa-static");
const render = require("koa-swig");
const router = require("koa-simple-router");
const assert = require("assert");
const co = require('co');
const serverEntry = require("../../dist/server-entry").default;
const ReactDomServer = require("react-dom/server");
const LRU = require("lru-cache")
const app = new Koa();
const options = {
    max: 500
    , length: function (n, key) { return n * 2 + key.length }
    , dispose: function (key, n) { n.close() }
    , maxAge: 1000 * 60 * 60
}
    , cache = new LRU(options);
app.use(serve(__dirname + "/assets"));
app.context.render = co.wrap(render({
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
app.use(
    router(_ => {
        _.get("/api", async (ctx, next) => {
            ctx.body = {
                data: 123
            }
        });
        _.get("/:controller?/:action?", async (ctx, next) => {
            console.log("输出路由", ctx.params.controller);
            const _controller = ctx.params.controller || "/";
            const { title } = ssrDictionaries[_controller];
            const result = await ctx.render("index", {
                title
            });
            let appString = "";
            console.log("得到缓存 🌺", cache.get(_controller));
            if (cache.get(_controller)) {
                // 协商一次缓存
                console.log("命中缓存 🌺");
                appString = cache.get(_controller);
            } else {
                appString = ReactDomServer.renderToString(serverEntry(ctx.req.url));
                const _cache = cache.get(_controller);
                if (_cache) {
                    if (assert.equal(cache.get(_controller), appString) == false) {
                        cache.set(_controller, appString)
                    }
                } else {
                    console.log("种缓存 🌺");
                    cache.set(_controller, appString)
                }
            }
            // const stream = ReactDomServer.renderToStream(serverEntry(ctx.req.url));
            ctx.body = result.replace("<app/>", appString);
            //htmlbuffer 
            // htmlbuffer.pipe(...Koa.)
        });
    })
)
app.listen(8081, () => {
    console.log("图书管理平台启动成功📚");
});