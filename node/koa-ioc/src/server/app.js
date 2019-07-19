import  Koa from 'koa';
import { join } from 'path';
import { configure, getLogger } from 'log4js';
import errorHandle from './middlewares/errorHandle.js';
import { createContainer, Lifetime } from 'awilix';  // 用到里面的容器(createContainer)、 生命周期(Lifetime)
import { loadControllers, scopePerRequest } from 'awilix-koa'; // 用到里面的 loadControllers， scopePerReques

const app = new Koa();

configure({
  appenders: { cheese: { type: 'file', filename: join(__dirname, '..' , '/logs/err.log') } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const container = createContainer();  // 创建容器
container.loadModules([__dirname + '/services/*.js'], { // 把 Service 融入到容器里, 以便依赖哪个取哪个
  formatName: 'camelCase', // 驼峰
  resolverOptions: {
    lifetime: Lifetime.SCOPED // 每次执行完销毁
  }
});

const logger = getLogger('cheese');
// 错误处理 要在所有路由之前
errorHandle.error(app, logger);

// 终极注入
app.use(scopePerRequest(container)); // 把容器中的东西作为中间件去应用
app.use(loadControllers(__dirname + '/controllers/*.js')); // 加载所有的controller 作为中间件应用 

app.listen('3000', () => {
    console.log('The server is run, localhost: 3000');
});