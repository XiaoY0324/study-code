/**
 * 模拟 webpack
 * 以后忘记正则吧 复杂的地方走 AST
 */

const parser = require('babylon'); // 解析 js -> AST
const traverse = require('@babel/traverse').default; // 递归 抽象语法树的方法
const MagicString = require('magic-string'); // 快速处理字符串 一般用于源码的部分修复
const entryPoint = "./src/index.js";
const fs = require("fs");
const { join } = require('path');
const ejs = require('ejs');

// 全局的依赖 都放到这里
let dependencies = [];

function parse(filename) {
  let garphArray = []; // 维护依赖列表
  const content = fs.readFileSync(filename, 'utf-8');
  const code = new MagicString(content); 
  const ast = parser.parse(content, { // 指定按模块语法去生成语法树
    sourceType: 'module' // 可选为 script | module
  });

  traverse(ast, { // 遍历 AST 语法树
    ExportDeclaration({ node }) { // 遍历 ExportDeclaration(下一个节点) 节点(词法分析树的节点)
      console.log('下一个节点', node);
      const { start, end, declaration } = node;
      
      /**
       * start 起始位置
       * end   结束位置
       * declaration 定义的模块名 
       */
      code.overwrite(
        start,
        end,
        `__webpack.exports__['default'] = ${ declaration.name }`  // export default sync => __webpack.exports__['default'] = sysnc
      )
    },
    ImportDeclaration({node}){ // 遍历 ImportDeclaration(入口) 节点
      // console.log(node, '🚀');
      /**
       * start 起始位置
       * end   结束位置
       * specifiers 文件的名字
       * source     文件路径 
       */
      const { start, end, specifiers, source } = node;
      const newFile = `./src/${join(source.value)}.js`; // 模块的路径

      code.overwrite(
        start,
        end,
        `var ${ specifiers[0].local.name } = __webpack_require__(${ newFile })` // 把模块别名的名称(比如 sync) 换成 __webpack_require__("./src/sync.js")
      )
      // 这一步完成的操作是
      // import sync from './sync';   -> var sync = __webpack_require__('./src/sync.js');

      garphArray.push(newFile);
    }
  });

  const _code = code.toString();
  // console.log('_code = ', _code);

  dependencies.push({
    filename,
    _code
  });
  // console.log(ast);
  
  return garphArray; // 返回人入口文件依赖的数组 ['./src/8.js', './src/9.js'] 这种
}

// 把当前依赖的模块送进去 目的是一层层维护依赖关系列表
const garphArray = parse(entryPoint); 

for (let item of garphArray) {
  parse(item);
}

console.dir(dependencies);

const template = ` (function(modules) { // webpackBootstrap
   	// The module cache
   	var installedModules = {};
  
   	// The require function
   	function __webpack_require__(moduleId) {
  
   		// Check if module is in cache
   		if(installedModules[moduleId]) {
   			return installedModules[moduleId].exports;
   		}
   		// Create a new module (and put it into the cache)
   		var module = installedModules[moduleId] = {
   			i: moduleId,
   			l: false,
   			exports: {}
   		};
  
   		// Execute the module function
   		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  
   		// Flag the module as loaded
   		module.l = true;
  
   		// Return the exports of the module
   		return module.exports;
   	}
  
  
   	// expose the modules object (__webpack_modules__)
   	__webpack_require__.m = modules;
  
   	// expose the module cache
   	__webpack_require__.c = installedModules;
  
   	// define getter function for harmony exports
   	__webpack_require__.d = function(exports, name, getter) {
   		if(!__webpack_require__.o(exports, name)) {
   			Object.defineProperty(exports, name, { enumerable: true, get: getter });
   		}
   	};
  
   	// define __esModule on exports
   	__webpack_require__.r = function(exports) {
   		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
   			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
   		}
   		Object.defineProperty(exports, '__esModule', { value: true });
   	};
  
   	// create a fake namespace object
   	// mode & 1: value is a module id, require it
   	// mode & 2: merge all properties of value into the ns
   	// mode & 4: return value when already ns object
   	// mode & 8|1: behave like require
   	__webpack_require__.t = function(value, mode) {
   		if(mode & 1) value = __webpack_require__(value);
   		if(mode & 8) return value;
   		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
   		var ns = Object.create(null);
   		__webpack_require__.r(ns);
   		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
   		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
   		return ns;
   	};
  
   	// getDefaultExport function for compatibility with non-harmony modules
   	__webpack_require__.n = function(module) {
   		var getter = module && module.__esModule ?
   			function getDefault() { return module['default']; } :
   			function getModuleExports() { return module; };
   		__webpack_require__.d(getter, 'a', getter);
   		return getter;
   	};
  
   	// Object.prototype.hasOwnProperty.call
   	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  
   	// __webpack_public_path__
   	__webpack_require__.p = "";
  
  
   	// Load entry module and return exports
   	return __webpack_require__(__webpack_require__.s = "${ entryPoint }");
   })({
  <% for (var i=0; i<dependencies.length; i++) { %>
    "<%- dependencies[i]["filename"]%>": (function(module, __webpack_exports__, __webpack_require__) {
      <%- dependencies[i]["_code"]%>;
    })
  <%}%>
});
`

let result = ejs.render(template, {
  dependencies 
});

// console.log(result);
console.dir(dependencies);

fs.writeFileSync('./dist/main.js', result);
