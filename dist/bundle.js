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

/***/ "./assets/scripts/index.js":
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
/***/ (() => {

eval("var rellax = new Rellax('.rellax');\r\n\r\nvar rellax = new Rellax('.rellax', {\r\n  wrapper:'.custom-element'\r\n});\r\n\r\n//________________Защита от двойного клика кнопки сабмита формы (от отправки двух писем)_____________________\r\n\r\n\r\ndocument.querySelector(\".form\").addEventListener('submit', function(e) {\r\n  // Prevent form submission\r\n  e.preventDefault();\r\n\r\n  // Disable the submit button\r\n  var submitBtn = document.querySelector(\".registration__button\");\r\n  submitBtn.disabled = true;\r\n\r\n  // Submit the form manually\r\n  this.submit();\r\n\r\n  // Re-enable the submit button after 3 seconds\r\n  setTimeout(function() {\r\n      submitBtn.disabled = false;\r\n  }, 3000);\r\n});\r\n\r\n// _______________slider HELP______________________\r\n\r\nconst swiper = new Swiper(\".swiper\", {\r\n  grabCursor: true,\r\n  touchRatio: 2,\r\n  slideToClickedSlide: true,\r\n  keyboard: {\r\n    enabled: true,\r\n    onlyInViewport: true,\r\n    pageUpDown: true,\r\n  },\r\n  // slidesPerView: 1, // - по умолчанию значение 1\r\n  slidesPerView: 3,\r\n  // breakpoints: {\r\n  //   320: {\r\n  //     slidesPerView: 1,\r\n  //   },\r\n  //   480: {\r\n  //     slidesPerView: 2,\r\n  //   },\r\n  //   992: {\r\n  //     slidesPerView: 3,\r\n  //   },\r\n  // },\r\n  loop: true,\r\n  loopedSlides: 3,\r\n  watchOverflow: true,\r\n  spaceBetween: 37,\r\n  slidesPerGroup: 2,\r\n  // centeredSlides: true,\r\n  initialSlide: 0,\r\n  freeMode: true,\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  // autoplay: {\r\n  //   delay: 5000,\r\n  //   disableOnInteraction: true,\r\n  // },\r\n  speed: 1200,\r\n});\r\n\r\nwindow.addEventListener(\"scroll\", function () {\r\n  const header = document.querySelector(\".header\");\r\n  const headerContainer = document.querySelector(\".header__container\");\r\n  header.classList.toggle(\"scrolled\", window.scrollY > 0);\r\n  headerContainer.classList.toggle(\r\n    \"scrolledHeaderContainer\",\r\n    window.scrollY > 0\r\n  );\r\n});\r\n\r\n//_____________________Education PIC-ZOOM__________________\r\n\r\ndocument.querySelectorAll('.education__pic').forEach(image =>{\r\n  image.onclick = () => {\r\n  document.querySelector('.education__popup').style.display = 'block';\r\n  document.querySelector('.education__popup-img').src = image.getAttribute('src');\r\n  }\r\n});\r\ndocument.querySelector('.education__popup-span').onclick = () =>{\r\n  document.querySelector('.education__popup').style.display = 'none';\r\n}\r\n\r\nwindow.onclick = (event) => {\r\n  let popup = document.querySelector('.education__popup');\r\n  if (event.target == popup) {\r\n    popup.style.display = 'none';\r\n  }\r\n}\r\n\r\n\r\n\r\n// _____________________ФОРМА____________________\r\n\r\n\r\nconst form = document.querySelector('.formWithValidation');\r\nconst userName = document.querySelector('#userName'); \r\nconst email = document.querySelector('#email');\r\nconst checkboxAdult = document.querySelectorAll('.checkbox_18');\r\nconst checkboxPrivat = document.querySelectorAll('.checkboxPrivat');  \r\nconst errorsInfo = document.querySelector('#errorsInfo');\r\nconst whatsappInput = document.querySelector('#whatsApp');\r\n\r\nlet submitted = false; \r\n\r\n\r\n// const whatsappRegex = /\\+[0-9]{1,3}\\s\\([0-9]{3}\\)\\s[0-9]{3}\\-[0-9]{2}\\-[0-9]{2}/;\r\n\r\nfunction validateEmail(email) {\r\n  const re =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/i;\r\n  return re.test(email);\r\n}\r\n\r\nfunction validateCheckboxes(checkboxes) {\r\n  return [...checkboxes].some(checkbox => checkbox.checked); \r\n}\r\n\r\nform.addEventListener('submit', e => {\r\n\r\n  if (!submitted) {\r\n    submitted = true;\r\n  }\r\n\r\n  let errors = [];\r\n\r\n  if (userName.value === '') {    // Check if the username field is empty\r\n        errors.push('Имя обязательно');\r\n      }\r\n\r\n  if (email.value === '') {    // Check if the email field is empty\r\n        errors.push('Email обязателен');\r\n      } else if (!validateEmail(email.value)) {    // Check if the email format is valid\r\n        errors.push('Недействительный адрес электронной почты');\r\n      }\r\n\r\n  if (!validateCheckboxes(checkboxAdult)) {\r\n    errors.push('Подтверди, что тебе больше 18 лет'); \r\n  }\r\n\r\n  if (!validateCheckboxes(checkboxPrivat)) {\r\n    errors.push('Необходимо согласиться с условиями');\r\n  }\r\n\r\n  // if (!whatsappRegex.test(whatsappInput.value)) {\r\n  //   errors.push('Поле WhatsApp может содержать только цифры, \"-\", \"+\", \"()\" и пробелы');\r\n  // }\r\n\r\n  if (errors.length > 0) {\r\n    e.preventDefault();\r\n    errorsInfo.innerHTML = errors.join('<br>');\r\n    errorsInfo.style.color = '#fb7070';\r\n  } else {\r\n    errorsInfo.innerHTML = '';\r\n    form.submit();\r\n  }\r\n});\r\n\r\nuserName.addEventListener('input', () => {\r\n  if (submitted) errorsInfo.innerHTML = '';\r\n});\r\n\r\nemail.addEventListener('input', () => {\r\n  if (submitted) errorsInfo.innerHTML = '';\r\n});\r\n\r\nwhatsappInput.addEventListener('input', () => {\r\n  if (submitted) errorsInfo.innerHTML = '';  \r\n});\r\n\r\ncheckboxAdult.forEach(checkbox => {\r\n  checkbox.addEventListener('change', () => {\r\n    if(submitted) errorsInfo.innerHTML = '';\r\n  });\r\n});\r\n\r\ncheckboxPrivat.forEach(checkbox => {\r\n  checkbox.addEventListener('change', () => {\r\n    if(submitted) errorsInfo.innerHTML = '';\r\n  });  \r\n});\r\n\r\n\r\n// ______________________________Посточные ошибки в инпутах_______________________\r\n\r\n// JavaScript\r\n// document.getElementById('username').addEventListener('input', function (e) {\r\n//   let target = e.target;\r\n//   let error = document.getElementById('usernameError');\r\n\r\n//   if (target.value === '') {\r\n//       error.textContent = 'Username is required';\r\n//       error.style.display = 'block';\r\n//   } else {\r\n//       error.style.display = 'none';\r\n//   }\r\n// });\r\n\r\n// document.getElementById('email').addEventListener('input', function (e) {\r\n//   let target = e.target;\r\n//   let error = document.getElementById('emailError');\r\n\r\n//   if (target.value === '') {\r\n//       error.textContent = 'Email is required';\r\n//       error.style.display = 'block';\r\n//   } else if (!target.validity.valid) {\r\n//       error.textContent = 'Please enter a valid email';\r\n//       error.style.display = 'block';\r\n//   } else {\r\n//       error.style.display = 'none';\r\n//   }\r\n// });\r\n\r\n// document.getElementById('myForm').addEventListener('submit', function (e) {\r\n//   let username = document.getElementById('username');\r\n//   let email = document.getElementById('email');\r\n\r\n//   if (username.value === '' || email.value === '' || !email.validity.valid) {\r\n//       e.preventDefault();\r\n//   }\r\n// });\r\n\r\n\r\n\r\n\r\n// -------------- КНОПКА ВВЕРХ ------------------\r\n\r\nconst btnUp = {\r\n  el: document.querySelector(\".btn-up\"),\r\n  scrolling: false,\r\n  show() {\r\n    if (\r\n      this.el.classList.contains(\"btn-up_hide\") &&\r\n      !this.el.classList.contains(\"btn-up_hiding\")\r\n    ) {\r\n      this.el.classList.remove(\"btn-up_hide\");\r\n      this.el.classList.add(\"btn-up_hiding\");\r\n      window.setTimeout(() => {\r\n        this.el.classList.remove(\"btn-up_hiding\");\r\n      }, 300);\r\n    }\r\n  },\r\n  hide() {\r\n    if (\r\n      !this.el.classList.contains(\"btn-up_hide\") &&\r\n      !this.el.classList.contains(\"btn-up_hiding\")\r\n    ) {\r\n      this.el.classList.add(\"btn-up_hiding\");\r\n      window.setTimeout(() => {\r\n        this.el.classList.add(\"btn-up_hide\");\r\n        this.el.classList.remove(\"btn-up_hiding\");\r\n      }, 300);\r\n    }\r\n  },\r\n  addEventListener() {\r\n    // при прокрутке окна (window)\r\n    window.addEventListener(\"scroll\", () => {\r\n      const scrollY = window.scrollY || document.documentElement.scrollTop;\r\n      if (this.scrolling && scrollY > 0) {\r\n        return;\r\n      }\r\n      this.scrolling = false;\r\n      // если пользователь прокрутил страницу более чем на 200px\r\n      if (scrollY > 400) {\r\n        this.show(); // сделаем кнопку .btn-up видимой\r\n      } else {\r\n        this.hide(); // иначе скроем кнопку .btn-up\r\n      }\r\n    });\r\n    // при нажатии на кнопку .btn-up\r\n    document.querySelector(\".btn-up\").onclick = () => {\r\n      this.scrolling = true;\r\n      this.hide();\r\n      // переместиться в верхнюю часть страницы\r\n      window.scrollTo({\r\n        top: 0,\r\n        left: 0,\r\n        behavior: \"smooth\",\r\n      });\r\n    };\r\n  },\r\n};\r\n\r\nbtnUp.addEventListener();\r\n\r\n// (\"use strict\");\r\n\r\nconst isMobile = {\r\n  Android: function () {\r\n    return navigator.userAgent.match(/Android/i);\r\n  },\r\n  BlackBerry: function () {\r\n    return navigator.userAgent.match(/BlackBerry/i);\r\n  },\r\n  iOS: function () {\r\n    return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n  },\r\n  Opera: function () {\r\n    return navigator.userAgent.match(/Opera Mini/i);\r\n  },\r\n  Windows: function () {\r\n    return navigator.userAgent.match(/IEMobile/i);\r\n  },\r\n  any: function () {\r\n    return (\r\n      isMobile.Android() ||\r\n      isMobile.BlackBerry() ||\r\n      isMobile.iOS() ||\r\n      isMobile.Opera() ||\r\n      isMobile.Windows()\r\n    );\r\n  },\r\n};\r\n\r\nif (isMobile.any()) {\r\n  document.body.classList.add(\"_touch\");\r\n\r\n  let menuArrows = document.querySelectorAll(\".menu__arrow\");\r\n  if (menuArrows.length > 0) {\r\n    for (let index = 0; index < menuArrows.length; index++) {\r\n      const menuArrow = menuArrows[index];\r\n      menuArrow.addEventListener(\"click\", function (e) {\r\n        menuArrow.parentElement.classList.toggle(\"_active\");\r\n      });\r\n    }\r\n  }\r\n} else {\r\n  document.body.classList.add(\"_pc\");\r\n}\r\n\r\n// Меню бургер\r\nconst iconMenu = document.querySelector(\".menu__icon\");\r\nconst menuBody = document.querySelector(\".menu__body\");\r\nif (iconMenu) {\r\n  iconMenu.addEventListener(\"click\", function (e) {\r\n    document.body.classList.toggle(\"_lock\");\r\n    iconMenu.classList.toggle(\"_active\");\r\n    menuBody.classList.toggle(\"_active\");\r\n  });\r\n}\r\n\r\n// Прокрутка при клике\r\nconst menuLinks = document.querySelectorAll(\".menu__link[data-goto]\");\r\nif (menuLinks.length > 0) {\r\n  menuLinks.forEach((menuLink) => {\r\n    menuLink.addEventListener(\"click\", onMenuLinkClick);\r\n  });\r\n\r\n  function onMenuLinkClick(e) {\r\n    const menuLink = e.target;\r\n    if (\r\n      menuLink.dataset.goto &&\r\n      document.querySelector(menuLink.dataset.goto)\r\n    ) {\r\n      const gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n      const gotoBlockValue =\r\n        gotoBlock.getBoundingClientRect().top +\r\n        pageYOffset -\r\n        document.querySelector(\"header\").offsetHeight;\r\n\r\n      if (iconMenu.classList.contains(\"_active\")) {\r\n        document.body.classList.remove(\"_lock\");\r\n        iconMenu.classList.remove(\"_active\");\r\n        menuBody.classList.remove(\"_active\");\r\n      }\r\n\r\n      window.scrollTo({\r\n        top: gotoBlockValue,\r\n        behavior: \"smooth\",\r\n      });\r\n      e.preventDefault();\r\n    }\r\n  }\r\n}\r\n\r\n//   _______________________Header color_____________________\r\n\r\nwindow.addEventListener(\"scroll\", function () {\r\n  const header = document.querySelector(\".header\");\r\n  header.classList.toggle(\"scrolled\", window.scrollY > 0);\r\n});\r\n\r\n// __________________________BUTTON____________________________\r\n\r\n(function setGlowEffectRx() {\r\n  const glowEffects = document.querySelectorAll(\".glow-effect\");\r\n\r\n  glowEffects.forEach((glowEffect) => {\r\n    const glowLines = glowEffect.querySelectorAll(\"rect\");\r\n    const rx = getComputedStyle(glowEffect).borderRadius;\r\n\r\n    glowLines.forEach((line) => {\r\n      line.setAttribute(\"rx\", rx);\r\n    });\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack:///./assets/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/scripts/index.js"]();
/******/ 	
/******/ })()
;