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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] /Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/jsx/app.jsx: Unknown option: foreign.Children. Check out http://babeljs.io/docs/usage/options/ for more info\n    at Logger.error (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/logger.js:41:11)\n    at OptionManager.mergeOptions (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:235:20)\n    at /Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:289:14\n    at /Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:342:20\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:305:20)\n    at OptionManager.mergePresets (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:288:10)\n    at OptionManager.mergeOptions (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:14)\n    at OptionManager.init (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/options/option-manager.js:383:12)\n    at File.initOptions (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/index.js:223:65)\n    at new File (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/file/index.js:140:24)\n    at Pipeline.transform (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-loader/lib/index.js:46:20)\n    at Object.module.exports (/Users/joshwoods/Documents/coding/React_Ishington/email_webPack_cloned/email-webpack/node_modules/babel-loader/lib/index.js:163:20)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map