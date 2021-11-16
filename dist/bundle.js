/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_test/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("// main navbar toggler\r\nconst mainNavbarToggler = document.querySelector('[data-target]')\r\nconst mainNavbarSupportedContent = document.querySelector('#mainNavbarSupportedContent')\r\nconst mainNavbarTogglerHandler = (event) => {\r\n  if (mainNavbarToggler.getAttribute('aria-expanded') === 'true') {\r\n    mainNavbarToggler.setAttribute('aria-expanded', \"false\")\r\n    mainNavbarSupportedContent.classList.remove('expand')\r\n  } else {\r\n    mainNavbarToggler.setAttribute('aria-expanded', \"true\")\r\n    mainNavbarSupportedContent.classList.add('expand')\r\n\r\n  }\r\n}\r\nmainNavbarToggler.addEventListener('click', mainNavbarTogglerHandler)\r\n\r\n// colorThemeSwitcher\r\nconst colorThemeSwitcher = document.querySelector('#colorThemeSwitcher')\r\nconst setColorTheme = (event) => {\r\n  const mainApp = document.querySelector('#main-app')\r\n  const brands = document.querySelectorAll('.brand')\r\n\r\n  if (colorThemeSwitcher.getAttribute('theme') === 'light') {\r\n    mainApp.setAttribute('theme', 'dark')\r\n    colorThemeSwitcher.setAttribute('theme', 'dark')\r\n    colorThemeSwitcher.innerHTML = \"<i class='icon far fa-sun'></i>\"\r\n\r\n    brands.forEach(brand => {\r\n      brand.innerHTML = \"  <img src = 'src/scss/assets/Logo-dark.png' alt = 'Alphashop logo' />'\"\r\n    })\r\n  } else if (colorThemeSwitcher.getAttribute('theme') === 'dark') {\r\n    mainApp.setAttribute('theme', 'light')\r\n\r\n    colorThemeSwitcher.setAttribute('theme', 'light')\r\n    colorThemeSwitcher.innerHTML = \"<i class='icon far fa-moon'></i>\"\r\n    brands.forEach(brand => {\r\n      brand.innerHTML = \"  <img src = 'src/scss/assets/Logo.png' alt = 'Alphashop logo' />'\"\r\n    })\r\n  }\r\n}\r\n\r\ncolorThemeSwitcher.addEventListener(\"click\", setColorTheme)\r\n\r\n// slide form previous and next button\r\nconst nextButton = document.querySelector(\"#slideFormNext\");\r\nconst prevButton = document.querySelector(\"#slideFormPrev\");\r\nconst nextButtonDesktop = document.querySelector(\"#slideFormNextDesktop\");\r\nconst prevButtonDesktop = document.querySelector(\"#slideFormPrevDesktop\");\r\n\r\n// controctors\r\nclass Slide {\r\n  constructor(slideStart, slideEnd, slideElementId, currentSlideIndex = 0, previousSlideIndex = -1, ) {\r\n    this.slideStart = slideStart\r\n    this.slideEnd = slideEnd\r\n    this.slideElementId = slideElementId\r\n    this.currentSlideIndex = currentSlideIndex\r\n    this.previousSlideIndex = previousSlideIndex\r\n    this.slideIndicatorsElements = [...document.querySelectorAll(`#${slideElementId} > .slide-indicators > button`)]\r\n    this.slideContentElements = [...document.querySelectorAll(`#${slideElementId} > .slide-inner > .slide-item`)]\r\n  }\r\n\r\n  //transit indicator step number\r\n  transitToNextIndicator() {\r\n    this.slideIndicatorsElements[this.currentSlideIndex].classList.add(\"active\")\r\n    this.slideIndicatorsElements[this.previousSlideIndex].classList.add(\"complete\")\r\n  }\r\n\r\n  transitToPreviousIndicator() {\r\n    this.slideIndicatorsElements[this.previousSlideIndex].classList.remove(\"active\")\r\n    this.slideIndicatorsElements[this.previousSlideIndex - 1].classList.remove(\"complete\")\r\n  }\r\n\r\n  //transit to target content information to display in the slide transition\r\n  transitSlide() {\r\n    const currentSlideClasses = this.slideContentElements[this.currentSlideIndex] ? this.slideContentElements[this.currentSlideIndex].classList : false\r\n    console.log(currentSlideClasses)\r\n    const prevSlideClasses = this.slideContentElements[this.previousSlideIndex] ? this.slideContentElements[this.previousSlideIndex].classList : false\r\n    if (!currentSlideClasses) return\r\n    currentSlideClasses.remove(\"d-none\")\r\n    if (!prevSlideClasses) return\r\n    prevSlideClasses.add(\"d-none\")\r\n\r\n  }\r\n}\r\n\r\n//set previous and next button different visibility in the slide transition\r\nconst setButtonVisibility = (slideFormObj) => {\r\n  if (slideFormObj.currentSlideIndex === slideFormObj.slideStart) {\r\n    prevButton.classList.add(\"d-none\")\r\n    nextButton.classList.remove(\"slide-control-start\")\r\n    prevButtonDesktop.classList.add(\"visually-hidden\")\r\n  } else {\r\n    prevButton.classList.remove(\"d-none\")\r\n    nextButton.classList.add(\"slide-control-start\")\r\n    prevButtonDesktop.classList.remove(\"visually-hidden\")\r\n    prevButtonDesktop.classList.add(\"slide-control-start\")\r\n  }\r\n}\r\n//set previous and next button different appearance in the slide transition\r\nconst setButtonContent = (slideFormObj) => {\r\n  if (slideFormObj.slideEnd === slideFormObj.currentSlideIndex) {\r\n    nextButton.querySelector(\"[data-slide='next']\").textContent = \"確認下單\"\r\n    nextButtonDesktop.querySelector(\"[data-slide='next']\").textContent = \"確認下單\"\r\n\r\n  } else {\r\n    nextButton.querySelector(\"[data-slide='next']\").textContent = \"下一步\"\r\n    nextButtonDesktop.querySelector(\"[data-slide='next']\").textContent = \"下一步\"\r\n\r\n  }\r\n}\r\n\r\nconst CreateSlideObj = () => {\r\n  const slideFormId = \"slideForm\"\r\n\r\n  return new Slide(0, 2, slideFormId)\r\n}\r\n\r\n\r\n\r\n\r\n//slide form button click, addeventlistener handler functions\r\nconst slideFormButtonHandlerHelper = () => {\r\n\r\n  slideForm.transitSlide()\r\n  setButtonVisibility(slideForm)\r\n  setButtonContent(slideForm)\r\n}\r\n\r\nconst slideFormButtonNextHandler = e => {\r\n  e.preventDefault()\r\n  const dataSet = e.target.dataset\r\n  slideForm.currentSlideIndex = slideForm.currentSlideIndex === slideForm.slideEnd ? slideForm.slideEnd : slideForm.currentSlideIndex + 1\r\n  slideForm.previousSlideIndex = slideForm.currentSlideIndex - 1\r\n  slideForm.transitToNextIndicator()\r\n  slideFormButtonHandlerHelper()\r\n}\r\n\r\nconst slideFormButtonPrevHandler = e => {\r\n  e.preventDefault()\r\n  const dataSet = e.target.dataset\r\n  slideForm.currentSlideIndex = slideForm.currentSlideIndex === slideForm.slideStart ? slideForm.slideStart : slideForm.currentSlideIndex - 1\r\n  slideForm.previousSlideIndex = slideForm.currentSlideIndex + 1\r\n  slideForm.transitToPreviousIndicator()\r\n  slideFormButtonHandlerHelper()\r\n}\r\n\r\n\r\nconst slideForm = CreateSlideObj()\r\nnextButton.addEventListener(\"click\", slideFormButtonNextHandler)\r\nprevButton.addEventListener(\"click\", slideFormButtonPrevHandler)\r\nnextButtonDesktop.addEventListener(\"click\", slideFormButtonNextHandler)\r\nprevButtonDesktop.addEventListener(\"click\", slideFormButtonPrevHandler)\r\n\r\nconsole.log(slideForm)\r\n\r\n// const formControl = document.querySelector(\"#form-control\");\r\n// const formParts = formControl.querySelectorAll(\".part\");\r\n// const stepControl = document.querySelector(\"#stepper-control\");\r\n// const steps = stepControl.querySelectorAll(\".step\");\r\n// const formBtnControl = document.querySelector(\"#form__button-control\");\r\n// const nextBtn = formBtnControl.querySelector(\r\n//   \".form__button-control__button--primary\"\r\n// );\r\n// const prevBtn = formBtnControl.querySelector(\r\n//   \".form__button-control__button--outline\"\r\n// );\r\n\r\n// let step = 0;\r\n// let currentShipmentFee = 0\r\n\r\n// const chartGoodsList = document.querySelector('#chart-goods-list')\r\n\r\n// //運送方式\r\n// const trMethods = document.querySelector('#tr-methods')\r\n// const allTransportMethods = document.querySelectorAll(\r\n//   'input[name=\"tr-method\"]'\r\n// );\r\n\r\n// //data\r\n// const shipments = {\r\n//   'standard': 0,\r\n//   'dhl': 500,\r\n// }\r\n// let currentShipment = {\r\n//   name: 'standard',\r\n// }\r\n\r\n// let goodsInChart = [{\r\n//     id: 1,\r\n//     name: \"破壞補釘修身牛仔褲\",\r\n//     quantityInChart: 1,\r\n//     price: 3999,\r\n//     total: 3999,\r\n//     image: \"http://i.imgur.com/RqUqDdu.png\",\r\n//   },\r\n//   {\r\n//     id: 2,\r\n//     name: \"刷色直筒牛仔褲\",\r\n//     quantityInChart: 1,\r\n//     price: 1299,\r\n//     total: 1299,\r\n//     image: \"http://i.imgur.com/sBqwY45.png\",\r\n//   }\r\n// ]\r\n\r\n// //選擇數量\r\n// function onGoodCountClicked({\r\n//   target\r\n// }) {\r\n//   const id = getId(target)\r\n//   updateCount(target)(id)\r\n//   updateTotal(id)\r\n//   generateChartGoods()\r\n//   showSum()\r\n// }\r\n\r\n// function showSum() {\r\n//   let sum = 0\r\n//   const goodSum = document.querySelector('#good-sum')\r\n//   goodsInChart.forEach(item => sum += item.total)\r\n//   goodSum.textContent = '$' + (sum + shipments[currentShipment.name])\r\n// }\r\n\r\n// function updateTotal(id) {\r\n//   let total = 0\r\n//   goodsInChart.forEach(item => {\r\n//     item.total = item.id === id ? item.quantityInChart * item.price : item.total\r\n//     total = item.total\r\n//   })\r\n//   return total\r\n// }\r\n\r\n// function updateCount(target) {\r\n//   return function (id) {\r\n//     let count\r\n//     if (target.matches('.good-minus')) {\r\n//       goodsInChart.forEach(item => {\r\n//         if (item.id === id) {\r\n//           item.quantityInChart = item.quantityInChart > 0 ? item.quantityInChart - 1 : 0\r\n//           count = item.quantityInChart\r\n//         }\r\n//       })\r\n\r\n//     } else if (target.matches('.good-plus')) {\r\n//       goodsInChart.forEach(item => {\r\n//         if (item.id === id) {\r\n//           item.quantityInChart = item.quantityInChart < 1000 ? item.quantityInChart + 1 : item.quantityInChart\r\n//           count = item.quantityInChart\r\n//         }\r\n//       })\r\n//     }\r\n//     return count\r\n//   }\r\n\r\n// }\r\n\r\n// function getId(target) {\r\n//   return Number(target.dataset.id)\r\n// }\r\n\r\n// //產生購物籃物品\r\n// function generateChartGoods() {\r\n//   chartGoodsList.innerHTML = ''\r\n//   goodsInChart.forEach(item => {\r\n//     chartGoodsList.innerHTML += `<div class=\"form__chart__goods-list__item\">\r\n//               <img src=\"${item.image}\"\r\n//                 alt=\"\"\r\n//                 class=\"form__chart__goods-list__item__image\">\r\n//                     <div class=\"form__chart__goods-list__item__content\">\r\n//                       <div class=\"flex-wrapper\">\r\n//                         <div class=\"good-name\">\r\n//                           ${item.name}\r\n//                         </div>\r\n//                         <div class=\"good-count\"><span class=\"good-minus\" data-id=\"${item.id}\">-</span> <span>${item.quantityInChart}</span> <span class=\"good-plus\" data-id=\"${item.id}\">+</span></div>\r\n//                       </div>\r\n//                       <div class=\"good-price\">$${item.total}</div>\r\n//                     </div>\r\n//                   </div>`\r\n//   })\r\n// }\r\n\r\n// //選擇運送方式\r\n// function getCheckedValueForShipment(targetArr) {\r\n//   let value = 'standard'\r\n//   Array.from(targetArr).forEach((item) => {\r\n//     value = item.checked ? item.value : value;\r\n//     currentShipment.name = value\r\n//     currentShipmentFee = shipments[currentShipment.name]\r\n//   });\r\n// }\r\n\r\n// function onTrMethodsClicked(e) {\r\n//   getCheckedValueForShipment(allTransportMethods)\r\n//   showCurrentShipment()\r\n//   showSum()\r\n// }\r\n\r\n// function showCurrentShipment() {\r\n//   const shipFee = document.querySelector('#ship-fee')\r\n//   shipFee.textContent = shipments[currentShipment.name] === 0 ? '免費' : `$${shipments[currentShipment.name]}`\r\n// }\r\n// ///選擇運送方式\r\n\r\n\r\n\r\n\r\n\r\n// function handleformBtnControlClicked(e) {\r\n//   e.preventDefault();\r\n//   const currentStep = steps[step];\r\n//   if (e.target.matches(\".form__button-control__button--primary\")) {\r\n//     const nextStep = steps[step + 1];\r\n//     if (nextStep) {\r\n//       currentStep.classList.remove(\"active\");\r\n//       currentStep.classList.add(\"checked\");\r\n//       nextStep.classList.add(\"active\");\r\n//       formParts[step].classList.add(\"d-none\");\r\n//       formParts[step + 1].classList.remove(\"d-none\");\r\n//       step += 1;\r\n//     }\r\n//   } else if (e.target.matches(\".form__button-control__button--outline\")) {\r\n//     const prevStep = steps[step - 1];\r\n\r\n//     if (prevStep) {\r\n//       currentStep.classList.remove(\"active\");\r\n//       prevStep.classList.remove(\"checked\");\r\n//       prevStep.classList.add(\"active\");\r\n//       formParts[step].classList.add(\"d-none\");\r\n//       formParts[step - 1].classList.remove(\"d-none\");\r\n//       step -= 1;\r\n//     }\r\n//   }\r\n//   setBtnDisabled();\r\n// }\r\n\r\n// function setBtnDisabled() {\r\n//   if (step === 0) {\r\n//     prevBtn.classList.add(\"d-none\");\r\n//     formBtnControl.classList.add(\"display-one-btn\");\r\n//   } else {\r\n//     prevBtn.classList.remove(\"d-none\");\r\n//     formBtnControl.classList.remove(\"display-one-btn\");\r\n//   }\r\n//   if (step === 2) {\r\n//     //     在最後一步將按鈕改成確認下單並移除偽元素\r\n//     nextBtn.innerHTML = \"確認下單\";\r\n//     nextBtn.classList.add(\"last-step\");\r\n//   } else {\r\n//     nextBtn.innerHTML = \"下一步\";\r\n//     nextBtn.classList.remove(\"last-step\");\r\n//   }\r\n// }\r\n\r\n// formBtnControl.addEventListener(\"click\", handleformBtnControlClicked);\r\n\r\n\r\n\r\n// generateChartGoods()\r\n\r\n// //選擇運送方式\r\n// trMethods.addEventListener(\"click\", onTrMethodsClicked)\r\n\r\n// //選擇購物籃數量\r\n// chartGoodsList.addEventListener('click', onGoodCountClicked)\n\n//# sourceURL=webpack://webpack_test/./src/js/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_index__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconsole.log('JS Loaded')\n\n//# sourceURL=webpack://webpack_test/./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;