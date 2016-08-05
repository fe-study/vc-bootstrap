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
	exports.vcPagination = exports.vcHello = undefined;
	
	var _helloworld = __webpack_require__(2);
	
	var _helloworld2 = _interopRequireDefault(_helloworld);
	
	var _vcPaginationBs = __webpack_require__(5);
	
	var _vcPaginationBs2 = _interopRequireDefault(_vcPaginationBs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.vcHello = _helloworld2.default;
	exports.vcPagination = _vcPaginationBs2.default;

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
		exports.vcPagination = undefined;
		
		var _pagination = __webpack_require__(2);
		
		var _pagination2 = _interopRequireDefault(_pagination);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.vcPagination = _pagination2.default;
	
	/***/ },
	/* 1 */,
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(3)
		module.exports = __webpack_require__(7)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(8)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pagination.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pagination.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-2c0891ea&file=pagination.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pagination.vue"], function () {
		var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./pagination.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-2c0891ea&file=pagination.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./pagination.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(4);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(6)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2c0891ea&file=pagination.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2c0891ea&file=pagination.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
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
		exports.push([module.id, ".smaller[_v-2c0891ea] {\n  font-size: 12px;\n}\n.p-msg[_v-2c0891ea] {\n  height: 50px;\n  line-height: 30px;\n}\n.totalPageNum[_v-2c0891ea] {\n  display: inline-block;\n  margin: 20px 0;\n  vertical-align: top;\n}\n.component-standard-pagination[_v-2c0891ea] {\n  overflow: hidden;\n}\n.component-standard-pagination .pagination[_v-2c0891ea] {\n  float: right !important;\n}\n", ""]);
		
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
	/***/ function(module, exports, __webpack_require__) {
	
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
	/* 7 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		// <template>
		//   <div class="component-standard-pagination" v-show="totalPage>1">
		
		//     <nav class="">
		//       <ul class="pagination">
		//         <li>
		//           <a :class="{'disabled': currentPage == 1}" class="btn" href="javascript:void(0);" aria-label="First" @click='onChangePage("first")' >
		//             &laquo;{{firstPageText}}
		//           </a>
		//         </li>
		//         <li>
		//           <a :class="{'disabled': currentPage == 1}" class="btn" href="javascript:void(0);" aria-label="Previous" @click="onChangePage('previous')" >
		//             &lt;{{previousPageText}}
		//           </a>
		//         </li>
		//         <li v-if="isMoreIcon&&paginationData[0]>1">
		//           <span>...</span>
		//         </li>
		//         <template v-for="index in paginationData">
		//           <li :class="{'active': currentPage == index}">
		//             <a  class="btn" href="javascript:void(0);" v-html='index' @click="onChangePage(index)" ></a></li>        
		//         </template>
		//         <li v-if="isMoreIcon&&paginationData[paginationPage-1]<totalPage">
		//           <span>...</span>
		//         </li>
		//         <li>
		//           <a :class="{'disabled': currentPage == totalPage}" class="btn" href="javascript:void(0);" aria-label="Next" @click="onChangePage('next')" >
		//             {{nextPageText}}&gt;
		//           </a>
		//         </li>
		//         <li>
		//           <a :class="{'disabled': currentPage == totalPage}" class="button" href="javascript:void(0);" aria-label="Last" @click="onChangePage('last')" >
		//             {{lastPageText}}&raquo;
		//           </a>
		//         </li>
		//       </ul>
		//     </nav>
		//   </div>
		// </template>
		
		// <script>
		exports.default = {
		  data: function data() {
		    return {
		      currentPage: 1
		    };
		  },
		
		  props: {
		    total: {
		      type: Number,
		      default: function _default() {
		        return 0;
		      }
		    },
		    perPage: {
		      type: Number,
		      default: function _default() {
		        return 10;
		      }
		    },
		    onPerPageChange: {
		      type: Function
		    },
		    paginationPage: { //分页脚标默认数目
		      type: Number,
		      default: function _default() {
		        return 5;
		      }
		    },
		    isShowPageSize: {
		      type: Boolean,
		      default: function _default() {
		        return false;
		      }
		    },
		    isMoreIcon: {
		      type: Boolean,
		      default: function _default() {
		        return true;
		      }
		    },
		    onPageChange: {
		      type: Function
		    },
		    firstPageText: {
		      type: String,
		      default: function _default() {
		        return '首页';
		      }
		    },
		    previousPageText: {
		      type: String,
		      default: function _default() {
		        return '前一页';
		      }
		    },
		    nextPageText: {
		      type: String,
		      default: function _default() {
		        return '下一页';
		      }
		    },
		    lastPageText: {
		      type: String,
		      default: function _default() {
		        return '末页';
		      }
		    }
		  },
		  components: {},
		  watch: {
		    currentPage: function currentPage(val) {
		      //onChangePage callback
		      this.onPageChange(val);
		    },
		    perPage: function perPage() {
		      this.currentPage = 1;
		    }
		  },
		  computed: {
		    totalPage: function totalPage() {
		      return Math.ceil(this.total / this.perPage);
		    },
		    firstNum: function firstNum() {
		      return (this.currentPage - 1) * this.perPage + 1;
		    },
		    lastNum: function lastNum() {
		
		      return this.currentPage * this.perPage > this.total ? this.total : this.currentPage * this.perPage;
		    },
		    paginationData: function paginationData() {
		      var pageArray = [];
		      if (this.totalPage <= this.paginationPage) {
		        for (var index = 1; index <= this.totalPage; index++) {
		          pageArray.push(index);
		        }
		      } else if (this.totalPage > this.paginationPage) {
		        var firstPageNum = this.currentPage > parseInt(this.paginationPage / 2) ? this.currentPage - parseInt(this.paginationPage / 2) : 1;
		
		        if (this.currentPage + this.paginationPage > this.totalPage + 1) {
		          firstPageNum = this.totalPage - this.paginationPage + 1;
		        }
		        for (var _index = firstPageNum; _index < firstPageNum + this.paginationPage; _index++) {
		          pageArray.push(_index);
		        }
		      }
		      return pageArray;
		    }
		  },
		  methods: {
		    onChangePage: function onChangePage(page) {
		      if (page == 'first') {
		        this.currentPage = 1;
		      } else if (page == 'previous') {
		        if (this.currentPage != 1) {
		          this.currentPage--;
		        }
		      } else if (page == 'next') {
		        if (this.currentPage != this.totalPage) {
		          this.currentPage++;
		        }
		      } else if (page == 'last') {
		        this.currentPage = this.totalPage;
		      } else if (!isNaN(Number(page))) {
		        this.currentPage = page;
		      } else {
		        console.log('there are something wrong in onChangePage method.');
		      }
		    }
		  }
		};
		// </script>
		
		// <!-- Add "scoped" attribute to limit CSS to this component only -->
		// <style scoped>
		//   .smaller{
		//     font-size: 12px;
		//   }
		//   .p-msg{
		//     height: 50px;
		//     line-height: 30px;
		//   }
		//   .totalPageNum{
		//     display: inline-block;
		//     margin: 20px 0;
		//     vertical-align: top;
		//   }
		//   .component-standard-pagination{
		//     overflow: hidden;
		//   }
		//   .component-standard-pagination .pagination{
		//     float: right !important;
		//   }
		// </style>
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"component-standard-pagination\" v-show=\"totalPage>1\" _v-2c0891ea=\"\">\n    \n    <nav class=\"\" _v-2c0891ea=\"\">\n      <ul class=\"pagination\" _v-2c0891ea=\"\">\n        <li _v-2c0891ea=\"\">\n          <a :class=\"{'disabled': currentPage == 1}\" class=\"btn\" href=\"javascript:void(0);\" aria-label=\"First\" @click=\"onChangePage(&quot;first&quot;)\" _v-2c0891ea=\"\">\n            «{{firstPageText}}\n          </a>\n        </li>\n        <li _v-2c0891ea=\"\">\n          <a :class=\"{'disabled': currentPage == 1}\" class=\"btn\" href=\"javascript:void(0);\" aria-label=\"Previous\" @click=\"onChangePage('previous')\" _v-2c0891ea=\"\">\n            &lt;{{previousPageText}}\n          </a>\n        </li>\n        <li v-if=\"isMoreIcon&amp;&amp;paginationData[0]>1\" _v-2c0891ea=\"\">\n          <span _v-2c0891ea=\"\">...</span>\n        </li>\n        <template v-for=\"index in paginationData\" _v-2c0891ea=\"\">\n          <li :class=\"{'active': currentPage == index}\" _v-2c0891ea=\"\">\n            <a class=\"btn\" href=\"javascript:void(0);\" v-html=\"index\" @click=\"onChangePage(index)\" _v-2c0891ea=\"\"></a></li>        \n        </template>\n        <li v-if=\"isMoreIcon&amp;&amp;paginationData[paginationPage-1]<totalPage\" _v-2c0891ea=\"\">\n          <span _v-2c0891ea=\"\">...</span>\n        </li>\n        <li _v-2c0891ea=\"\">\n          <a :class=\"{'disabled': currentPage == totalPage}\" class=\"btn\" href=\"javascript:void(0);\" aria-label=\"Next\" @click=\"onChangePage('next')\" _v-2c0891ea=\"\">\n            {{nextPageText}}&gt;\n          </a>\n        </li>\n        <li _v-2c0891ea=\"\">\n          <a :class=\"{'disabled': currentPage == totalPage}\" class=\"button\" href=\"javascript:void(0);\" aria-label=\"Last\" @click=\"onChangePage('last')\" _v-2c0891ea=\"\">\n            {{lastPageText}}»\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>";
	
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