(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["domElementTypes"] = factory(require("lodash"));
	else
		root["domElementTypes"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkScrollable = exports.checkScrollable = function checkScrollable(element) {
  var computedStyle = getComputedStyle(element);
  var canScrollNow = element.scrollHeight > element.clientHeight && (computedStyle.overflowY === 'auto' || computedStyle.overflowY === 'scroll');
  return canScrollNow;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementTypes = exports.textInputs = exports.datePickers = undefined;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datePickers = exports.datePickers = {
  date: 'input[type=date]',
  time: 'input[type=time]',
  datetime: 'input[type=datetime]',
  datetimeLocal: 'input[type=datetime-local]',
  month: 'input[type=month]',
  week: 'input[type=week]'
};

var textInputs = exports.textInputs = {
  datalist: 'datalist',
  listbox: '[role=listbox]',
  number: 'input[type=number]',
  numberSpinButton: '[role=spinbutton]',
  emailInput: 'input[type=email]',
  textBox: '[role=textbox]',
  seachBox: '[role=searchbox]',
  comboBox: '[role=combobox]',
  password: 'input[type=password]',
  search: 'input[type=search]',
  tel: 'input[type=tel]',
  text: 'input[type=text]',
  url: 'input[type=url]',
  textarea: 'textarea',
  contentEditable: '[contentEditable]'
};

var elementTypes = exports.elementTypes = {
  audio: ['audio'],
  button: ['button', 'input[type=button]', 'input[type=reset]', 'input[type=submit]', '[role=button]', '[role=menuitem]', '[role=option]'],
  checkbox: ['input[type=checkbox]', '[role=checkbox]', '[role=menuitemcheckbox]'],
  color: ['input[type=color]'],
  datePicker: _lodash2.default.values(datePickers),
  file: ['input[type=file]'],
  image: ['img'],
  link: ['a', '[role=link]'],
  media: ['audio', 'video'],
  range: ['input[type=range]', '[role=slider]'],
  radio: ['input[type=radio]', '[role=radio]', '[role=menuitemradio]'],
  select: ['select', 'keygen', '[role=listbox]'],
  text: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'dl', 'dt', 'li', 'dd', 'table', 'code', 'pre', 'blockquote', 'span'],
  textInput: _lodash2.default.values(textInputs),
  video: ['video'],
  hasOnClickAttr: ['[onclick]']
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkElementVisibility = checkElementVisibility;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isRectInViewport(rect) {
  return _lodash2.default.every([rect.bottom > 0, rect.right > 0, rect.left < (window.innerWidth || document.documentElement.clientWidth), rect.top < (window.innerHeight || document.documentElement.clientHeight)]);
}

function isElementAriaDisabled(el) {
  return !!el.getAttribute('aria-disabled') || !!el.getAttribute('aria-hidden');
}

function checkElementVisibility(el) {
  var elRect = el.getBoundingClientRect();
  if (!isRectInViewport(elRect) || isElementAriaDisabled(el)) {
    return false;
  }

  var elStyle = window.getComputedStyle(el);
  if (+elStyle.opacity === 0 || elStyle.visibility === 'hidden') {
    return false;
  }

  return {
    el: el,
    rect: elRect,
    style: elStyle
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScrollable = isScrollable;
exports.isImage = isImage;
exports.isLink = isLink;
exports.isText = isText;
exports.isTextInput = isTextInput;
exports.isMultilineTextInput = isMultilineTextInput;
exports.isColorInput = isColorInput;
exports.isSelect = isSelect;
exports.isMedia = isMedia;
exports.isRange = isRange;
exports.isAnyTypeOfDatePicker = isAnyTypeOfDatePicker;
exports.isDatePicker = isDatePicker;
exports.isDatetimePicker = isDatetimePicker;
exports.isMonthPicker = isMonthPicker;
exports.isTimePicker = isTimePicker;
exports.isWeekPicker = isWeekPicker;
exports.isVisible = isVisible;
exports.getVisibleElementsInViewPort = getVisibleElementsInViewPort;
exports.getVisibleElementsInViewPortExpandedData = getVisibleElementsInViewPortExpandedData;
exports.getAllElementTypes = getAllElementTypes;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _elementTypes = __webpack_require__(2);

var _elementVisibility = __webpack_require__(3);

var _elementScrollable = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(selectors, el) {
  return _lodash2.default.some(selectors, function (selector) {
    return el.matches(selector);
  });
}

function isScrollable(el) {
  return (0, _elementScrollable.checkScrollable)(el);
}

function isImage(el) {
  return is(_elementTypes.elementTypes.image, el);
}

function isLink(el) {
  return is(_elementTypes.elementTypes.link, el);
}

function isText(el) {
  return is(_elementTypes.elementTypes.text, el);
}

function isTextInput(el) {
  return is(_elementTypes.elementTypes.textInput, el);
}

function isMultilineTextInput(el) {
  return el.matches(_elementTypes.textInputs.textarea);
}

function isColorInput(el) {
  return is(_elementTypes.elementTypes.color, el);
}

function isSelect(el) {
  return is(_elementTypes.elementTypes.select, el);
}

function isMedia(el) {
  return is(_elementTypes.elementTypes.media, el);
}

function isRange(el) {
  return is(_elementTypes.elementTypes.range, el);
}

function isAnyTypeOfDatePicker(el) {
  return is(_elementTypes.elementTypes.datePicker, el);
}

function isDatePicker(el) {
  return el.matches(_elementTypes.datePickers.date);
}

function isDatetimePicker(el) {
  return el.matches([_elementTypes.datePickers.datetime, _elementTypes.datePickers.datetimeLocal]);
}

function isMonthPicker(el) {
  return el.matches(_elementTypes.datePickers.month);
}

function isTimePicker(el) {
  return el.matches(_elementTypes.datePickers.time);
}

function isWeekPicker(el) {
  return el.matches(_elementTypes.datePickers.week);
}

function isVisible(el) {
  return !!(0, _elementVisibility.checkElementVisibility)(el);
}

function getVisibleElementsInViewPort() {
  var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  return _lodash2.default.filter(document.querySelectorAll(selectors), isVisible);
}

function getVisibleElementsInViewPortExpandedData() {
  var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  return _lodash2.default.compact(_lodash2.default.map(document.querySelectorAll(selectors), _elementVisibility.checkElementVisibility));
}

function getAllElementTypes() {
  return _elementTypes.elementTypes;
}

/***/ })
/******/ ]);
});