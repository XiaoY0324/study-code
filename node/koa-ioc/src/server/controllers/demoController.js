import { route, GET } from 'awilix-koa'; 

/**
 * 路由具体实现
 */
@route('/home')
class DemoController {
    constructor({ demoService }) {
        this.demoService = demoService;
    }

    @route('/app')
    @GET()
    async actionHome(ctx, next) {
        let data = await this.demoService.getData();
        console.log(data);
        ctx.body = data.msg;
    }
}

export default DemoController;