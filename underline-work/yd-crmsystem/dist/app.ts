import * as bodyParser from "koa-bodyparser";
import { configure, getLogger } from "log4js";
import "reflect-metadata";
import { InversifyKoaServer } from "inversify-koa-utils";
import errorHandler from "./util/errorHandler";
import { Container, buildProviderModule } from "./ioc/ioc";
import { historyApiFallback } from "koa2-connect-history-api-fallback";
import co from "co";
import * as render from "koa-swig";
import * as serve from "koa-static";
import "./ioc/inversify.config";
import config from "./config";
configure({
  appenders: {
    cheese: { type: "file", filename: `${__dirname}/logs/yd.log` }
  },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = getLogger("cheese");
const container = new Container();
container.load(buildProviderModule());
const server = new InversifyKoaServer(container);
server.setConfig(app => {
  app.context.logger = logger;
  errorHandler.error(app);
  app.use(bodyParser());
  app.context.render = co.wrap(
    render({
      root: config.viewDir,
      autoescape: true,
      // cache: 'memory', // disable, set to false
      // cache: "memory",
      ext: "html",
      // varControls: ["[[", "]]"],
      writeBody: false
    })
  );
  app.use(serve(config.staticDir)); // 静态资源文件
  app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));
});
// .setErrorConfig(app => {
// app.on("error", (err, next) => {
//   console.log("👮‍⚠️  ->系统初始化检查报警");
// });
//  });
const app = server.build();
app.listen(config.port, () => {
  console.log("yd-monitor 一灯数据监控系统🍺");
});
