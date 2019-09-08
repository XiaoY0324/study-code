import * as bodyParser from 'koa-bodyparser'; // koa bodyparser
import { configure, getLogger } from 'log4js'; 
import 'reflect-metadata'; // 引入元编程
import { InversifyKoaServer } from 'inversify-koa-utils'; // koa2 依赖注入 (InversifyKoaServer 为一个服务, 用来装载容器)
import errorHandler from './util/errorHandler'; // 错误处理中间件
import { Container, buildProviderModule } from './ioc/ioc';
import { historyApiFallback } from 'koa2-connect-history-api-fallback'; // 处理router使用history模式返回index.html，让koa2支持SPA应用程序。 
import co from 'co'; 
import * as render from 'koa-swig';
import * as serve from 'koa-static';
import './ioc/inversify.config';
import config from './config';

configure({
  appenders: {
    cheese: { type: "file", filename: `${__dirname}/logs/yd.log` }
  },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = getLogger("cheese");
const container = new Container(); // 创建容器
container.load(buildProviderModule()); // 
const server = new InversifyKoaServer(container);