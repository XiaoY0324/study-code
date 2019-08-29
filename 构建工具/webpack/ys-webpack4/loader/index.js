"use strict";
/**
 * 实现一个loader
 */
const loaderUtils = require("loader-utils");
const acorn = require('acorn'); // 解析 js -> AST
const walk = require('acorn-walk'); // 递归 抽象语法树的方法
const MagicString = require('magic-string'); // 快速处理字符串 一般用于源码的部分修复

module.exports = function (content) {
    // merge params and default config
    const options = loaderUtils.getOptions(this);
    console.log("前置钩子", this.data.value);
    console.log('🌶配置文件', options);

    const ast = acorn.parse(content);
    const code = new MagicString(content);

    console.log(ast);
    walk.simple(ast, {
      VariableDeclaration(node) {
        console.log(node, '🚀');
        const { start } = node;

        code.overwrite = (start, start + 5, 'var')
      }
    });

    return code.toString;
};

// pitch 挂在前置的钩子函数
module.exports.pitch = function(r, prerequest, data) {
  data.value = "通过钩子挂载的钩子";
}