"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awilixKoa = require("awilix-koa");

var _dec, _dec2, _dec3, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/**
 * 路由具体实现
 */
let DemoController = (_dec = (0, _awilixKoa.route)('/home'), _dec2 = (0, _awilixKoa.route)('/app'), _dec3 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class DemoController {
  constructor({
    demoService
  }) {
    this.demoService = demoService;
  }

  async actionHome(ctx, next) {
    let data = await this.demoService.getData();
    console.log(data);
    ctx.body = data.msg;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "actionHome", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "actionHome"), _class2.prototype)), _class2)) || _class);
var _default = DemoController;
exports.default = _default;