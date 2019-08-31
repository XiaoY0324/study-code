(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/web/components/Login/index.tsx":
/*!********************************************!*\
  !*** ./src/web/components/Login/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.css */ \"./src/web/components/Login/login.css\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_YdStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/YdStore */ \"./src/web/models/YdStore.tsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/dist/index.module.js\");\n\n\nconst {\n  useContext\n} = react__WEBPACK_IMPORTED_MODULE_1__; // import { DatePicker } from \"antd\";\n\n\n\n\nconst Login = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__[\"observer\"])(routerProps => {\n  const {\n    location,\n    history\n  } = routerProps;\n  const ydstore = useContext(_models_YdStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  ydstore.needHidden = true;\n  const RedirectUrl = location.state ? location.state.from.pathname : \"/index/index\"; // 登陆成功之后的跳转\n\n  const loginIn = () => {\n    ydstore.token = localStorage[\"token\"] = Math.random().toString();\n    history.push(RedirectUrl);\n    ydstore.needHidden = false;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"components-login\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, ydstore.token), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/\"\n  }, \"\\u9996\\u9875xxx\")), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"input\", {\n    type: \"button\",\n    value: \"\\u767B\\u5F55\\u7CFB\\u7EDF\\u9996\\u9875\",\n    onClick: loginIn\n  })));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/web/components/Login/index.tsx?");

/***/ }),

/***/ "./src/web/components/Login/login.css":
/*!********************************************!*\
  !*** ./src/web/components/Login/login.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/components/Login/login.css?");

/***/ })

}]);