// main navbar toggler
const mainNavbarToggler = document.querySelector('[data-target]')
const mainNavbarSupportedContent = document.querySelector('#mainNavbarSupportedContent')
const mainNavbarTogglerHandler = (event) => {
  if (mainNavbarToggler.getAttribute('aria-expanded') === 'true') {
    mainNavbarToggler.setAttribute('aria-expanded', "false")
    mainNavbarSupportedContent.classList.remove('expand')
  } else {
    mainNavbarToggler.setAttribute('aria-expanded', "true")
    mainNavbarSupportedContent.classList.add('expand')

  }
}
mainNavbarToggler.addEventListener('click', mainNavbarTogglerHandler)

// colorThemeSwitcher
const colorThemeSwitcher = document.querySelector('#colorThemeSwitcher')
const setColorTheme = (event) => {
  const mainApp = document.querySelector('#main-app')
  const brands = document.querySelectorAll('.brand')

  if (colorThemeSwitcher.getAttribute('theme') === 'light') {
    mainApp.setAttribute('theme', 'dark')
    colorThemeSwitcher.setAttribute('theme', 'dark')
    colorThemeSwitcher.innerHTML = "<i class='icon far fa-sun'></i>"

    brands.forEach(brand => {
      brand.innerHTML = "  <img src = 'src/scss/assets/Logo-dark.png' alt = 'Alphashop logo' />'"
    })
  } else if (colorThemeSwitcher.getAttribute('theme') === 'dark') {
    mainApp.setAttribute('theme', 'light')

    colorThemeSwitcher.setAttribute('theme', 'light')
    colorThemeSwitcher.innerHTML = "<i class='icon far fa-moon'></i>"
    brands.forEach(brand => {
      brand.innerHTML = "  <img src = 'src/scss/assets/Logo.png' alt = 'Alphashop logo' />'"
    })
  }
}

colorThemeSwitcher.addEventListener("click", setColorTheme)

// slide form previous and next button
const nextButton = document.querySelector("#slideFormNext");
const prevButton = document.querySelector("#slideFormPrev");
const nextButtonDesktop = document.querySelector("#slideFormNextDesktop");
const prevButtonDesktop = document.querySelector("#slideFormPrevDesktop");

// controctors
class Slide {
  constructor(slideStart, slideEnd, slideElementId, currentSlideIndex = 0, previousSlideIndex = -1, ) {
    this.slideStart = slideStart
    this.slideEnd = slideEnd
    this.slideElementId = slideElementId
    this.currentSlideIndex = currentSlideIndex
    this.previousSlideIndex = previousSlideIndex
    this.slideIndicatorsElements = [...document.querySelectorAll(`#${slideElementId} > .slide-indicators > button`)]
    this.slideContentElements = [...document.querySelectorAll(`#${slideElementId} > .slide-inner > .slide-item`)]
  }

  //transit indicator step number
  transitToNextIndicator() {
    this.slideIndicatorsElements[this.currentSlideIndex].classList.add("active")
    this.slideIndicatorsElements[this.previousSlideIndex].classList.add("complete")
  }

  transitToPreviousIndicator() {
    this.slideIndicatorsElements[this.previousSlideIndex].classList.remove("active")
    this.slideIndicatorsElements[this.previousSlideIndex - 1].classList.remove("complete")
  }

  //transit to target content information to display in the slide transition
  transitSlide() {
    const currentSlideClasses = this.slideContentElements[this.currentSlideIndex] ? this.slideContentElements[this.currentSlideIndex].classList : false
    console.log(currentSlideClasses)
    const prevSlideClasses = this.slideContentElements[this.previousSlideIndex] ? this.slideContentElements[this.previousSlideIndex].classList : false
    if (!currentSlideClasses) return
    currentSlideClasses.remove("d-none")
    if (!prevSlideClasses) return
    prevSlideClasses.add("d-none")

  }
}

//set previous and next button different visibility in the slide transition
const setButtonVisibility = (slideFormObj) => {
  if (slideFormObj.currentSlideIndex === slideFormObj.slideStart) {
    prevButton.classList.add("d-none")
    nextButton.classList.remove("slide-control-start")
    prevButtonDesktop.classList.add("visually-hidden")
  } else {
    prevButton.classList.remove("d-none")
    nextButton.classList.add("slide-control-start")
    prevButtonDesktop.classList.remove("visually-hidden")
    prevButtonDesktop.classList.add("slide-control-start")
  }
}
//set previous and next button different appearance in the slide transition
const setButtonContent = (slideFormObj) => {
  if (slideFormObj.slideEnd === slideFormObj.currentSlideIndex) {
    nextButton.querySelector("[data-slide='next']").textContent = "確認下單"
    nextButtonDesktop.querySelector("[data-slide='next']").textContent = "確認下單"

  } else {
    nextButton.querySelector("[data-slide='next']").textContent = "下一步"
    nextButtonDesktop.querySelector("[data-slide='next']").textContent = "下一步"

  }
}

const CreateSlideObj = () => {
  const slideFormId = "slideForm"

  return new Slide(0, 2, slideFormId)
}




//slide form button click, addeventlistener handler functions
const slideFormButtonHandlerHelper = () => {

  slideForm.transitSlide()
  setButtonVisibility(slideForm)
  setButtonContent(slideForm)
}

const slideFormButtonNextHandler = e => {
  e.preventDefault()
  const dataSet = e.target.dataset
  slideForm.currentSlideIndex = slideForm.currentSlideIndex === slideForm.slideEnd ? slideForm.slideEnd : slideForm.currentSlideIndex + 1
  slideForm.previousSlideIndex = slideForm.currentSlideIndex - 1
  slideForm.transitToNextIndicator()
  slideFormButtonHandlerHelper()
}

const slideFormButtonPrevHandler = e => {
  e.preventDefault()
  const dataSet = e.target.dataset
  slideForm.currentSlideIndex = slideForm.currentSlideIndex === slideForm.slideStart ? slideForm.slideStart : slideForm.currentSlideIndex - 1
  slideForm.previousSlideIndex = slideForm.currentSlideIndex + 1
  slideForm.transitToPreviousIndicator()
  slideFormButtonHandlerHelper()
}


const slideForm = CreateSlideObj()
nextButton.addEventListener("click", slideFormButtonNextHandler)
prevButton.addEventListener("click", slideFormButtonPrevHandler)
nextButtonDesktop.addEventListener("click", slideFormButtonNextHandler)
prevButtonDesktop.addEventListener("click", slideFormButtonPrevHandler)

console.log(slideForm)

// const formControl = document.querySelector("#form-control");
// const formParts = formControl.querySelectorAll(".part");
// const stepControl = document.querySelector("#stepper-control");
// const steps = stepControl.querySelectorAll(".step");
// const formBtnControl = document.querySelector("#form__button-control");
// const nextBtn = formBtnControl.querySelector(
//   ".form__button-control__button--primary"
// );
// const prevBtn = formBtnControl.querySelector(
//   ".form__button-control__button--outline"
// );

// let step = 0;
// let currentShipmentFee = 0

// const chartGoodsList = document.querySelector('#chart-goods-list')

// //運送方式
// const trMethods = document.querySelector('#tr-methods')
// const allTransportMethods = document.querySelectorAll(
//   'input[name="tr-method"]'
// );

// //data
// const shipments = {
//   'standard': 0,
//   'dhl': 500,
// }
// let currentShipment = {
//   name: 'standard',
// }

// let goodsInChart = [{
//     id: 1,
//     name: "破壞補釘修身牛仔褲",
//     quantityInChart: 1,
//     price: 3999,
//     total: 3999,
//     image: "http://i.imgur.com/RqUqDdu.png",
//   },
//   {
//     id: 2,
//     name: "刷色直筒牛仔褲",
//     quantityInChart: 1,
//     price: 1299,
//     total: 1299,
//     image: "http://i.imgur.com/sBqwY45.png",
//   }
// ]

// //選擇數量
// function onGoodCountClicked({
//   target
// }) {
//   const id = getId(target)
//   updateCount(target)(id)
//   updateTotal(id)
//   generateChartGoods()
//   showSum()
// }

// function showSum() {
//   let sum = 0
//   const goodSum = document.querySelector('#good-sum')
//   goodsInChart.forEach(item => sum += item.total)
//   goodSum.textContent = '$' + (sum + shipments[currentShipment.name])
// }

// function updateTotal(id) {
//   let total = 0
//   goodsInChart.forEach(item => {
//     item.total = item.id === id ? item.quantityInChart * item.price : item.total
//     total = item.total
//   })
//   return total
// }

// function updateCount(target) {
//   return function (id) {
//     let count
//     if (target.matches('.good-minus')) {
//       goodsInChart.forEach(item => {
//         if (item.id === id) {
//           item.quantityInChart = item.quantityInChart > 0 ? item.quantityInChart - 1 : 0
//           count = item.quantityInChart
//         }
//       })

//     } else if (target.matches('.good-plus')) {
//       goodsInChart.forEach(item => {
//         if (item.id === id) {
//           item.quantityInChart = item.quantityInChart < 1000 ? item.quantityInChart + 1 : item.quantityInChart
//           count = item.quantityInChart
//         }
//       })
//     }
//     return count
//   }

// }

// function getId(target) {
//   return Number(target.dataset.id)
// }

// //產生購物籃物品
// function generateChartGoods() {
//   chartGoodsList.innerHTML = ''
//   goodsInChart.forEach(item => {
//     chartGoodsList.innerHTML += `<div class="form__chart__goods-list__item">
//               <img src="${item.image}"
//                 alt=""
//                 class="form__chart__goods-list__item__image">
//                     <div class="form__chart__goods-list__item__content">
//                       <div class="flex-wrapper">
//                         <div class="good-name">
//                           ${item.name}
//                         </div>
//                         <div class="good-count"><span class="good-minus" data-id="${item.id}">-</span> <span>${item.quantityInChart}</span> <span class="good-plus" data-id="${item.id}">+</span></div>
//                       </div>
//                       <div class="good-price">$${item.total}</div>
//                     </div>
//                   </div>`
//   })
// }

// //選擇運送方式
// function getCheckedValueForShipment(targetArr) {
//   let value = 'standard'
//   Array.from(targetArr).forEach((item) => {
//     value = item.checked ? item.value : value;
//     currentShipment.name = value
//     currentShipmentFee = shipments[currentShipment.name]
//   });
// }

// function onTrMethodsClicked(e) {
//   getCheckedValueForShipment(allTransportMethods)
//   showCurrentShipment()
//   showSum()
// }

// function showCurrentShipment() {
//   const shipFee = document.querySelector('#ship-fee')
//   shipFee.textContent = shipments[currentShipment.name] === 0 ? '免費' : `$${shipments[currentShipment.name]}`
// }
// ///選擇運送方式





// function handleformBtnControlClicked(e) {
//   e.preventDefault();
//   const currentStep = steps[step];
//   if (e.target.matches(".form__button-control__button--primary")) {
//     const nextStep = steps[step + 1];
//     if (nextStep) {
//       currentStep.classList.remove("active");
//       currentStep.classList.add("checked");
//       nextStep.classList.add("active");
//       formParts[step].classList.add("d-none");
//       formParts[step + 1].classList.remove("d-none");
//       step += 1;
//     }
//   } else if (e.target.matches(".form__button-control__button--outline")) {
//     const prevStep = steps[step - 1];

//     if (prevStep) {
//       currentStep.classList.remove("active");
//       prevStep.classList.remove("checked");
//       prevStep.classList.add("active");
//       formParts[step].classList.add("d-none");
//       formParts[step - 1].classList.remove("d-none");
//       step -= 1;
//     }
//   }
//   setBtnDisabled();
// }

// function setBtnDisabled() {
//   if (step === 0) {
//     prevBtn.classList.add("d-none");
//     formBtnControl.classList.add("display-one-btn");
//   } else {
//     prevBtn.classList.remove("d-none");
//     formBtnControl.classList.remove("display-one-btn");
//   }
//   if (step === 2) {
//     //     在最後一步將按鈕改成確認下單並移除偽元素
//     nextBtn.innerHTML = "確認下單";
//     nextBtn.classList.add("last-step");
//   } else {
//     nextBtn.innerHTML = "下一步";
//     nextBtn.classList.remove("last-step");
//   }
// }

// formBtnControl.addEventListener("click", handleformBtnControlClicked);



// generateChartGoods()

// //選擇運送方式
// trMethods.addEventListener("click", onTrMethodsClicked)

// //選擇購物籃數量
// chartGoodsList.addEventListener('click', onGoodCountClicked)