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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\src\\forum\\index.js: Unexpected token (45:1)\n\n\u001b[0m \u001b[90m 43 |\u001b[39m   \u001b[33mHeaderSec\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 |\u001b[39m   \u001b[33mEditor\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 |\u001b[39m   \u001b[33mNavigation\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 |\u001b[39m   \u001b[90m//tudor\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:510:17)\n    at Object.raiseWithData (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:503:17)\n    at Object.raise (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:464:17)\n    at Object.unexpected (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:3368:16)\n    at Object.jsxParseIdentifier (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7033:12)\n    at Object.jsxParseNamespacedName (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7043:23)\n    at Object.jsxParseElementName (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7054:21)\n    at Object.jsxParseOpeningElementAt (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7141:22)\n    at Object.jsxParseElementAt (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7174:33)\n    at Object.jsxParseElement (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7248:17)\n    at Object.parseExprAtom (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:7255:19)\n    at Object.parseExprSubscripts (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:11217:23)\n    at Object.parseUpdate (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:11197:21)\n    at Object.parseMaybeUnary (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:11172:23)\n    at Object.parseMaybeUnaryOrPrivate (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10986:59)\n    at Object.parseExprOps (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10993:23)\n    at Object.parseMaybeConditional (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10963:23)\n    at Object.parseMaybeAssign (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10926:21)\n    at Object.parseExpressionBase (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10866:23)\n    at C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10860:39\n    at Object.allowInAnd (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:12720:12)\n    at Object.parseExpression (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:10860:17)\n    at Object.parseStatementContent (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:13064:23)\n    at Object.parseStatement (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:12931:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:13520:25)\n    at Object.parseBlockBody (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:13511:10)\n    at Object.parseBlock (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:13495:10)\n    at Object.parseFunctionBody (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:12372:24)\n    at Object.parseArrowExpression (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:12344:10)\n    at Object.parseParenAndDistinguishExpression (C:\\Users\\bumbu\\OneDrive\\Desktop\\Projects\\e-Moldova\\portlets\\flarum_v1\\packages\\portlet-ui\\js\\node_modules\\@babel\\parser\\lib\\index.js:11921:12)");

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map