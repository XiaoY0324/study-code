"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 错误处理
 */
const errorHandle = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        // 如果node挂了 我们要及时查错 但是不能500 防止网站降权
        // logger 收集错误 
        logger.error(error);
        ctx.body = `服务器走神啦~`;
      }
    });
    app.use(async (ctx, next) => {
      await next(); // 先让请求过去 走app.js下面的路由匹配
      // app.js 下面路由匹配不到的时候

      logger.error(`${ctx.status}  ${ctx.message}`);

      if (404 !== ctx.status) {
        return;
      }

      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    });
  }

};
var _default = errorHandle;
exports.default = _default;