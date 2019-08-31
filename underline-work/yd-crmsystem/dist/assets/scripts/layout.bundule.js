(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout"],{

/***/ "./src/web/components/Banner/banner.css":
/*!**********************************************!*\
  !*** ./src/web/components/Banner/banner.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/components/Banner/banner.css?");

/***/ }),

/***/ "./src/web/components/Banner/index.tsx":
/*!*********************************************!*\
  !*** ./src/web/components/Banner/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _banner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.css */ \"./src/web/components/Banner/banner.css\");\n/* harmony import */ var _banner_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/dist/index.module.js\");\n\nconst {\n  useContext\n} = react__WEBPACK_IMPORTED_MODULE_0__;\n\n\n\nconst Banner = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[\"observer\"])(props => {\n  console.log(\"🌶Banner渲染\", props); // console.log(\"硬获取\", location.pathname);\n  // if (location.pathname === \"/login\") {\n  //   console.log(\"命中\");\n  //   return null;\n  // }\n  // const ydstore = useContext(YdStore);\n  // if (ydstore.needHidden) {\n  //   return null;\n  // }\n  // const show = !ydstore.needHidden ? \"show\" : \"\";\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"components-banner\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n    type: \"text\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/index/index\"\n  }, \"\\u9996\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/login\"\n  }, \"\\u767B\\u5F55\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/demos/123\"\n  }, \"demo\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/index/about\"\n  }, \"\\u5173\\u4E8E\\u6211\\u4EEC\"))));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\n//# sourceURL=webpack:///./src/web/components/Banner/index.tsx?");

/***/ }),

/***/ "./src/web/pages/Layout.tsx":
/*!**********************************!*\
  !*** ./src/web/pages/Layout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Banner */ \"./src/web/components/Banner/index.tsx\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./src/web/routes/index.tsx\");\n/* harmony import */ var _models_YdStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/YdStore */ \"./src/web/models/YdStore.tsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/dist/index.module.js\");\n\n\n\n\n\nconst {\n  memo\n} = react__WEBPACK_IMPORTED_MODULE_0__;\nconst {\n  useContext\n} = react__WEBPACK_IMPORTED_MODULE_0__;\nconst Layout = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__[\"observer\"])(() => {\n  console.log(\"🍉LAYOUT组件渲染\");\n  const ydstore = useContext(_models_YdStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  const token = ydstore.token; // const BannerMemo = React.useCallback(() => <Banner />, []);\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), Object(_routes__WEBPACK_IMPORTED_MODULE_2__[\"IndexRutes\"])(token));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/web/pages/Layout.tsx?");

/***/ })

}]);