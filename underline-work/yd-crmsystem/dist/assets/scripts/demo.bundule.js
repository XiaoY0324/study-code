(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/react-hooks-fetch/src/dev-utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-hooks-fetch/src/dev-utils.js ***!
  \*********************************************************/
/*! exports provided: checkInfiniteLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInfiniteLoop\", function() { return checkInfiniteLoop; });\n/* eslint-disable no-console */\n\nlet lastInput = null;\nconst calls = [];\nconst checkInfiniteLoop = (input) => {\n  const now = Date.now();\n  calls.push(now);\n  if (lastInput === input) {\n    if (calls.length > 1) {\n      if (calls[0] > now - 100) {\n        console.log('Too many invocations in a short period. You probably forgot to memoize opts.');\n      }\n      calls.splice(0);\n    }\n  } else {\n    if (lastInput && calls.length) {\n      calls.splice(0);\n    }\n    lastInput = input;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/react-hooks-fetch/src/dev-utils.js?");

/***/ }),

/***/ "./node_modules/react-hooks-fetch/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-hooks-fetch/src/index.js ***!
  \*****************************************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetch\", function() { return useFetch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dev_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev-utils */ \"./node_modules/react-hooks-fetch/src/dev-utils.js\");\n\n\n\n\nconst createFetchError = (response) => {\n  const err = new Error(`${response.status} ${response.statusText}`);\n  err.name = 'FetchError';\n  return err;\n};\n\nconst initialState = { loading: false, error: null, data: null };\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'init':\n      return initialState;\n    case 'start':\n      if (state.loading) return state; // to bail out, just in case\n      return { ...state, loading: true };\n    case 'data':\n      if (!state.loading) return state; // to bail out, just in case\n      return { ...state, loading: false, data: action.data };\n    case 'error':\n      if (!state.loading) return state; // to bail out, just in case\n      return { ...state, loading: false, error: action.error };\n    default:\n      throw new Error('no such action type');\n  }\n};\n\nconst createPromiseResolver = () => {\n  let resolve;\n  const promise = new Promise((r) => { resolve = r; });\n  return { resolve, promise };\n};\n\nconst defaultOpts = {};\nconst defaultReadBody = body => body.json();\n\nconst useFetch = (input, opts = defaultOpts) => {\n  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState);\n  const promiseResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(createPromiseResolver, [input, opts]);\n  // Using layout effect may not be ideal, but unless we run the effect\n  // synchronously, Suspense fallback isn't rendered in Concurrent Mode.\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useLayoutEffect\"])(() => {\n    if (true) Object(_dev_utils__WEBPACK_IMPORTED_MODULE_1__[\"checkInfiniteLoop\"])(input);\n    let dispatchSafe = action => dispatch(action);\n    const abortController = new AbortController();\n    (async () => {\n      if (!input) return;\n      // start fetching\n      dispatchSafe({ type: 'start' });\n      try {\n        const { readBody = defaultReadBody, ...init } = opts;\n        const response = await fetch(input, {\n          ...init,\n          signal: abortController.signal,\n        });\n        // check response\n        if (response.ok) {\n          const body = await readBody(response);\n          dispatchSafe({ type: 'data', data: body });\n        } else {\n          dispatchSafe({ type: 'error', error: createFetchError(response) });\n        }\n      } catch (e) {\n        dispatchSafe({ type: 'error', error: e });\n      }\n      // finish fetching\n      promiseResolver.resolve();\n    })();\n    const cleanup = () => {\n      dispatchSafe = () => null; // we should not dispatch after unmounted.\n      abortController.abort();\n      dispatch({ type: 'init' });\n    };\n    return cleanup;\n  }, [input, opts, promiseResolver]);\n  if (state.loading) throw promiseResolver.promise;\n  return state;\n};\n\n\n//# sourceURL=webpack:///./node_modules/react-hooks-fetch/src/index.js?");

/***/ }),

/***/ "./src/web/components/Demo/DemoStore.tsx":
/*!***********************************************!*\
  !*** ./src/web/components/Demo/DemoStore.tsx ***!
  \***********************************************/
/*! exports provided: Todos, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todos\", function() { return Todos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Todos {\n  constructor() {\n    this.todos = [{\n      id: 1,\n      text: \"完成React SSR配置\",\n      completed: true\n    }, {\n      id: 2,\n      text: \"完成业务逻辑的基本开发\",\n      completed: false\n    }];\n    this.id = 0;\n\n    this.test = async () => {\n      const data = await fetch(\"/api/test\");\n      const result = await data.json();\n      this.id = result.id;\n    };\n\n    this.toggleTodo = index => {\n      this.todos[index].completed = !this.todos[index].completed;\n    };\n  }\n\n  get remainingTodos() {\n    return this.todos.filter(t => !t.completed).length;\n  }\n\n}\nObject(mobx__WEBPACK_IMPORTED_MODULE_1__[\"decorate\"])(Todos, {\n  todos: mobx__WEBPACK_IMPORTED_MODULE_1__[\"observable\"],\n  id: mobx__WEBPACK_IMPORTED_MODULE_1__[\"observable\"],\n  remainingTodos: mobx__WEBPACK_IMPORTED_MODULE_1__[\"computed\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(new Todos()));\n\n//# sourceURL=webpack:///./src/web/components/Demo/DemoStore.tsx?");

/***/ }),

/***/ "./src/web/components/Demo/Footer.tsx":
/*!********************************************!*\
  !*** ./src/web/components/Demo/Footer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Footer = ({\n  remaining,\n  total\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, remaining, \" / \", total, \" left\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/web/components/Demo/Footer.tsx?");

/***/ }),

/***/ "./src/web/components/Demo/TodoList.tsx":
/*!**********************************************!*\
  !*** ./src/web/components/Demo/TodoList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // tslint:disable-next-line: function-name\n\nfunction TodoList({\n  todos,\n  toggleTodo\n}) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", {\n    style: {\n      listStyle: \"none\"\n    }\n  }, todos && todos.map((t, i) => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    onClick: () => toggleTodo(i),\n    style: {\n      margin: 10,\n      opacity: t.completed ? 0.5 : 1,\n      cursor: \"pointer\",\n      textDecoration: t.completed ? \"line-through\" : \"none\"\n    },\n    key: t.id\n  }, t.text)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\n//# sourceURL=webpack:///./src/web/components/Demo/TodoList.tsx?");

/***/ }),

/***/ "./src/web/components/Demo/demo.css":
/*!******************************************!*\
  !*** ./src/web/components/Demo/demo.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/components/Demo/demo.css?");

/***/ }),

/***/ "./src/web/components/Demo/index.tsx":
/*!*******************************************!*\
  !*** ./src/web/components/Demo/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.css */ \"./src/web/components/Demo/demo.css\");\n/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_demo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/dist/index.module.js\");\n/* harmony import */ var _DemoStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DemoStore */ \"./src/web/components/Demo/DemoStore.tsx\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoList */ \"./src/web/components/Demo/TodoList.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ \"./src/web/components/Demo/Footer.tsx\");\n/* harmony import */ var react_hooks_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hooks-fetch */ \"./node_modules/react-hooks-fetch/src/index.js\");\n\n\nconst {\n  useContext,\n  Suspense\n} = react__WEBPACK_IMPORTED_MODULE_1__;\n\n\n\n\n\n\nconst DisplayRemoteData = () => {\n  const {\n    error,\n    data\n  } = Object(react_hooks_fetch__WEBPACK_IMPORTED_MODULE_6__[\"useFetch\"])(\"http://...\");\n  if (error) return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, \"Error:\", error.message);\n  if (!data) return null; // this is important\n\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, \"RemoteData:\", data);\n};\n\nconst Demo = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(routerProps => {\n  console.log(\"传参\", routerProps.match.params.id);\n  const store = useContext(_DemoStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Suspense, {\n    fallback: react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, \"Loading...\")\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](DisplayRemoteData, null)), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_TodoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    todos: store.todos,\n    toggleTodo: store.toggleTodo\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    remaining: store.remainingTodos,\n    total: store.todos.length\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h3\", null, store.id), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"input\", {\n    type: \"button\",\n    value: \"\\u6D4B\\u8BD5\\u5F02\\u6B65\\u8BF7\\u6C42\",\n    onClick: () => store.test()\n  }));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/web/components/Demo/index.tsx?");

/***/ })

}]);