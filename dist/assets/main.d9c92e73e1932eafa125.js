/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\src\\\\App.tsx.\\n    at makeSourceMapAndFinish (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:52:18)\\n    at successLoader (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:39:5)\\n    at Object.loader (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:5)\");\n\n//# sourceURL=webpack://matrixSSRnew/./src/App.tsx?");

/***/ }),

/***/ "./src/Client.tsx":
/*!************************!*\
  !*** ./src/Client.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.app = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\r\nvar App_1 = __importDefault(__webpack_require__(/*! ./App */ \"./src/App.tsx\"));\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar rootReducer_1 = __webpack_require__(/*! ./redux/rootReducer */ \"./src/redux/rootReducer.tsx\");\r\nvar preloadedState = window.__PRELOADED_STATE__;\r\ndelete window.__PRELOADED_STATE__;\r\nvar store = redux_1.createStore(rootReducer_1.rootReducer, preloadedState, redux_1.compose(window.__REDUX_DEVTOOLS_EXTENSION__ &&\r\n    window.__REDUX_DEVTOOLS_EXTENSION__()));\r\nexports.app = (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n    react_1.default.createElement(App_1.default, null)));\r\nvar entryBlock = document.getElementById(\"root\");\r\nvar renderFunction = entryBlock.hasChildNodes() ? react_dom_1.default.hydrate : react_dom_1.default.render;\r\nrenderFunction(react_1.default.createElement(react_1.default.StrictMode, null, exports.app), entryBlock);\r\n\n\n//# sourceURL=webpack://matrixSSRnew/./src/Client.tsx?");

/***/ }),

/***/ "./src/redux/matrixReducer.tsx":
/*!*************************************!*\
  !*** ./src/redux/matrixReducer.tsx ***!
  \*************************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\src\\\\redux\\\\matrixReducer.tsx.\\n    at makeSourceMapAndFinish (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:52:18)\\n    at successLoader (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:39:5)\\n    at Object.loader (D:\\\\SLAVA\\\\memcrabstag\\\\matrixSSRnew\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:5)\");\n\n//# sourceURL=webpack://matrixSSRnew/./src/redux/matrixReducer.tsx?");

/***/ }),

/***/ "./src/redux/paramsReducer.tsx":
/*!*************************************!*\
  !*** ./src/redux/paramsReducer.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.paramsReducer = void 0;\r\nvar types_1 = __webpack_require__(/*! ./types */ \"./src/redux/types.tsx\");\r\nvar initialState = {\r\n    M1: null,\r\n    N1: null,\r\n    X1: null,\r\n};\r\nvar paramsReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case types_1.ADD_PARAMS:\r\n            return __assign(__assign({}, state), action.payload);\r\n        default: return state;\r\n    }\r\n    return state;\r\n};\r\nexports.paramsReducer = paramsReducer;\r\n\n\n//# sourceURL=webpack://matrixSSRnew/./src/redux/paramsReducer.tsx?");

/***/ }),

/***/ "./src/redux/rootReducer.tsx":
/*!***********************************!*\
  !*** ./src/redux/rootReducer.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar matrixReducer_1 = __webpack_require__(/*! ./matrixReducer */ \"./src/redux/matrixReducer.tsx\");\r\nvar paramsReducer_1 = __webpack_require__(/*! ./paramsReducer */ \"./src/redux/paramsReducer.tsx\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    matrix: matrixReducer_1.matrixReducer,\r\n    params: paramsReducer_1.paramsReducer\r\n});\r\n\n\n//# sourceURL=webpack://matrixSSRnew/./src/redux/rootReducer.tsx?");

/***/ }),

/***/ "./src/redux/types.tsx":
/*!*****************************!*\
  !*** ./src/redux/types.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ADD_MATRIX = exports.ADD_PARAMS = exports.MOUSE_OUT = exports.MOUSE_OVER_SUM = exports.MOUSE_OVER_CEIL = exports.INCREASE_AMOUNT = exports.DELETE_ROW = exports.ADD_ROW = void 0;\r\nexports.ADD_ROW = 'ADD_ROW';\r\nexports.DELETE_ROW = 'DELETE_ROW';\r\nexports.INCREASE_AMOUNT = 'INCREASE_AMOUNT';\r\nexports.MOUSE_OVER_CEIL = 'MOUSE_OVER_CEIL';\r\nexports.MOUSE_OVER_SUM = 'MOUSE_OVER_SUM';\r\nexports.MOUSE_OUT = 'MOUSE_OUT';\r\nexports.ADD_PARAMS = 'ADD_PARAMS';\r\nexports.ADD_MATRIX = 'ADD_MATRIX';\r\n\n\n//# sourceURL=webpack://matrixSSRnew/./src/redux/types.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmatrixSSRnew"] = self["webpackChunkmatrixSSRnew"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/Client.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;