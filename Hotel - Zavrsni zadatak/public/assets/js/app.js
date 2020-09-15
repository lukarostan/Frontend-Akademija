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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/src/js/app.js":
/***/ (function(module, exports) {

$(document).ready(function () {
    $(".reviews-slider").css("width", 2 * reviewsSliderSize);
    $(".news-slider").css("width", 2 * newsSliderSize);
});

//Hero Slider

var heroSliderCounter = 1;
var heroSliderItem = $(".hero-slider__item");
var heroSliderSize = $(".hero-slider__item").outerWidth(true);
$(".hero-left-button").on("click", function () {
    $(".hero-slider__item").css("transform", "translateX(" + -heroSliderSize * heroSliderCounter + "px)");
    heroSliderCounter++;
    if (heroSliderCounter > heroSliderItem.length - 1) {
        heroSliderCounter = 0;
    }
});

//News Slider

var newsLeftCounter = 1;
var newsRightCounter = 1;
var newsSliderItem = $(".news-item");
var newsSliderSize = $(".news-item").outerWidth(true);
$(".news-left-button").on("mousedown", function () {
    newsLeftCounter++;
    if (newsLeftCounter >= newsSliderItem.length) {
        newsLeftCounter = 1;
    }
    if (newsRightCounter <= 1) {
        newsLeftCounter = 1;
    }
    $(".news-item").css("transform", "translateX(" + -newsSliderSize * (newsRightCounter - newsLeftCounter) + "px)");
    console.log("left" + newsLeftCounter);
    console.log(newsSliderSize * newsLeftCounter);
});
$(".news-right-button").on("mousedown", function () {
    newsRightCounter++;
    if (newsRightCounter >= newsSliderItem.length) {
        newsRightCounter = 1;
    }
    $(".news-item").css("transform", "translateX(" + newsSliderSize * (newsLeftCounter - newsRightCounter) + "px)");
});

//Reviews Slider

$(".reviews-slider").css("width", 2 * reviewsSliderSize);
var reviewsLeftCounter = 1;
var reviewsRightCounter = 1;
var reviewsSliderItem = $(".news-item");
var reviewsSliderSize = $(".news-item").outerWidth(true);
$(".reviews-left-button").on("mousedown", function () {
    reviewsLeftCounter++;
    if (reviewsLeftCounter >= reviewsSliderItem.length) {
        reviewsLeftCounter = 1;
    }
    if (reviewsRightCounter <= 1) {
        reviewsLeftCounter = 1;
    }
    $(".reviews-item").css("transform", "translateX(" + -reviewsSliderSize * (reviewsRightCounter - reviewsLeftCounter) + "px)");
});
$(".reviews-right-button").on("mousedown", function () {
    reviewsRightCounter++;
    if (reviewsRightCounter >= reviewsSliderItem.length) {
        reviewsRightCounter = 1;
    }
    $(".reviews-item").css("transform", "translateX(" + reviewsSliderSize * (reviewsLeftCounter - reviewsRightCounter) + "px)");
});

//Image Slider
var imageSliderItem = $(".image-slider img");
var imageSliderCounter = 0;
$(imageSliderItem[imageSliderCounter]).css("outline", "3px solid #9B6333");

$(".image-left-button").on("mousedown", function () {
    if (imageSliderCounter > 0) {
        imageSliderCounter--;
    }
});
$(".image-right-button").on("mousedown", function () {
    if (imageSliderCounter < imageSliderItem.length - 1) {
        imageSliderCounter++;
    }
});

$(".image-slider-container .nav-arrow").on("mousedown", function () {
    $(imageSliderItem).css("outline", "none");
    $(imageSliderItem[imageSliderCounter]).css("outline", "3px solid #9B6333");
    $(".big-picture").attr('src', $(imageSliderItem[imageSliderCounter]).attr('src'));
});

//Datepicker
$(function () {
    $(".from-date-container input").datepicker({ dateFormat: "yy-mm-dd",
        firstDay: 1,
        minDate: new Date(2020, 11, 9),
        maxDate: new Date(2020, 20, 9)
    });
    $(".to-date-container input").datepicker({
        dateFormat: "yy-mm-dd",
        firstDay: 1
    });
});

/***/ }),

/***/ "./resources/assets/src/sass/main.sass":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/src/js/app.js");
module.exports = __webpack_require__("./resources/assets/src/sass/main.sass");


/***/ })

/******/ });