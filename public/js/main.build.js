/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/virgin/virgin.js":
/*!*************************************!*\
  !*** ./components/virgin/virgin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_js_basic_cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/js/basic-cursor */ \"./public/js/basic-cursor.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Virgin = /*#__PURE__*/function (_BasicCursor) {\n  _inherits(Virgin, _BasicCursor);\n\n  var _super = _createSuper(Virgin);\n\n  function Virgin() {\n    var _this;\n\n    _classCallCheck(this, Virgin);\n\n    _this = _super.call(this, 'virgin');\n\n    _defineProperty(_assertThisInitialized(_this), \"run\", function () {\n      _this.addEventListener();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"addEventListener\", function () {\n      window.addEventListener('pointermove', function (event) {\n        _this.updateCursorPosition(event);\n\n        _this.moveCursor();\n      });\n      window.addEventListener('mousedown', function () {\n        return _this.cursorStyleBig();\n      });\n      window.addEventListener('mouseup', function () {\n        return _this.cursorStyleDefault();\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"updateCursorPosition\", function (event) {\n      _this.cursor.position.x = event.clientX;\n      _this.cursor.position.y = event.clientY;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"moveCursor\", function () {\n      _this.updateCursorStyle();\n\n      _this.cursor.element.style.top = \"\".concat(_this.cursor.position.y, \"px\");\n      _this.cursor.element.style.left = \"\".concat(_this.cursor.position.x, \"px\");\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"updateCursorStyle\", function () {\n      if (_this.cursor.position.x < 8 || _this.cursor.position.y < 8 || _this.cursor.position.x > document.body.scrollWidth - 8 || _this.cursor.position.y > document.body.scrollHeight - 8) {\n        _this.hideCursor();\n      } else {\n        _this.cursorStyleDefault();\n      }\n\n      ;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"cursorStyleBig\", function () {\n      _this.cursor.element.style.transform = 'scale(2) translate(-50%, -50%)';\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"cursorStyleDefault\", function () {\n      _this.cursor.element.style.transform = 'scale(1) translate(-50%, -50%)';\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"hideCursor\", function () {\n      _this.cursor.element.style.transform = 'scale(0.1) translate(-50%, -50%)';\n    });\n\n    _this.cursor = {\n      element: document.querySelector('.virgin__cursor'),\n      position: {\n        x: null,\n        y: null\n      }\n    };\n    return _this;\n  }\n\n  return _createClass(Virgin);\n}(_public_js_basic_cursor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Virgin);\n\n//# sourceURL=webpack://fractal/./components/virgin/virgin.js?");

/***/ }),

/***/ "./public/js/basic-cursor.js":
/*!***********************************!*\
  !*** ./public/js/basic-cursor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar BasicCursor = /*#__PURE__*/_createClass(function BasicCursor(name) {\n  var _this = this;\n\n  _classCallCheck(this, BasicCursor);\n\n  _defineProperty(this, \"init\", function () {\n    if (document.querySelector(\".js-\".concat(_this.name))) {\n      _this.print();\n\n      _this.show();\n\n      _this.run();\n    }\n\n    ;\n  });\n\n  _defineProperty(this, \"print\", function () {\n    console.log(\"Initialize:\");\n    console.log(\"%c \".concat(_this.name), 'font-weight: bold; font-size: 50px;color: #eab5de;');\n  });\n\n  _defineProperty(this, \"replaceCursors\", function () {\n    _this.cursor.element.style.display = 'block';\n    document.body.style.cursor = 'none';\n    window.removeEventListener('mousemove', _this.replaceCursors);\n  });\n\n  _defineProperty(this, \"show\", function () {\n    window.addEventListener('mousemove', _this.replaceCursors);\n  });\n\n  this.name = name;\n  this.cursor = {\n    element: document.querySelector('.cursor')\n  };\n});\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicCursor);\n\n//# sourceURL=webpack://fractal/./public/js/basic-cursor.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_virgin_virgin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/virgin/virgin */ \"./components/virgin/virgin.js\");\n\nvar virgin = new _components_virgin_virgin__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvirgin.init();\n\n//# sourceURL=webpack://fractal/./public/js/main.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.js");
/******/ 	
/******/ })()
;