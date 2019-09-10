module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web/index-server-entry.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/web/components/Banner/index.tsx":
/*!*********************************************!*\
  !*** ./src/web/components/Banner/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Banner = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/\"\n  }, \"\\u9996\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/demos\"\n  }, \"\\u6D4B\\u8BD5\\u9875\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\n//# sourceURL=webpack:///./src/web/components/Banner/index.tsx?");

/***/ }),

/***/ "./src/web/components/Home/index.tsx":
/*!*******************************************!*\
  !*** ./src/web/components/Home/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Home = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"components-home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/login\"\n  }, \"\\u767B\\u5F55\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", {\n    \"data-testid\": \"js-h2\"\n  }, \"shun crm\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", {\n    \"data-testid\": \"js-ul\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, \"JavaScript\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, \"CSS\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/web/components/Home/index.tsx?");

/***/ }),

/***/ "./src/web/components/NotFound/index.tsx":
/*!***********************************************!*\
  !*** ./src/web/components/NotFound/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst NotFound = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"components-notfound\"\n  }, \"\\u6211\\u662F404\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/web/components/NotFound/index.tsx?");

/***/ }),

/***/ "./src/web/components/demo/index.tsx":
/*!*******************************************!*\
  !*** ./src/web/components/demo/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// import injectSheet from 'react-jss'\n\n\nconst Demo = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"components-home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"\\u5173\\u4E8E\\u6211\\u4EEC\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/web/components/demo/index.tsx?");

/***/ }),

/***/ "./src/web/index-server-entry.tsx":
/*!****************************************!*\
  !*** ./src/web/index-server-entry.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_app_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/app-server */ \"./src/web/pages/app-server.tsx\");\n/**\n * 服务端没有 dom\n * 不需要 render, 直接 export \n */\n // 也有区别\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_pages_app_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/web/index-server-entry.tsx?");

/***/ }),

/***/ "./src/web/pages/app-server.tsx":
/*!**************************************!*\
  !*** ./src/web/pages/app-server.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_index_server_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/index-server-router */ \"./src/web/routes/index-server-router.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ \"./src/web/components/Banner/index.tsx\");\n/**\n * 服务端用 \n * 服务端没有 BrowserRouter ——> StaticRouter\n * 服务端没有 basename  ——> location\n */\n\n\n\n // 匹配后端的 url 传递静态组件\n\nconst App = url => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: url\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), Object(_routes_index_server_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/web/pages/app-server.tsx?");

/***/ }),

/***/ "./src/web/routes/index-server-router.tsx":
/*!************************************************!*\
  !*** ./src/web/routes/index-server-router.tsx ***!
  \************************************************/
/*! exports provided: routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ \"./src/web/components/Home/index.tsx\");\n/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NotFound */ \"./src/web/components/NotFound/index.tsx\");\n/* harmony import */ var _components_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/demo */ \"./src/web/components/demo/index.tsx\");\n/**\n * ReactDOMServer does not yet support Suspense. \n * 服务端的 routes 不能使用 Suspense, lazy 组件\n */\n\n\n\n\n\nconst routes = [{\n  path: \"/\",\n  exact: true,\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  auth: true\n}, {\n  path: \"/demos\",\n  exact: true,\n  component: _components_demo__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}]; // 对状态属性进行监听\n\nconst Routes = () => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, routes.map((r, index) => {\n  console.log(\"🍊\", index); // const token = localStorage[\"token\"];\n\n  const {\n    path,\n    exact,\n    component\n  } = r;\n  const LazyCom = component;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    key: index,\n    path: path,\n    exact: exact,\n    render: props => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](LazyCom, props)\n  });\n}), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  component: _components_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/web/routes/index-server-router.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });