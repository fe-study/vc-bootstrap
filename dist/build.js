(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponentsName"] = factory();
	else
		root["VueComponentsName"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.vcTable = exports.vcAutocomplete = exports.vcEasyclearinput = exports.vcModal = exports.vcTabs = exports.vcPagination = exports.vcHello = undefined;
	
	var _helloworld = __webpack_require__(2);
	
	var _helloworld2 = _interopRequireDefault(_helloworld);
	
	var _vcPagination = __webpack_require__(5);
	
	var _vcPagination2 = _interopRequireDefault(_vcPagination);
	
	var _vcTable = __webpack_require__(6);
	
	var _vcTable2 = _interopRequireDefault(_vcTable);
	
	var _vcTabs = __webpack_require__(7);
	
	var _vcTabs2 = _interopRequireDefault(_vcTabs);
	
	var _vcModal = __webpack_require__(8);
	
	var _vcModal2 = _interopRequireDefault(_vcModal);
	
	var _vcEasyclearinput = __webpack_require__(9);
	
	var _vcEasyclearinput2 = _interopRequireDefault(_vcEasyclearinput);
	
	var _vcAutocomplete = __webpack_require__(10);
	
	var _vcAutocomplete2 = _interopRequireDefault(_vcAutocomplete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.vcHello = _helloworld2.default;
	exports.vcPagination = _vcPagination2.default;
	exports.vcTabs = _vcTabs2.default;
	exports.vcModal = _vcModal2.default;
	exports.vcEasyclearinput = _vcEasyclearinput2.default;
	exports.vcAutocomplete = _vcAutocomplete2.default;
	exports.vcTable = _vcTable2.default;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(4)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./helloworld.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./helloworld.vue","-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./helloworld.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./helloworld.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./helloworld.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="hello">
	// 		<h2>{{hello}}</h2>
	// 	</div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				hello: 'helloworld'
			};
		}
	};
	// </script>

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"hello\">\n\t\t<h2>{{hello}}</h2>\n\t</div>";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 8);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */,
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(3)
	module.exports = __webpack_require__(7)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(6)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Pagination.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Pagination.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Pagination.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Pagination.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Pagination.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-023c7cc3&file=Pagination.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-023c7cc3&file=Pagination.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.i, ".vc-pagination-component.center {\n  text-align: center;\n}\n.vc-pagination-component.left {\n  text-align: left;\n}\n.vc-pagination-component.right {\n  text-align: right;\n}\n.vc-pagination-component .pagination {\n  vertical-align: middle;\n}\n.vc-pagination-component .pagination > li > a,\n.vc-pagination-component .pagination > li > span {\n  padding: 0;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  min-width: 35px;\n  text-align: center;\n}\n.vc-pagination-component .pagination .first-page a,\n.vc-pagination-component .pagination .last-page a {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.vc-pagination-component .form-inline {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vc-pagination-component .form-inline .form-control {\n  width: 44px;\n}\n.vc-pagination-component .err-pageto {\n  border: 1px solid #F97D7D;\n}\n.vc-pagination-component .dropdown-menu {\n  width: 100%;\n  min-width: 100%;\n  text-align: center;\n}\n.vc-pagination-component .dropdown-menu a {\n  padding: 3px;\n}\n.vc-pagination-component .v-page-dropdown-transition {\n  display: inline-block;\n}\n.vc-pagination-component .v-page-dropdown-enter {\n  -webkit-animation: fadeinT .3s;\n          animation: fadeinT .3s;\n}\n.vc-pagination-component .v-page-dropdown-leave {\n  -webkit-animation: fadeoutT .3s;\n          animation: fadeoutT .3s;\n}\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/* 淡出-向上 */\n@-webkit-keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n}\n@keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
	module.exports = "<div class=\"vc-pagination-component\" :class=\"align\">\n        <ul class=\"pagination\">\n            <li v-if=\"!noPrevious\">\n                <a style=\"cursor:pointer;\" @click=\"selectPage(current - 1)\" aria-label=\"previous\">\n                    <span aria-hidden=\"true\">{{ prevText }}</span>\n                </a>\n            </li>\n            <li v-if=\"showFirstPage\" class=\"first-page\">\n                <a style=\"cursor:pointer;\" @click=\"selectPage(1)\" aria-label=\"first-page\">\n                    <span aria-hidden=\"true\">{{ firstPageText }}</span>\n                </a>\n            </li>\n            <li v-for=\"page in pages\" :class=\"{ 'active': page.number == current, 'disabled': page.disabled }\">\n                <a style=\"cursor:pointer;\" @click=\"selectPage(page.number)\" v-text=\"page.text\"></a>\n            </li>\n            <li v-if=\"showLastPage\" class=\"last-page\">\n                <a style=\"cursor:pointer;\" @click=\"selectPage(totalPages)\" aria-label=\"last-page\">\n                    <span aria-hidden=\"true\">{{ lastPageText }}</span>\n                </a>\n            </li>\n            <li v-if=\"!noNext\">\n                <a style=\"cursor:pointer;\" @click=\"selectPage(current + 1)\" aria-label=\"next\">\n                    <span aria-hidden=\"true\">{{ nextText }}</span>\n                </a>\n            </li>\n        </ul>\n        <form class=\"form-inline\" v-if=\"jumpable\" @submit.prevent=\"go\">\n            {{ goLabel }}到&nbsp;<input type=\"text\" class=\"form-control\" :class=\"{ 'err-pageto': errPageTo }\" v-model=\"pageTo\" />&nbsp;页\n            <button class=\"btn btn-sm btn-info\">{{ goLabel }}</button>\n        </form>\n        <form class=\"form-inline\" v-if=\"pageSizeEditable\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" @click.stop=\"togglePageSizeDropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{ pageSize }}项/页<span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" v-show=\"showPageSizeDropdown\" transition=\"v-page-dropdown\">\n                    <li v-for=\"pz in pageSizeArr\" @click=\"handlePageSizeChange(pz)\"><a href=\"javascript:\">{{ pz }}项/页</a></li>\n                </ul>\n            </div>\n        </form>\n    </div>";
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="vc-pagination-component" :class="align">
	//         <ul class="pagination">
	//             <li v-if="!noPrevious">
	//                 <a style="cursor:pointer;" @click="selectPage(current - 1)" aria-label="previous">
	//                     <span aria-hidden="true">{{ prevText }}</span>
	//                 </a>
	//             </li>
	//             <li v-if="showFirstPage" class="first-page">
	//                 <a style="cursor:pointer;" @click="selectPage(1)" aria-label="first-page">
	//                     <span aria-hidden="true">{{ firstPageText }}</span>
	//                 </a>
	//             </li>
	//             <li v-for="page in pages" :class="{ 'active': page.number == current, 'disabled': page.disabled }">
	//                 <a style="cursor:pointer;" @click="selectPage(page.number)" v-text="page.text"></a>
	//             </li>
	//             <li v-if="showLastPage" class="last-page">
	//                 <a style="cursor:pointer;" @click="selectPage(totalPages)" aria-label="last-page">
	//                     <span aria-hidden="true">{{ lastPageText }}</span>
	//                 </a>
	//             </li>
	//             <li v-if="!noNext">
	//                 <a style="cursor:pointer;" @click="selectPage(current + 1)" aria-label="next">
	//                     <span aria-hidden="true">{{ nextText }}</span>
	//                 </a>
	//             </li>
	//         </ul>
	//         <form class="form-inline" v-if="jumpable" @submit.prevent="go">
	//             {{ goLabel }}到&nbsp;<input type="text" class="form-control" :class="{ 'err-pageto': errPageTo }" v-model="pageTo" />&nbsp;页
	//             <button class="btn btn-sm btn-info">{{ goLabel }}</button>
	//         </form>
	//         <form class="form-inline" v-if="pageSizeEditable">
	//             <div class="btn-group">
	//                 <button type="button" class="btn btn-default dropdown-toggle" @click.stop="togglePageSizeDropdown" aria-haspopup="true" aria-expanded="false">
	//                     {{ pageSize }}项/页<span class="caret"></span>
	//                 </button>
	//                 <ul class="dropdown-menu" v-show="showPageSizeDropdown" transition="v-page-dropdown">
	//                     <li v-for="pz in pageSizeArr" @click="handlePageSizeChange(pz)"><a href="javascript:">{{ pz }}项/页</a></li>
	//                 </ul>
	//             </div>
	//         </form>
	//     </div>
	// </template>
	
	// <style lang="less">
	// .vc-pagination-component {
	//     &.center {
	//         text-align: center;
	//     }
	//     &.left {
	//         text-align: left;
	//     }
	//     &.right {
	//         text-align: right;
	//     }
	//     .pagination  {
	//         vertical-align: middle;
	
	//         & > li > a,  & > li > span {
	//             padding: 0;
	//             padding-top: 4px;
	//             padding-bottom: 4px;
	//             min-width: 35px;
	//             text-align: center;
	//         }
	//         .first-page a,
	//         .last-page a {
	//             padding-left: 10px;
	//             padding-right: 10px;
	//         }
	//     }
	//     .form-inline {
	//         display: inline-block;
	//         vertical-align: middle;
	
	//         .form-control {
	//             width: 44px;
	//         }
	//     }
	//     .err-pageto {
	//         border: 1px solid #F97D7D;
	//     }
	//     .dropdown-menu {
	//         width: 100%;
	//         min-width: 100%;
	//         text-align: center;
	
	//         a {
	//             padding: 3px;
	//         }
	//     }
	//     .v-page-dropdown-transition {
	//         display: inline-block;
	//     }
	//     .v-page-dropdown-enter {
	//         animation: fadeinT .3s;
	//     }
	//     .v-page-dropdown-leave {
	//         animation: fadeoutT .3s;
	//     }
	// }
	
	// @maxRange: 20px;
	
	// /* 淡入-从上 */
	// @-webkit-keyframes fadeinT {
	//     0%{opacity:0;-webkit-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-webkit-transform:translateY(0);}
	// }
	// @-moz-keyframes fadeinT {
	//     0%{opacity:0;-moz-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-moz-transform:translateY(0);}
	// }
	// @-ms-keyframes fadeinT {
	//     0%{opacity:0;-ms-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-ms-transform:translateY(0);}
	// }
	// @keyframes fadeinT {
	//     0%{opacity:0;transform:translateY(-@maxRange);}
	//     100%{opacity:1;transform:translateY(0);}
	// }
	
	// /* 淡出-向上 */
	// @-webkit-keyframes fadeoutT{
	//     0%{opacity:1;-webkit-transform:translateY(0);}
	//     100%{opacity:0;-webkit-transform:translateY(-@maxRange);}
	// }
	// @-moz-keyframes fadeoutT{
	//     0%{opacity:1;-moz-transform:translateY(0);}
	//     100%{opacity:0;-moz-transform:translateY(-@maxRange);}
	// }
	// @-ms-keyframes fadeoutT{
	//     0%{opacity:1;-ms-transform:translateY(0);}
	//     100%{opacity:0;-ms-transform:translateY(-@maxRange);}
	// }
	// @keyframes fadeoutT{
	//     0%{opacity:1;transform:translateY(0);}
	//     100%{opacity:0;transform:translateY(-@maxRange);}
	// }
	// </style>
	
	// <script>
	var COMPONENT_NS = 'PAGINATION';
	
	exports.default = {
	    props: {
	        simple: { // 普通版本
	            type: Boolean,
	            default: false
	        },
	        align: {
	            type: String,
	            default: 'center'
	        },
	        prevText: {
	            type: String,
	            default: '‹'
	        },
	        nextText: {
	            type: String,
	            default: '›'
	        },
	        firstPageText: {
	            type: String,
	            default: '首页'
	        },
	        lastPageText: {
	            type: String,
	            default: '末页'
	        },
	        displayNum: { // 可看见的页码数目
	            type: Number,
	            coerce: function coerce(val) {
	                return Number(val);
	            },
	            default: 6
	        },
	        edgeNum: { // 当页码较多时，前后空余的可选页码数量
	            type: Number,
	            coerce: function coerce(val) {
	                return Number(val);
	            },
	            default: 2
	        },
	        current: { // 当前页码数
	            twoWay: true,
	            type: Number,
	            coerce: function coerce(val) {
	                return Number(val);
	            },
	            validator: function validator(value) {
	                return value > 0;
	            },
	            default: 1
	        },
	        pageSize: { // 页面数据量
	            twoWay: true,
	            type: Number,
	            coerce: function coerce(val) {
	                return Number(val);
	            },
	            validator: function validator(value) {
	                return value > 0;
	            },
	            default: 10
	        },
	        total: { // 全部结果集数目
	            type: Number,
	            coerce: function coerce(val) {
	                return Number(val);
	            },
	            default: 0
	        },
	        onPageChange: {
	            type: Function,
	            default: function _default() {}
	        },
	        jumpable: { // 是否显示跳转控件（页码输入框和跳转按钮）
	            type: Boolean,
	            default: true
	        },
	        goLabel: { // 跳转按钮的文案
	            type: String,
	            default: '跳转'
	        },
	        invalidCallback: {
	            type: Function,
	            default: function _default() {}
	        },
	        pageSizeEditable: {
	            type: Boolean,
	            default: true
	        },
	        pageSizeArr: {
	            type: Array,
	            default: function _default() {
	                return [10, 20, 40, 100];
	            }
	        },
	        onPageSizeChange: {
	            type: Function,
	            default: function _default() {}
	        }
	    },
	    data: function data() {
	        return {
	            pageTo: void 666,
	            errPageTo: false,
	            showPageSizeDropdown: false
	        };
	    },
	    computed: {
	        noPrevious: function noPrevious() {
	            return this.current === 1;
	        },
	        noNext: function noNext() {
	            return this.current === this.totalPages;
	        },
	        showFirstPage: function showFirstPage() {
	            return this.edgeNum === 0 && this.totalPages - 2 >= this.displayNum;
	        },
	        showLastPage: function showLastPage() {
	            return this.edgeNum === 0 && this.totalPages - 2 >= this.displayNum;
	        },
	        pages: function pages() {
	            return getPages(this.current, this.totalPages, this.edgeNum, this.displayNum);
	        },
	        totalPages: function totalPages() {
	            return getTotalPages(this.pageSize, this.total);
	        }
	    },
	    created: function created() {
	        document.addEventListener('click', function (e) {
	            this.showPageSizeDropdown = false;
	        }.bind(this), false);
	    },
	    methods: {
	        isValidPageTo: function isValidPageTo(page) {
	            var info;
	            if (isNaN(page)) {
	                info = '页码必须为数字!';
	                console.error(info);
	                this.$dispatch(COMPONENT_NS, { action: 'invalidNum', data: info }, name);
	                return false;
	            }
	            if (page < 0 || page > this.totalPages) {
	                info = '页码不在正确的范围内!';
	                console.error(info);
	                this.$dispatch(COMPONENT_NS, { action: 'invalidNum', data: info }, name);
	                return false;
	            }
	            return true;
	        },
	        go: function go() {
	            if (this.isValidPageTo(this.pageTo)) {
	                this.current = +this.pageTo;
	            } else {
	                this.invalidCallback && this.invalidCallback(this.pageTo);
	            }
	            this.pageTo = void 666;
	        },
	        selectPage: function selectPage(num) {
	            if (this.current != num && num > 0 && num <= this.totalPages) {
	                this.current = num;
	                this.$emit('page-change');
	            }
	        },
	        selectSize: function selectSize(size) {
	            if (this.pageSize != size && size > 0) {
	                this.pageSize = size;
	                if (this.current > this.totalPages) {
	                    this.selectPage(this.totalPages);
	                } else {
	                    this.$emit('page-change');
	                }
	            }
	        },
	        togglePageSizeDropdown: function togglePageSizeDropdown() {
	            this.showPageSizeDropdown = !this.showPageSizeDropdown;
	        },
	        handlePageSizeChange: function handlePageSizeChange(p) {
	            this.pageSize = p;
	            this.current = 1;
	            this.onPageSizeChange && this.onPageSizeChange();
	        }
	    },
	    watch: {
	        'simple': {
	            immediate: true,
	            handler: function handler(val) {
	                if (val) {
	                    this.jumpable = false;
	                    this.pageSizeEditable = false;
	                } else {
	                    this.jumpable = true;
	                    this.pageSizeEditable = true;
	                }
	            }
	        },
	        'pageTo': function pageTo(val) {
	            if (val === void 0) return;
	            if (!this.isValidPageTo(val)) {
	                this.errPageTo = true;
	            } else {
	                this.errPageTo = false;
	            }
	            this.onPageChange && this.onPageChange();
	        }
	    },
	    beforeDestroy: function beforeDestroy() {}
	};
	
	/**
	 * @工具方法
	 * 集日月之精华... 
	 * 好吧，抄来的...
	 */
	
	function getTotalPages(pageSize, total) {
	    var totalPages = pageSize < 1 ? 1 : Math.ceil(total / pageSize);
	    return Math.max(totalPages || 0, 1);
	}
	
	// Create page object used in template
	function makePage(number, text, isActive) {
	    return {
	        number: number,
	        text: text,
	        disabled: number === -1
	    };
	}
	
	/**
	 * Calculate start and end point of pagination links depending on
	 * current and num_display_entries.
	 * @return {Array}
	 */
	function getInterval(current, pageCount, num_display_entries) {
	    //var num_display_entries = 6
	    var ne_half = Math.ceil(num_display_entries / 2);
	    var np = pageCount;
	    var upper_limit = np - num_display_entries;
	    var start = current > ne_half ? Math.max(Math.min(current - ne_half, upper_limit), 0) : 0;
	    var end = current > ne_half ? Math.min(current + ne_half, np) : Math.min(num_display_entries, np);
	    return [start, end];
	}
	
	function getPages(current, totalPages, num_edge_entries, num_display_entries) {
	    var ret = [];
	    //var num_edge_entries = 2
	    var skip_text = '...';
	    var np = totalPages;
	    var interval = getInterval(current - 1, totalPages, num_display_entries);
	
	    // Generate starting points
	    if (interval[0] > 0 && num_edge_entries > 0) {
	        var end = Math.min(num_edge_entries, interval[0]);
	        for (var i = 0; i < end; i++) {
	            var page = makePage(i + 1, i + 1);
	            ret.push(page);
	        }
	        if (num_edge_entries < interval[0]) {
	            var page = makePage(-1, skip_text);
	            ret.push(page);
	        }
	    }
	    // Generate interval links
	    for (var i = interval[0]; i < interval[1]; i++) {
	        var page = makePage(i + 1, i + 1);
	        ret.push(page);
	    }
	    // Generate ending points
	    if (interval[1] < np && num_edge_entries > 0) {
	        if (np - num_edge_entries > interval[1]) {
	            var page = makePage(-1, skip_text);
	            ret.push(page);
	        }
	        var begin = Math.max(np - num_edge_entries, interval[1]);
	        for (var i = begin; i < np; i++) {
	            var page = makePage(i + 1, i + 1);
	            ret.push(page);
	        }
	    }
	
	    return ret;
	}
	// </script>
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _Pagination = __webpack_require__(1);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Pagination2.default;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 43);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(2)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};
	
	/***/ },
	/* 5 */,
	/* 6 */
	/***/ function(module, exports) {
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(11)
	module.exports = __webpack_require__(42)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(14)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Table.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Table.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-263f320b&file=Table.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Table.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-263f320b&file=Table.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Table.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.i, "/**\n * vc-table.less\n * Mail   : pengrui@iwaimai.baidu.com\n */\n.vc-table-container {\n  position: relative;\n}\n.vc-table-container .search-area,\n.vc-table-container .export-area {\n  display: inline-block;\n  margin-bottom: 10px;\n  z-index: 2;\n  position: relative;\n}\n.vc-table-container .vc-table-title {\n  position: absolute;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  height: 30px;\n  line-height: 30px;\n  padding: 0 250px;\n}\n.vc-table-container .vc-table-title.title-only {\n  top: -40px;\n  padding: 0;\n}\n.vc-table-container .vc-table-title.title-align-left {\n  text-align: left;\n}\n.vc-table-container .vc-table-title.title-align-center {\n  text-align: center;\n}\n.vc-table-container .vc-table-title.title-align-right {\n  text-align: right;\n}\n.vc-table-container .vc-table-filter {\n  margin-left: 5px;\n  height: 30px;\n  padding: 4px 8px;\n  -wekit-box-shadow: none;\n  box-shadow: none;\n  font-size: 14px;\n  line-height: 1.428571429;\n  color: #555555;\n  vertical-align: middle;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.vc-table-container .vc-table-filter:focus {\n  border-color: #46c3c1;\n  box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);\n}\ntable.vc-table {\n  border-radius: 3px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\ntable.vc-table.title-only {\n  margin-top: 40px;\n}\ntable.vc-table.vc-table-fixed {\n  table-layout: fixed;\n}\ntable.vc-table th {\n  cursor: pointer;\n  text-align: center;\n  /* override bootstrap */\n  position: relative;\n  border-bottom: none;\n}\ntable.vc-table th.hide {\n  display: none;\n}\ntable.vc-table tr:hover {\n  cursor: pointer;\n}\ntable.vc-table td {\n  background-color: #fff;\n  padding: 4px;\n  position: relative;\n}\ntable.vc-table td span.top1,\ntable.vc-table td span.top2,\ntable.vc-table td span.top3 {\n  background-color: #F37070;\n  border-radius: 4px;\n  padding: 3px 12px;\n  color: #fff;\n}\ntable.vc-table td span.topN {\n  /* 4位及以后 */\n  background-color: #e6e2e2;\n  border-radius: 4px;\n  padding: 3px 12px;\n}\ntable.vc-table th.active {\n  background-color: inherit;\n}\ntable.vc-table th.active .arrow {\n  /* 激活的排序标志 */\n  opacity: 1;\n  border-bottom-color: #28d63d;\n  border-top-color: #28d63d;\n}\ntable.vc-table .arrow {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 0;\n  margin-left: 5px;\n  opacity: 0.66;\n}\ntable.vc-table .arrow.asc {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid #666;\n}\ntable.vc-table .arrow.dsc {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #666;\n}\n/* filterBy渐隐效果 */\n.staggered-transition {\n  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  overflow: hidden;\n  margin: 0;\n  height: 20px;\n}\n.staggered-enter,\n.staggered-leave {\n  opacity: 0;\n  height: 0;\n}\n/* 暂未实现 applied during enter/leave transition */\n/* .staggered-enter-active, .staggered-leave-active { */\n/*   transition: opacity .5s ease;  */\n/* } */\n/* v-for orderBy 自动动画 applied during moving transition */\n.staggered-move {\n  -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: transform 0.8s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n}\n.vc-fade-transition {\n  display: inline-block;\n}\n.vc-fade-enter {\n  -webkit-animation: fadeinT .5s;\n          animation: fadeinT .5s;\n}\n.vc-fade-leave {\n  -webkit-animation: fadeoutT .5s;\n          animation: fadeoutT .5s;\n}\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/* 淡出-向上 */\n@-webkit-keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n}\n@keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
	module.exports = "<div class=\"vc-table-container\">\n        <form class=\"search-area pull-left\" v-if=\"searchable\">\n            <label>筛选:</label>\n            <input type=\"text\" class=\"vc-table-filter\" name=\"query\" v-model=\"filterKey\" />\n        </form>\n        <div class=\"vc-table-title\" :style=\"{ 'text-align': titleAlign }\" :class=\"{'title-only': !searchable && !exportable }\">{{ title }}</div>\n        <div class=\"export-area pull-right\" v-if=\"exportable\">\n            <button class=\"btn btn-info btn-sm pull-right\" @click=\"exportSortArgs\">导出数据</button>\n        </div>\n        <table class=\"vc-table table table-striped table-hover\" :class=\"{ 'vc-table-fixed': tableFixed, 'title-only': (!searchable && !exportable) }\">\n            <thead v-if=\"showTableHeader\">\n                <tr @click=\"handleClick\">\n                    <th v-for=\"key in columns\"\n                        @click=\"sortBy(key)\"\n                        :class=\"{ active: sortKey == key }\">\n                        {{ key | zhCN }}\n                        <span class=\"arrow\" v-if=\"sortable\"\n                            :class=\"sortOrders[key] > 0 ? 'asc' : 'dsc'\">\n                        </span>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- 制作表格的关键，行循环，再填每一行的列, 不可用内置index做排序!故数据源必须自带index -->\n                <tr v-for=\"\n                    (index, entry) in data\n                    | filterBy filterKey \n                    | newOrderBy sortKey sortOrders[sortKey]\" \n                    transition=\"staggered\"\n                    stagger=\"5\"\n                >\n                    <td v-for=\"key in columns\">\n                        <span>{{ entry[key] }}</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>";
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(40);
	module.exports = __webpack_require__(0).Object.keys;
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
	var isObject = __webpack_require__(4);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(8)
	  , toLength  = __webpack_require__(36)
	  , toIndex   = __webpack_require__(35);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
	var isObject = __webpack_require__(4)
	  , document = __webpack_require__(3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(0)
	  , ctx       = __webpack_require__(20)
	  , hide      = __webpack_require__(25)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;
	
	/***/ },
	/* 24 */
	/***/ function(module, exports) {
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
	var dP         = __webpack_require__(28)
	  , createDesc = __webpack_require__(32);
	module.exports = __webpack_require__(1) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
	module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function(){
	  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(19);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
	var anObject       = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(38)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(8)
	  , arrayIndexOf = __webpack_require__(18)(false)
	  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(29)
	  , enumBugKeys = __webpack_require__(22);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(23)
	  , core    = __webpack_require__(0)
	  , fails   = __webpack_require__(2);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(39);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
	var toInteger = __webpack_require__(7)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(7)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(4);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};
	
	/***/ },
	/* 39 */
	/***/ function(module, exports) {
	
	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(37)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(31)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
	module.exports = { "default": __webpack_require__(15), __esModule: true };
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _keys = __webpack_require__(41);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div class="vc-table-container">
	//         <form class="search-area pull-left" v-if="searchable">
	//             <label>筛选:</label>
	//             <input type="text" class="vc-table-filter" name="query" v-model="filterKey" />
	//         </form>
	//         <div class="vc-table-title" :style="{ 'text-align': titleAlign }" :class="{'title-only': !searchable && !exportable }">{{ title }}</div>
	//         <div class="export-area pull-right" v-if="exportable">
	//             <button class="btn btn-info btn-sm pull-right" @click="exportSortArgs">导出数据</button>
	//         </div>
	//         <table class="vc-table table table-striped table-hover" :class="{ 'vc-table-fixed': tableFixed, 'title-only': (!searchable && !exportable) }">
	//             <thead v-if="showTableHeader">
	//                 <tr @click="handleClick">
	//                     <th v-for="key in columns"
	//                         @click="sortBy(key)"
	//                         :class="{ active: sortKey == key }">
	//                         {{ key | zhCN }}
	//                         <span class="arrow" v-if="sortable"
	//                             :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
	//                         </span>
	//                     </th>
	//                 </tr>
	//             </thead>
	//             <tbody>
	//                 <!-- 制作表格的关键，行循环，再填每一行的列, 不可用内置index做排序!故数据源必须自带index -->
	//                 <tr v-for="
	//                     (index, entry) in data
	//                     | filterBy filterKey 
	//                     | newOrderBy sortKey sortOrders[sortKey]" 
	//                     transition="staggered"
	//                     stagger="5"
	//                 >
	//                     <td v-for="key in columns">
	//                         <span>{{ entry[key] }}</span>
	//                     </td>
	//                 </tr>
	//             </tbody>
	//         </table>
	//     </div>
	// </template>
	
	// <style lang="less">
	// /**
	//  * vc-table.less
	//  * Mail   : pengrui@iwaimai.baidu.com
	//  */
	
	// @table-bg: #fff;
	// @arrow-bg: #666;
	// @arrow-active-bg: #28d63d;
	
	// .vc-table-container {
	//     position: relative;
	
	//     .search-area,
	//     .export-area {
	//         display: inline-block;
	//         margin-bottom: 10px;
	//         z-index: 2;
	//         position: relative;
	//     }
	//     .vc-table-title {
	//         position: absolute;
	//         left: 50%;
	//         width: 100%;
	//         -webkit-transform: translate(-50%, 0);
	//         transform: translate(-50%, 0);
	//         height: 30px;
	//         line-height: 30px;
	//         padding: 0 250px;
	
	//         &.title-only {
	//             top: -@only-title-offset;
	//             padding: 0;
	//         }
	//         &.title-align-left {
	//             text-align: left;
	//         }
	//         &.title-align-center {
	//             text-align: center;
	//         }
	//         &.title-align-right {
	//             text-align: right;
	//         }
	//     }
	
	//     // input
	//     .vc-table-filter {
	//         margin-left: 5px;
	//         height: 30px;
	//         padding: 4px 8px;
	//         -wekit-box-shadow: none;
	//         box-shadow: none;
	//         font-size: 14px;
	//         line-height: 1.428571429;
	//         color: #555555;
	//         vertical-align: middle;
	//         background-color: #ffffff;
	//         background-image: none;
	//         border: 1px solid #cccccc;
	//         border-radius: 4px;
	//         -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	//         box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	//         -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	//         transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	//     }
	//     .vc-table-filter:focus {
	//         border-color: #46c3c1;
	//         -webkit-box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
	//         box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
	//     }
	// }
	
	// @only-title-offset: 40px;
	// table.vc-table {
	//     border-radius: 3px;
	//     text-align: center;
	//     border: 1px solid #ddd;
	
	
	//     &.title-only {
	//         margin-top: @only-title-offset;
	//     }
	
	//     &.vc-table-fixed {
	//         table-layout: fixed;
	//     }
	
	//     th {
	//         &.hide {
	//             display: none;
	//         }
	//         cursor: pointer;
	//         text-align: center; /* override bootstrap */
	//         position: relative;
	//         border-bottom: none;
	//     }
	
	//     tr:hover {
	//         cursor: pointer;  
	//     }
	
	//     td {
	//         background-color: @table-bg;
	//         padding: 4px;
	//         position: relative;
	
	//         // Rank排位label
	//         span.top1,
	//         span.top2,
	//         span.top3 {
	//             background-color: #F37070;
	//             border-radius: 4px;
	//             padding: 3px 12px;
	//             color: #fff;
	//         }
	//         span.topN { /* 4位及以后 */
	//             background-color: #e6e2e2;
	//             border-radius: 4px;
	//             padding: 3px 12px;
	//         }
	//     }
	
	//     th.active {
	//         background-color: inherit;
	//     }
	
	//     th.active .arrow { /* 激活的排序标志 */
	//         opacity: 1;
	//         border-bottom-color: @arrow-active-bg;
	//         border-top-color: @arrow-active-bg;
	//     }
	
	//     .arrow {
	//         display: inline-block;
	//         vertical-align: middle;
	//         width: 0;
	//         height: 0;
	//         margin-left: 5px;
	//         opacity: 0.66;
	//     }
	
	//     .arrow.asc {
	//         border-left: 4px solid transparent;
	//         border-right: 4px solid transparent;
	//         border-bottom: 4px solid @arrow-bg;
	//     }
	
	//     .arrow.dsc {
	//         border-left: 4px solid transparent;
	//         border-right: 4px solid transparent;
	//         border-top: 4px solid @arrow-bg;
	//     }
	// }
	
	// /* filterBy渐隐效果 */
	// .staggered-transition {
	//     transition: all .5s cubic-bezier(.55, 0, .1, 1);
	//     overflow: hidden;
	//     margin: 0;
	//     height: 20px;
	// }
	// .staggered-enter, .staggered-leave {
	//     opacity: 0;
	//     height: 0;
	// }
	// /* 暂未实现 applied during enter/leave transition */
	// /* .staggered-enter-active, .staggered-leave-active { */
	// /*   transition: opacity .5s ease;  */
	// /* } */
	// /* v-for orderBy 自动动画 applied during moving transition */
	// .staggered-move {
	//   transition: transform .8s cubic-bezier(.55, 0, .1, 1); 
	// }
	
	// .vc-fade-transition {
	//     display: inline-block;
	// }
	
	// .vc-fade-enter {
	//     animation: fadeinT .5s;
	// }
	// .vc-fade-leave {
	//     animation: fadeoutT .5s;
	// }
	
	// @maxRange: 20px;
	
	// /* 淡入-从上 */
	// @-webkit-keyframes fadeinT {
	//     0%{opacity:0;-webkit-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-webkit-transform:translateY(0);}
	// }
	// @-moz-keyframes fadeinT {
	//     0%{opacity:0;-moz-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-moz-transform:translateY(0);}
	// }
	// @-ms-keyframes fadeinT {
	//     0%{opacity:0;-ms-transform:translateY(-@maxRange);}
	//     100%{opacity:1;-ms-transform:translateY(0);}
	// }
	// @keyframes fadeinT {
	//     0%{opacity:0;transform:translateY(-@maxRange);}
	//     100%{opacity:1;transform:translateY(0);}
	// }
	
	// /* 淡出-向上 */
	// @-webkit-keyframes fadeoutT{
	//     0%{opacity:1;-webkit-transform:translateY(0);}
	//     100%{opacity:0;-webkit-transform:translateY(-@maxRange);}
	// }
	// @-moz-keyframes fadeoutT{
	//     0%{opacity:1;-moz-transform:translateY(0);}
	//     100%{opacity:0;-moz-transform:translateY(-@maxRange);}
	// }
	// @-ms-keyframes fadeoutT{
	//     0%{opacity:1;-ms-transform:translateY(0);}
	//     100%{opacity:0;-ms-transform:translateY(-@maxRange);}
	// }
	// @keyframes fadeoutT{
	//     0%{opacity:1;transform:translateY(0);}
	//     100%{opacity:0;transform:translateY(-@maxRange);}
	// }
	// </style>
	
	// <script>
	var COMPONENT_NS = 'TABLE';
	
	exports.default = {
	    props: {
	        name: {
	            type: String,
	            default: 'vc-table' + Date.now()
	        },
	        tpl: String, // 放出tpl属性，让用户定制组件template，支持一个字符串来代表字符串模板或模板dom标示
	        data: {
	            type: Array
	        },
	        dataParser: { // a callback to parse each entry[key] in template
	            type: Function
	        },
	        dataPlus: Object, // 高级定制: 外部可提供一个数据对象供模板使用(比如传入baseUrl)
	        columns: Array,
	        columnsMap: Object, // key => value对照映射，用于可能的中文filter
	        title: String, // 表头
	        titleAlign: {
	            type: String,
	            default: 'center'
	        },
	        tableFixed: { // table-layout: fixed的使用
	            type: Boolean,
	            default: false
	        },
	        searchable: { // 是否可搜索过滤
	            type: Boolean,
	            default: false
	        },
	        sortable: {
	            type: Boolean,
	            default: false
	        },
	        showTableHeader: {
	            type: Boolean,
	            default: true
	        },
	        exportLabel: {
	            type: String,
	            default: '导出'
	        },
	        exportable: { // 是否显示导出按钮(会dispatch排序参数等相关信息)
	            type: Boolean,
	            default: false
	        }
	    },
	    created: function created() {
	        if (this.tpl) {
	            this.$options.template = this.tpl;
	        }
	    },
	    data: function data() {
	        var sortOrders = {};
	        this.columns.forEach(function (key) {
	            sortOrders[key] = 1;
	        });
	        return {
	            filterKey: '',
	            sortKey: '',
	            sortOrders: sortOrders
	        };
	    },
	    filters: { // 局部filter
	        newOrderBy: function newOrderBy(arr, key, sign) {
	            sign = parseInt(sign);
	            return arr.sort(function (item, nextItem) {
	                var t1, t2;
	                t1 = item[key] == null ? -Infinity : item[key];
	                t2 = nextItem[key] == null ? -Infinity : nextItem[key];
	                if (isNaN(t1) || isNaN(t2)) {
	                    if (t1 > t2) {
	                        return sign;
	                    } else {
	                        return -sign;
	                    }
	                }
	                return (Number(t1) - Number(t2)) * sign;
	            });
	        },
	        round: function round(value, accuracy, keep) {
	            if (typeof value !== 'number') value = +value;
	
	            var fixed = value.toFixed(accuracy);
	
	            return keep ? fixed : +fixed;
	        },
	        zhCN: function zhCN(columnKey) {
	            var map = this.columnsMap;
	            var keys = (0, _keys2.default)(map);
	            if (keys.length > 0) {
	                for (var i = 0, len = keys.length; i < len; i++) {
	                    if (columnKey === keys[i]) {
	                        return map[columnKey];
	                        console.log(map[columnKey]);
	                    }
	                }
	            } else {
	                return columnKey;
	            }
	        }
	    },
	    methods: {
	        sortBy: function sortBy(key) {
	            if (!this.sortable) return;
	            this.sortKey = key;
	            if (this.sortOrders[key] == null) {
	                this.sortOrders[key] = -1;
	            } else {
	                this.sortOrders[key] = this.sortOrders[key] * -1; // toggle order
	            }
	        },
	        // 分发当前点击index
	        handleClick: function handleClick() {
	            var info = [].slice.call(arguments, 0);
	            var msg = {
	                action: 'click',
	                data: info
	            };
	            this.$dispatch(COMPONENT_NS, msg, name);
	        },
	        // 分发当前排序参数
	        exportSortArgs: function exportSortArgs() {
	            var msg = {
	                action: 'exportSortInfo',
	                data: {
	                    sortKey: this.sortKey,
	                    currentOrder: this.sortOrders[this.sortKey],
	                    order: this.sortOrders
	                }
	            };
	            this.$dispatch(COMPONENT_NS, msg, name);
	        }
	    },
	    events: {
	        'triggerSort': function triggerSort(key) {
	            this.sortBy(key);
	            var msg = {
	                action: 'sortDone',
	                data: {
	                    sortKey: this.sortKey,
	                    sortOrders: this.sortOrders
	                }
	            };
	            this.$dispatch('COMPONENT_NS', msg);
	        }
	    }
	};
	// </script>
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _Table = __webpack_require__(9);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Table2.default;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 14);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */,
	/* 1 */,
	/* 2 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(6)
	module.exports = __webpack_require__(12)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(10)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(7)
	module.exports = __webpack_require__(13)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(11)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabSet.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabSet.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabSet.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabSet.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabSet.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-77ef9da0&file=Tab.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-77ef9da0&file=Tab.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c512445c&file=TabSet.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabSet.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c512445c&file=TabSet.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabSet.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.i, ".tab-content > .tab-pane {\n  display: block;\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.i, ".nav-tabs {\n  margin-bottom: 15px;\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
	module.exports = "<div role=\"tabpanel\" class=\"tab-pane\"\n        :class=\"{hide: !show}\"\n        v-show=\"show\"\n        :transition=\"transition\"\n    >\n        <slot></slot>\n    </div>";
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
	module.exports = "<div :data-name=\"name\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li\n                v-for=\"r in renderData\"\n                :class=\"{\n                    'active': (r.index == active),\n                    'disabled': r.disabled\n                }\"\n                @click.prevent=\"handleTabListClick(r.index, r)\"\n                :disabled=\"r.disabled\"\n            >\n                <a href=\"#\">  \n                    <slot name=\"header\"> \n                        {{{ r.header }}}\n                    </slot> \n                </a>\n            </li>\n        </ul>\n\n        <!-- Tab panes -->\n        <div class=\"tab-content\" v-el:tab-content>\n            <slot></slot>\n        </div>\n    </div>";
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div role="tabpanel" class="tab-pane"
	//         :class="{hide: !show}"
	//         v-show="show"
	//         :transition="transition"
	//     >
	//         <slot></slot>
	//     </div>
	// </template>
	
	// <style>
	// .tab-content > .tab-pane {
	//     display: block;
	// }
	// </style>
	
	// <script>
	var COMPONENT_NS = 'TAB';
	
	exports.default = {
	    props: {
	        header: { // tab标题
	            type: String
	        },
	        id: { // 可传入id,关闭$parent的autoIndex来用外界传入的index做tab的渲染,高级用法，一般无需使用
	            type: [String, Number]
	        },
	        disabled: { // 不响应点击事件，达到不会切换tab的disabled效果
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            index: -1 // 初始化内部index
	            // show: false // 初始不显示
	        };
	    },
	    computed: {
	        show: function show() {
	            // active时才显示
	            return this.$parent.active == this.index;
	        },
	        transition: function transition() {
	            // 动画模式
	            return this.$parent.effect;
	        }
	    },
	    created: function created() {},
	    ready: function ready() {
	        // 内部自增index
	        if (this.$parent.autoIndex) {
	            this.index = this.$parent.index;
	            this.$parent.index++;
	        } else {
	            // 强设index
	            this.index = this.id;
	        }
	
	        // 给parent壮哉渲染数据
	        this.$parent.renderData.push({
	            index: this.index + '',
	            header: this.header,
	            disabled: this.disabled
	        });
	
	        var msg = {
	            action: 'newTabDone',
	            data: {
	                val: this.header,
	                id: this.id
	            }
	        };
	        this.$dispatch(COMPONENT_NS, msg, this.$parent.name);
	    },
	    beforeDestroy: function beforeDestroy() {
	        // 去除渲染数据，达到响应式
	        this.$parent.renderData.forEach(function (item, index) {
	            if (item.index == this.index) {
	                this.$parent.renderData.splice(index, 1);
	            }
	        }.bind(this));
	    },
	    watch: {
	        'header': function header(val) {
	            if (this.$parent.autoIndex) {
	                this.$parent.renderData[this.index].header = val;
	            } else {
	                var idx = -1;
	                var data = this.$parent.renderData;
	                for (var i = 0, len = data.length; i < len; i++) {
	                    if (parseInt(data[i].index, 10) === parseInt(this.index, 10)) {
	                        idx = i;
	                    }
	                }
	                this.$parent.renderData[idx].header = val;
	            }
	            var msg = {
	                action: 'headerChange',
	                data: {
	                    val: val,
	                    id: this.id
	                }
	            };
	            this.$dispatch(COMPONENT_NS, msg, this.$parent.name);
	        }
	    }
	};
	// </script>
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div :data-name="name">
	//         <!-- Nav tabs -->
	//         <ul class="nav nav-tabs" role="tablist">
	//             <li
	//                 v-for="r in renderData"
	//                 :class="{
	//                     'active': (r.index == active),
	//                     'disabled': r.disabled
	//                 }"
	//                 @click.prevent="handleTabListClick(r.index, r)"
	//                 :disabled="r.disabled"
	//             >
	//                 <a href="#">  
	//                     <slot name="header"> 
	//                         {{{ r.header }}}
	//                     </slot> 
	//                 </a>
	//             </li>
	//         </ul>
	
	//         <!-- Tab panes -->
	//         <div class="tab-content" v-el:tab-content>
	//             <slot></slot>
	//         </div>
	//     </div>
	// </template>
	
	// <style>
	// .nav-tabs {
	//     margin-bottom: 15px
	// }
	// </style>
	
	// <script>
	exports.default = {
	    props: {
	        name: String,
	        effect: {
	            type: String,
	            default: 'fadein'
	        },
	        active: {
	            type: [Number, String],
	            default: 0
	        },
	        autoIndex: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            renderData: [],
	            index: 0
	        };
	    },
	    methods: {
	        handleTabListClick: function handleTabListClick(index, el) {
	            if (!el.disabled) this.active = index;
	        }
	    }
	};
	// </script>
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _TabSet = __webpack_require__(5);
	
	var _TabSet2 = _interopRequireDefault(_TabSet);
	
	var _Tab = __webpack_require__(4);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    vcTab: _Tab2.default,
	    vcTabset: _TabSet2.default
	};
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 27);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(4)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});
	
	/***/ },
	/* 2 */,
	/* 3 */
	/***/ function(module, exports) {
	
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(8)
	module.exports = __webpack_require__(26)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(11)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-6fd701c3&file=Modal.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-6fd701c3&file=Modal.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.i, ".modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  text-align: center;\n  display: none;\n  /* 初始化之前隐藏 */\n}\n.modal-footer {\n  text-align: center;\n  /* override bootstrap */\n}\n.modal.in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n.modal-content {\n  padding: 30px;\n}\n/* 独立的close按钮 */\nbutton.close {\n  position: relative;\n  right: 10px;\n  top: 5px;\n  z-index: 2;\n  outline: none;\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
	module.exports = "<div role=\"dialog\"\n        :class=\"{\n        'modal': true,\n        'fade': effect === 'fade',\n        'zoom': effect === 'zoom'\n        }\"\n    >\n        <div :class=\"{ 'modal-dialog':true,'modal-lg':large,'modal-sm':small }\" \n            :style=\"{width: optionalWidth}\"\n            role=\"document\"\n        >\n            <button type=\"button\" class=\"close\" v-show=\"showCloseBtn\" @click=\"onClose\"><span>&times;</span></button>\n            <div class=\"modal-content\">\n                <slot name=\"modal-header\" v-if=\"showHeader\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" > \n                            <div name=\"ttle\">\n                                {{title}}\n                            </div>\n                        </h4>\n                    </div>\n                </slot>\n                <slot name=\"modal-body\">\n                    <div class=\"modal-body\"></div>\n                </slot>\n                <slot name=\"modal-footer\" v-if=\"showFooter\">\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" @click=\"onConfirm\">{{ okText }}</button>\n                        <button type=\"button\" class=\"btn btn-default\" @click=\"onClose\">{{ noText }}</button>\n                    </div>\n                </slot>\n            </div>\n        </div>\n    </div>";
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(24);
	module.exports = __webpack_require__(3).Number.isInteger;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
	var isObject = __webpack_require__(0);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
	var isObject = __webpack_require__(0)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(3)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(1) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
	module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(0)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(23)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(0);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(17);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(20)});
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
	module.exports = { "default": __webpack_require__(12), __esModule: true };
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isInteger = __webpack_require__(25);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div role="dialog"
	//         :class="{
	//         'modal': true,
	//         'fade': effect === 'fade',
	//         'zoom': effect === 'zoom'
	//         }"
	//     >
	//         <div :class="{ 'modal-dialog':true,'modal-lg':large,'modal-sm':small }" 
	//             :style="{width: optionalWidth}"
	//             role="document"
	//         >
	//             <button type="button" class="close" v-show="showCloseBtn" @click="onClose"><span>&times;</span></button>
	//             <div class="modal-content">
	//                 <slot name="modal-header" v-if="showHeader">
	//                     <div class="modal-header">
	//                         <h4 class="modal-title" > 
	//                             <div name="ttle">
	//                                 {{title}}
	//                             </div>
	//                         </h4>
	//                     </div>
	//                 </slot>
	//                 <slot name="modal-body">
	//                     <div class="modal-body"></div>
	//                 </slot>
	//                 <slot name="modal-footer" v-if="showFooter">
	//                     <div class="modal-footer">
	//                         <button type="button" class="btn btn-primary" @click="onConfirm">{{ okText }}</button>
	//                         <button type="button" class="btn btn-default" @click="onClose">{{ noText }}</button>
	//                     </div>
	//                 </slot>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	
	// <style>
	// .modal {
	//     transition: all 0.3s ease;
	//     text-align: center;
	//     display: none; /* 初始化之前隐藏 */
	// }
	// .modal-footer {
	//     text-align: center; /* override bootstrap */
	// }
	// .modal.in {
	//     background-color: rgba(0,0,0,0.5);
	// }
	// .modal.zoom .modal-dialog {
	//     -webkit-transform: scale(0.1);
	//     -moz-transform: scale(0.1);
	//     -ms-transform: scale(0.1);
	//     transform: scale(0.1);
	//     top: 300px;
	//     opacity: 0;
	//     -webkit-transition: all 0.3s;
	//     -moz-transition: all 0.3s;
	//     transition: all 0.3s;
	// }
	// .modal.zoom.in .modal-dialog {
	//     -webkit-transform: scale(1);
	//     -moz-transform: scale(1);
	//     -ms-transform: scale(1);
	//     transform: scale(1);
	//     -webkit-transform: translate3d(0, -300px, 0);
	//     transform: translate3d(0, -300px, 0);
	//     opacity: 1;
	// }
	
	// .modal-content {
	//     padding: 30px; // 空出关闭按钮,也统一好看一些
	// }
	
	// /* 独立的close按钮 */
	// button.close {
	//     position: relative;
	//     right: 10px;
	//     top: 5px;
	//     z-index: 2;
	//     outline: none;
	// }
	// </style>
	
	// <script>
	// polyfill
	Number.isInteger = _isInteger2.default || function (value) {
	    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	};
	
	exports.default = {
	    props: {
	        show: {
	            require: true,
	            type: Boolean,
	            twoWay: true
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        showCloseBtn: {
	            type: Boolean,
	            default: true
	        },
	        showHeader: {
	            type: Boolean,
	            default: true
	        },
	        showFooter: {
	            type: Boolean,
	            default: true
	        },
	        width: {
	            default: null
	        },
	        okText: {
	            type: String,
	            default: '确定'
	        },
	        noText: {
	            type: String,
	            default: '取消'
	        },
	        onConfirm: {
	            type: Function,
	            default: function _default() {}
	        },
	        effect: {
	            type: String,
	            default: null
	        },
	        backdrop: {
	            type: Boolean,
	            default: true
	        },
	        large: {
	            type: Boolean,
	            default: false
	        },
	        small: {
	            type: Boolean,
	            default: false
	        }
	    },
	    ready: function ready() {
	        var _this = this;
	
	        this.$watch('show', function (val) {
	            var el = _this.$el;
	            var body = document.body;
	            if (val) {
	                el.querySelector('.modal-content').focus();
	                el.style.display = 'block';
	                setTimeout(function () {
	                    el.classList.add('in');
	                }, 0);
	                body.classList.add('modal-open');
	                var scrollbarWidth = _this.getScrollbarWidth();
	                if (scrollbarWidth) {
	                    body.style.paddingRight = scrollbarWidth + 'px';
	                }
	                if (_this.backdrop) {
	                    el.addEventListener('click', _this.modalBlurHandler, false);
	                }
	            } else {
	                if (el.classList.contains('in')) {
	                    el.classList.remove('in');
	                    el.addEventListener('transitionend', _this.transitionEndHandler, false);
	                }
	            }
	        }, { immediate: true });
	    },
	
	    computed: {
	        optionalWidth: function optionalWidth() {
	            if (this.width == null || this.width === '') {
	                return null;
	            }
	            if ((0, _isInteger2.default)(+this.width)) {
	                return this.width + 'px';
	            }
	            return this.width;
	        }
	    },
	    // watch: {
	    //     show (val) {
	    //         const body = document.body
	    //         const el = this.$el
	    //         if (val) {
	    //             el.querySelector('.modal-content').focus()
	    //             el.style.display = 'block'
	    //             setTimeout(() => { el.classList.add('in') }, 0)
	    //             body.classList.add('modal-open')
	    //             const scrollbarWidth = this.getScrollbarWidth()
	    //             if (scrollbarWidth) {
	    //                 body.style.paddingRight = scrollbarWidth + 'px'
	    //             }
	    //             if (this.backdrop) {
	    //                 el.addEventListener('click', this.modalBlurHandler, false)
	    //             }
	    //         } else {
	    //             if (el.classList.contains('in')) {
	    //                 el.classList.remove('in')
	    //                 el.addEventListener('transitionend', this.transitionEndHandler, false)
	    //             }
	    //         }
	    //     }
	    // },
	    methods: {
	        getScrollbarWidth: function getScrollbarWidth() {
	            if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	                return 0;
	            }
	            var inner = document.createElement('p');
	            inner.style.width = '100%';
	            inner.style.height = '200px';
	
	            var outer = document.createElement('div');
	            outer.style.position = 'absolute';
	            outer.style.top = '0px';
	            outer.style.left = '0px';
	            outer.style.visibility = 'hidden';
	            outer.style.width = '200px';
	            outer.style.height = '150px';
	            outer.style.overflow = 'hidden';
	            outer.appendChild(inner);
	
	            document.body.appendChild(outer);
	            var w1 = inner.offsetWidth;
	            outer.style.overflow = 'scroll';
	            var w2 = inner.offsetWidth;
	            if (w1 === w2) w2 = outer.clientWidth;
	
	            document.body.removeChild(outer);
	
	            return w1 - w2;
	        },
	        modalBlurHandler: function modalBlurHandler(e) {
	            if (e.target === this.$el) {
	                this.show = false;
	            }
	        },
	        transitionEndHandler: function transitionEndHandler() {
	            var body = document.body;
	            var el = this.$el;
	            // el.removeEventListener('click', blurEvent, false)
	            el.removeEventListener('transitionend', this.transitionEndHandler, false);
	            el.removeEventListener('click', this.modalBlurHandler, false);
	            el.style.display = 'none';
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	        },
	
	        onClose: function onClose() {
	            this.show = false;
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (el.classList.contains('in')) {
	            el.classList.remove('in');
	            el.addEventListener('transitionend', this.transitionEndHandler, false);
	        }
	    }
	};
	// </script>
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _Modal = __webpack_require__(6);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Modal2.default;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 8);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */,
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(3)
	module.exports = __webpack_require__(7)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(6)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Easyclearinput.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Easyclearinput.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Easyclearinput.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-522b0c3a&file=Easyclearinput.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Easyclearinput.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-522b0c3a&file=Easyclearinput.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Easyclearinput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.i, ".vc-easyclearinput-component .input-box {\n  display: inline-block;\n  position: relative;\n}\n.vc-easyclearinput-component .input-box:hover .clear-it {\n  visibility: visible;\n}\n.vc-easyclearinput-component .input-box .clear-it {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: .3;\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
	module.exports = "<div class=\"vc-easyclearinput-component form-group\">\n        <label for=\"\">{{ label }}</label>\n        <div class=\"input-box\">\n            <input v-el:input :type=\"type\" class=\"form-control\" v-model=\"value\" :placeholder=\"placeholder\" @focus=\"handleFocus\" @blur=\"handleBlur\" @change=\"onChange\" @input=\"onInput\" />\n            <span class=\"clear-it glyphicon glyphicon-remove-circle\" aria-hidden=\"true\" @click=\"handleClear\"></span>\n        </div>\n    </div>";
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="vc-easyclearinput-component form-group">
	//         <label for="">{{ label }}</label>
	//         <div class="input-box">
	//             <input v-el:input :type="type" class="form-control" v-model="value" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur" @change="onChange" @input="onInput" />
	//             <span class="clear-it glyphicon glyphicon-remove-circle" aria-hidden="true" @click="handleClear"></span>
	//         </div>
	//     </div>
	// </template>
	
	// <style lang="less">
	// // container
	// .vc-easyclearinput-component {
	
	//     .input-box {
	//         display: inline-block;
	//         position: relative;
	
	//         &:hover {
	//             .clear-it {
	//                 visibility: visible;
	//             }
	//         }
	
	//         .clear-it {
	//             visibility: hidden;
	//             position: absolute;
	//             top: 50%;
	//             right: 6px;
	//             // css3 it more flexible
	//             -webkit-transform: translateY(-50%);
	//             transform: translateY(-50%);
	//             opacity: .3;
	//         }
	//     }
	
	// } // end of container
	// </style>
	
	// <script>
	var EVENT_DELAY = 128;
	
	exports.default = {
	    props: {
	        value: {
	            twoWay: true
	        },
	        label: String,
	        placeholder: String,
	        type: {
	            type: String,
	            default: 'text'
	        },
	        autofocus: {
	            type: Boolean,
	            default: false
	        },
	        onInput: {
	            type: Function,
	            default: function _default() {}
	        },
	        onChange: {
	            type: Function,
	            default: function _default() {}
	        },
	        onFocus: {
	            type: Function,
	            default: function _default() {}
	        },
	        onBlur: {
	            type: Function,
	            default: function _default() {}
	        },
	        onClear: {
	            type: Function,
	            default: function _default() {}
	        }
	    },
	    data: function data() {
	        return {
	            isClear: false
	        };
	    },
	    created: function created() {},
	    ready: function ready() {
	        if (this.autofocus) {
	            this.focusInput();
	        }
	    },
	    computed: {},
	    watch: {
	        autofocus: function autofocus(val) {
	            if (val) {
	                this.focusInput();
	            }
	        }
	    },
	    methods: {
	        /**
	         * 点击清除按钮
	         * 1. blur 2. clear 3.focus again
	         * 事件修正，使得小叉号成为类似系统原生的和input一体的控件，
	         * 点击小叉号不应该带来input的失焦还有相应事件的响应
	         */
	        focusInput: function focusInput() {
	            // 工具方法
	            this.$els.input && this.$els.input.focus();
	        },
	        handleBlur: function handleBlur(e) {
	            var _this = this;
	
	            // console.log(1)
	            setTimeout(function () {
	                if (!_this.isClear) {
	                    _this.onBlur(e);
	                } else {
	                    setTimeout(function () {
	                        _this.focusInput();
	                    }, 0);
	                }
	                // this.isClear = false
	            }, EVENT_DELAY);
	        },
	        handleClear: function handleClear() {
	            // console.log(2)
	            this.isClear = true;
	            this.value = '';
	            this.onClear();
	            this.focusInput();
	        },
	        handleFocus: function handleFocus(e) {
	            var _this2 = this;
	
	            // console.log(3)
	            setTimeout(function () {
	                if (!_this2.isClear) {
	                    _this2.onFocus(e);
	                }
	                _this2.isClear = false;
	            }, EVENT_DELAY + 10);
	        }
	    },
	    beforeDestroy: function beforeDestroy() {},
	    destroy: function destroy() {}
	};
	// </script>
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _Easyclearinput = __webpack_require__(1);
	
	var _Easyclearinput2 = _interopRequireDefault(_Easyclearinput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Easyclearinput2.default;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueComponentsName"] = factory();
		else
			root["VueComponentsName"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
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
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
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
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 11);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */,
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	__webpack_require__(3)
	module.exports = __webpack_require__(10)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(6)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue"], function () {
	var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.i, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-0af67f43&file=Autocomplete.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Autocomplete.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-0af67f43&file=Autocomplete.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Autocomplete.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.i, ".vc-autocomplete-component {\n  position: relative;\n}\n.vc-autocomplete-component .input-box {\n  display: inline-block;\n  position: relative;\n}\n.vc-autocomplete-component .input-box:hover .clear-it {\n  visibility: visible;\n}\n.vc-autocomplete-component .input-box .clear-it {\n  visibility: hidden;\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: .3;\n}\n.transition,\n.autocomplete,\n.showAll-transition,\n.autocomplete ul,\n.autocomplete ul li a {\n  transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n}\n.autocomplete ul {\n  width: auto;\n  min-width: 100%;\n  font-family: sans-serif;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n  transform: translate(-50%);\n  list-style: none;\n  background: #fff;\n  padding: 1px;\n  margin: 0;\n  display: inline-block;\n  margin-top: 10px;\n}\n/* 三角形 */\n.autocomplete ul:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid rgba(0, 0, 0, 0.15);\n  left: 46%;\n  top: -20px;\n}\n.autocomplete ul:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n  left: 46%;\n  top: -19px;\n}\n.autocomplete ul li a {\n  text-decoration: none;\n  display: block;\n  color: #2b2b2b;\n  padding: 5px;\n  padding-left: 10px;\n}\n.autocomplete ul li a:hover,\n.autocomplete ul li.focus-list a {\n  color: white;\n  background: #2F9AF7;\n}\n.autocomplete ul li a span {\n  display: block;\n  margin-top: 3px;\n  color: grey;\n  font-size: 13px;\n}\n.autocomplete ul li a:hover span,\n.autocomplete ul li.focus-list a span {\n  color: white;\n}\n.showAll-transition {\n  opacity: 1;\n  height: 30px;\n  overflow: hidden;\n}\n.showAll-enter {\n  opacity: 0.3;\n  height: 0;\n}\n.showAll-leave {\n  display: none;\n}\n", ""]);
	
	// exports
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
	module.exports = "<div class=\"vc-autocomplete-component form-group\">\n        <label class=\"\">{{ label }}</label>\n        <div class=\"input-box\">\n            <input v-el:input type=\"text\" :id=\"id\" class=\"form-control\" autocomplete=\"off\" :class=\"class\" :name=\"name\" :placeholder=\"placeholder\" v-model=\"vm\" @input=\"input(vm) | debounce 300\" @blur=\"hideAll\" @keydown=\"keydown\" @focus=\"focus\" />\n            <span class=\"clear-it glyphicon glyphicon-remove-circle\" aria-hidden=\"true\" @click=\"clear()\"></span>\n            <div class=\"autocomplete transition autocomplete-{{ name }}\" id=\"autocomplete-{{ name }}\" v-show=\"showList\"> \n                <ul v-if=\"jsonList && jsonList.length > 0\" class=\"dropdown-menu\"> \n                    <li v-for=\"data in jsonList\" transition=\"showAll\" :class=\"activeClass($index)\"> \n                        <a href=\"#\" @click.prevent=\"$emit('selectList',data)\" @mousemove=\"mousemove($index)\">\n                            <span class=\"vc-autocomplete-item\">{{ data[anchor] }} {{ data[anchorPlus] }}</span>\n                        </a> \n                    </li>\n                </ul> \n                <ul class=\"dropdown-menu\" v-if=\"showNoContentTip\" style=\"text-align: center;padding: 10px;\">没有匹配的{{ label }}数据</ul>\n            </div>\n        </div>\n    </div>";
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
	var core  = __webpack_require__(8)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
	module.exports = { "default": __webpack_require__(7), __esModule: true };
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(9);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div class="vc-autocomplete-component form-group">
	//         <label class="">{{ label }}</label>
	//         <div class="input-box">
	//             <input v-el:input type="text" :id="id" class="form-control" autocomplete="off" :class="class" :name="name" :placeholder="placeholder" v-model="vm" @input="input(vm) | debounce 300" @blur="hideAll" @keydown="keydown" @focus="focus" />
	//             <span class="clear-it glyphicon glyphicon-remove-circle" aria-hidden="true" @click="clear()"></span>
	//             <div class="autocomplete transition autocomplete-{{ name }}" id="autocomplete-{{ name }}" v-show="showList"> 
	//                 <ul v-if="jsonList && jsonList.length > 0" class="dropdown-menu"> 
	//                     <li v-for="data in jsonList" transition="showAll" :class="activeClass($index)"> 
	//                         <a href="#" @click.prevent="$emit('selectList',data)" @mousemove="mousemove($index)">
	//                             <span class="vc-autocomplete-item">{{ data[anchor] }} {{ data[anchorPlus] }}</span>
	//                         </a> 
	//                     </li>
	//                 </ul> 
	//                 <ul class="dropdown-menu" v-if="showNoContentTip" style="text-align: center;padding: 10px;">没有匹配的{{ label }}数据</ul>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	
	// <style lang="less">
	// // container
	// .vc-autocomplete-component {
	//     position: relative;
	
	//     .input-box {
	//         display: inline-block;
	//         position: relative; // 更内聚的relative保证
	
	//         &:hover {
	//             .clear-it {
	//                 visibility: visible;
	//             }
	//         }
	
	//         .clear-it {
	//             visibility: hidden;
	//             position: absolute;
	//             right: 6px;
	//             top: 50%;
	//             -webkit-transform: translateY(-50%);
	//             transform: translateY(-50%);
	//             opacity: .3;
	//         }
	//     }
	// }
	
	// .transition, .autocomplete, .showAll-transition, .autocomplete ul, .autocomplete ul li a{
	//     transition:all 0.3s ease-out;
	//     -moz-transition:all 0.3s ease-out;
	//     -webkit-transition:all 0.3s ease-out;
	//     -o-transition:all 0.3s ease-out;
	// }
	
	// .autocomplete ul {
	//     width: auto;
	//     min-width: 100%;
	//     font-family: sans-serif;
	//     position: absolute;
	//     left: 50%;
	//     -webkit-transform: translate(-50%);
	//     transform: translate(-50%);
	//     list-style: none;
	//     background: #fff;
	//     padding: 1px;
	//     margin: 0;
	//     display: inline-block;
	//     margin-top: 10px;
	// }
	
	// /* 三角形 */
	// .autocomplete ul:before {
	//     content: "";
	//     display: block;
	//     position: absolute;
	//     height: 0;
	//     width: 0;
	//     border: 10px solid transparent;
	//     border-bottom: 10px solid rgba(0, 0, 0, 0.15);
	//     left: 46%;
	//     top: -20px
	// }
	// .autocomplete ul:after {
	//     content: "";
	//     display: block;
	//     position: absolute;
	//     height: 0;
	//     width: 0;
	//     border: 10px solid transparent;
	//     border-bottom: 10px solid #fff;
	//     left: 46%;
	//     top: -19px
	// }
	// .autocomplete ul li a {
	//     text-decoration: none;
	//     display: block;
	//     color: #2b2b2b;
	//     padding: 5px;
	//     padding-left: 10px;
	// }
	
	// .autocomplete ul li a:hover, .autocomplete ul li.focus-list a {
	//     color: white;
	//     background: #2F9AF7;
	// }
	
	// .autocomplete ul li a span {
	//     display: block;
	//     margin-top: 3px;
	//     color: grey;
	//     font-size: 13px;
	// }
	
	// .autocomplete ul li a:hover span, .autocomplete ul li.focus-list a span {
	//     color: white;
	// }
	
	// .showAll-transition {
	//     opacity: 1;
	//     height: 30px;
	//     overflow: hidden;
	// }
	
	// .showAll-enter {
	//     opacity: 0.3;
	//     height: 0;
	// }
	
	// .showAll-leave {
	//     display: none;
	// }
	// </style>
	
	// <script>
	exports.default = {
	    props: {
	        name: String, // name for unique component identity, also as input dom's name attr
	        id: String, // input dom's id attr
	        class: String, // input dom's class attr
	        autofocus: {
	            type: Boolean,
	            default: false
	        },
	        label: {
	            type: String,
	            default: ''
	        },
	        placeholder: String,
	
	        // 用于同步父组件
	        parentModelKey: String, // v-model like, 用于同步父组件model, 传进字符串作为key
	
	        // ajax请求地址
	        url: {
	            type: String,
	            required: true
	        },
	        // 请求补充参数  e.g. 'city=131&word='
	        param: {
	            type: String,
	            default: 'word'
	        },
	        // 请求limit的key名，有默认值，可配置
	        limitKey: {
	            type: String,
	            default: 'limit'
	        },
	        // add 'limit' query to AJAX URL which will be fetched
	        limit: {
	            type: String,
	            default: ''
	        },
	        // 可传入解析器,不传则用内置的getDeepData
	        dataParser: Function,
	        // 数据层级获取目标,由于每个api设计的返回结果的数据结构不一定一样,所以要求强制设置!default仅仅是个示例
	        target: {
	            type: String,
	            required: true,
	            default: 'data.list'
	        },
	        // 数据的锚点，即ajax返回的的每一个item中你需要取出来展示的特定key
	        anchor: {
	            type: String,
	            required: true
	        },
	        // 补充锚点，此处不是太好，局限了组件只能扩展一个显示锚点
	        anchorPlus: {
	            type: String,
	            default: 'district'
	        }
	    }, // end of props
	    data: function data() {
	        return {
	            vm: "", // 输入值
	            showList: false, // 是否显示下拉结果列表
	            jsonList: [], // ajax的返回值的解析后的json列表
	            json: function json(data) {
	                return JSON.parse((0, _stringify2.default)(data));
	            },
	            showNoContentTip: false,
	            focusListIndex: "" // focus的item游标
	        };
	    },
	    created: function created() {
	        // sync parent model with $data.type
	        this.vm = this.$parent.$data[this.parentModelKey];
	    },
	    ready: function ready() {
	        if (this.autofocus) {
	            this.focusInput();
	        }
	    },
	
	    watch: {
	        autofocus: function autofocus(val) {
	            this.focusInput();
	        },
	
	        vm: function vm(val, old) {
	            // CORE: Sync parent model with this.vm
	            return this.$parent.$data[this.parentModelKey] = val;
	        }
	    },
	    methods: {
	        focusInput: function focusInput() {
	            this.$els.input && this.$els.input.focus();
	        },
	
	        clear: function clear() {
	            this.vm = '';
	        },
	        // 并不是每个api返回的结构、层级都是一样的，需要接受传参配置，然后递归解析
	        getDeepData: function getDeepData(data, target) {
	            var levels = target.split('.');
	            for (var i = 0, len = levels.length; i < len; i++) {
	                data = data[levels[i]];
	            }
	
	            return data;
	        },
	        // domEvent => @input
	        input: function input(val) {
	            this.showList = true;
	
	            var msg = {
	                action: 'input',
	                data: val
	            };
	            this.$dispatch('AUTOCOMPLETE', msg, this.name);
	            this.$emit('fetchData', val);
	
	            return this.$parent.$data[this.parentModelKey] = val;
	        },
	        // domEvent => @dblclick
	        showAll: function showAll() {
	            this.jsonList = [];
	            this.$emit('fetchData');
	
	            var msg = {
	                action: 'show',
	                data: null
	            };
	            this.$dispatch('AUTOCOMPLETE', msg, this.name);
	
	            this.showList = true;
	        },
	        // domEvent => @blur
	        hideAll: function hideAll(e) {
	            var self = this;
	
	            var msg = {
	                action: 'blur',
	                data: e
	            };
	            this.$dispatch('AUTOCOMPLETE', msg, this.name);
	
	            setTimeout(function () {
	                self.showList = false;
	
	                var msg = {
	                    action: 'hide',
	                    data: null
	                };
	                self.$dispatch('AUTOCOMPLETE', msg, self.name);
	            }, 250);
	        },
	        // domEvent => @focus
	        focus: function focus(e) {
	            this.focusListIndex = 0;
	
	            var msg = {
	                action: 'focus',
	                data: e
	            };
	            this.$dispatch('AUTOCOMPLETE', msg, this.name);
	        },
	        // domEvent => @mousemove
	        mousemove: function mousemove(i) {
	            this.focusListIndex = i;
	        },
	        // domEvent => @keydown
	        keydown: function keydown(e) {
	            var key = e.keyCode;
	
	            // Disable when list isn't showing up
	            if (!this.showList) return;
	
	            switch (key) {
	                case 40:
	                    //down
	                    this.focusListIndex++;
	                    break;
	                case 38:
	                    //up
	                    this.focusListIndex--;
	                    break;
	                case 13:
	                    //enter
	                    this.$emit('selectList', this.jsonList[this.focusListIndex]);
	                    this.showList = false;
	                    break;
	                case 27:
	                    //esc
	                    this.showList = false;
	                    break;
	            }
	
	            // When cursor out of range
	            var listLength = this.jsonList && this.jsonList.length - 1;
	            this.focusListIndex = this.focusListIndex > listLength ? 0 : this.focusListIndex < 0 ? listLength : this.focusListIndex;
	        },
	        // for active in all condition
	        activeClass: function activeClass(i) {
	            return {
	                'focus-list': i === this.focusListIndex
	            };
	        }
	    }, // end of methods
	    events: {
	        selectList: function selectList(data) {
	            var data = this.json(data);
	
	            // Put the selected data to vm(v-model) 
	            this.vm = data[this.anchor];
	            this.showList = false;
	
	            var msg = {
	                action: 'selected',
	                data: data
	            };
	            this.$dispatch('AUTOCOMPLETE', msg, this.name);
	        },
	        fetchData: function fetchData(inputVal) {
	            if (!inputVal) return;
	            var self = this;
	
	            if (this.url != null) {
	                var msg = {
	                    action: 'beforeAjax',
	                    data: inputVal
	                };
	                this.$dispatch('AUTOCOMPLETE', msg, self.name);
	
	                var ajax = new XMLHttpRequest();
	
	                var limit;
	                if (this.$get('limit') !== '') {
	                    this.limit = parseFloat(this.limit);
	                    limit = this.limit !== "" ? '&' + this.limitKey + '=' + this.limit : '';
	                } else {
	                    limit = '';
	                }
	
	                var fullUrl = this.url + '?' + this.param + '=' + inputVal + limit; // baseUrl + 请求参数 + 实时输入值 + limitQuery 
	                ajax.open('GET', fullUrl);
	                ajax.send(null);
	
	                ajax.addEventListener('progress', function (data) {
	                    if (data.lengthComputable) {
	                        var msg = {
	                            action: 'ajaxProgress',
	                            data: data
	                        };
	                        self.$dispatch('AUTOCOMPLETE', msg, self.name);
	                    }
	                });
	
	                ajax.addEventListener('loadend', function (data) {
	                    var json = JSON.parse(this.responseText);
	                    // 有解析器就用，没有就用内置解析器
	                    if (self.dataParser) {
	                        json = self.dataParser(json);
	                    } else {
	                        json = self.getDeepData(json, self.target);
	                    }
	
	                    var msg = {
	                        action: 'ajaxLoaded',
	                        data: json
	                    };
	                    self.$dispatch('AUTOCOMPLETE', msg, this.name);
	                    self.jsonList = json;
	                    if (json == null || json.length < 1) {
	                        self.showNoContentTip = true;
	                    } else {
	                        self.showNoContentTip = false;
	                    }
	                });
	            }
	        }
	    } // end of events
	};
	// </script>
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	'use strict';
	
	var _Autocomplete = __webpack_require__(1);
	
	var _Autocomplete2 = _interopRequireDefault(_Autocomplete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Autocomplete2.default;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map