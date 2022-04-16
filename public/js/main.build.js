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

/***/ "./components/basic-cursor/basic-cursor.ts":
/*!*************************************************!*\
  !*** ./components/basic-cursor/basic-cursor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar BasicCursor = (function () {\n    function BasicCursor(name, cursor) {\n        var _this = this;\n        this.name = name;\n        this.cursor = cursor;\n        this.init = function () {\n            if (document.querySelector(\".js-\".concat(_this.name))) {\n                _this.print();\n                _this.show();\n                _this.run();\n            }\n            ;\n        };\n        this.print = function () {\n            console.log(\"Initialize:\");\n            console.log(\"%c \".concat(_this.name), 'font-weight: bold; font-size: 50px;color: #eab5de;');\n        };\n        this.replaceCursors = function () {\n            _this.cursor.element.style.display = 'block';\n            document.body.style.cursor = 'none';\n            window.removeEventListener('mousemove', _this.replaceCursors);\n        };\n        this.show = function () {\n            window.addEventListener('mousemove', _this.replaceCursors);\n        };\n        this.run = function () { };\n        this.name = name;\n        this.cursor = {\n            element: document.querySelector('.cursor')\n        };\n    }\n    ;\n    return BasicCursor;\n}());\n;\nexports[\"default\"] = BasicCursor;\n\n\n//# sourceURL=webpack://fractal/./components/basic-cursor/basic-cursor.ts?");

/***/ }),

/***/ "./components/virgin/virgin.ts":
/*!*************************************!*\
  !*** ./components/virgin/virgin.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar basic_cursor_1 = __webpack_require__(/*! ../basic-cursor/basic-cursor */ \"./components/basic-cursor/basic-cursor.ts\");\nvar Virgin = (function (_super) {\n    __extends(Virgin, _super);\n    function Virgin(cursor) {\n        var _this = _super.call(this, 'virgin') || this;\n        _this.cursor = cursor;\n        _this.run = function () {\n            _this.addEventListener();\n        };\n        _this.addEventListener = function () {\n            window.addEventListener('pointermove', function (event) {\n                _this.updateCursorPosition(event);\n                _this.moveCursor();\n            });\n            window.addEventListener('mousedown', function () { return _this.cursorStyleBig(); });\n            window.addEventListener('mouseup', function () { return _this.cursorStyleDefault(); });\n        };\n        _this.updateCursorPosition = function (event) {\n            _this.cursor.position.x = event.clientX;\n            _this.cursor.position.y = event.clientY;\n        };\n        _this.moveCursor = function () {\n            _this.updateCursorStyle();\n            _this.cursor.element.style.top = \"\".concat(_this.cursor.position.y, \"px\");\n            _this.cursor.element.style.left = \"\".concat(_this.cursor.position.x, \"px\");\n        };\n        _this.updateCursorStyle = function () {\n            if (_this.cursor.position.x < 8 || _this.cursor.position.y < 8 || _this.cursor.position.x > (document.body.scrollWidth) - 8 || _this.cursor.position.y > (document.body.scrollHeight) - 8) {\n                _this.hideCursor();\n            }\n            else {\n                _this.cursorStyleDefault();\n            }\n            ;\n        };\n        _this.cursorStyleBig = function () {\n            _this.cursor.element.style.transform = 'scale(2) translate(-50%, -50%)';\n        };\n        _this.cursorStyleDefault = function () {\n            _this.cursor.element.style.transform = 'scale(1) translate(-50%, -50%)';\n        };\n        _this.hideCursor = function () {\n            _this.cursor.element.style.transform = 'scale(0.1) translate(-50%, -50%)';\n        };\n        _this.cursor = {\n            element: document.querySelector('.virgin__cursor'),\n            position: {\n                x: null,\n                y: null\n            }\n        };\n        return _this;\n    }\n    ;\n    return Virgin;\n}(basic_cursor_1[\"default\"]));\n;\nexports[\"default\"] = Virgin;\n\n\n//# sourceURL=webpack://fractal/./components/virgin/virgin.ts?");

/***/ }),

/***/ "./public/js/main.ts":
/*!***************************!*\
  !*** ./public/js/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar virgin_1 = __webpack_require__(/*! ../../components/virgin/virgin */ \"./components/virgin/virgin.ts\");\nvar virgin = new virgin_1[\"default\"]();\nvirgin.init();\n\n\n//# sourceURL=webpack://fractal/./public/js/main.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.ts");
/******/ 	
/******/ })()
;