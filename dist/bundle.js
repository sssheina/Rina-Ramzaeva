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

eval("// slider HELP\r\n\r\nconst swiper = new Swiper(\".swiper\", {\r\n  grabCursor: true,\r\n  touchRatio: 2,\r\n  slideToClickedSlide: true,\r\n  keuboard: {\r\n    enabled: true,\r\n    onlyInViewport: true,\r\n    pageUpDown: true,\r\n  },\r\n  mousewheel: {\r\n    sensitivity: 1,\r\n    eventsTarget: \".swiper\",\r\n  },\r\n  // slidesPerView: 1, // - по умолчанию значение 1\r\n  slidesPerView: 3,\r\n  // breakpoints: {\r\n  //   320: {\r\n  //     slidesPerView: 1,\r\n  //   },\r\n  //   480: {\r\n  //     slidesPerView: 2,\r\n  //   },\r\n  //   992: {\r\n  //     slidesPerView: 3,\r\n  //   },\r\n  // },\r\n  loop: true,\r\n  loopedSlides: 3,\r\n  watchOverflow: true,\r\n  spaceBetween: 37,\r\n  // slidesPerGroup: 3,\r\n  // centeredSlides: true,\r\n  initialSlide: 0,\r\n  freeMode: true,\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  // scrollbar: {\r\n  //   el: \".swiper-scrollbar\",\r\n  //   draggable: true,\r\n  //   hide: true,\r\n  // },\r\n  // autoplay: {\r\n  //   delay: 5000,\r\n  //   disableOnInteraction: true,\r\n  // },\r\n  speed: 800,\r\n});\r\n\r\n// -------------- КНОПКА ВВЕРХ ------------------\r\n\r\nconst btnUp = {\r\n  el: document.querySelector(\".btn-up\"),\r\n  scrolling: false,\r\n  show() {\r\n    if (\r\n      this.el.classList.contains(\"btn-up_hide\") &&\r\n      !this.el.classList.contains(\"btn-up_hiding\")\r\n    ) {\r\n      this.el.classList.remove(\"btn-up_hide\");\r\n      this.el.classList.add(\"btn-up_hiding\");\r\n      window.setTimeout(() => {\r\n        this.el.classList.remove(\"btn-up_hiding\");\r\n      }, 300);\r\n    }\r\n  },\r\n  hide() {\r\n    if (\r\n      !this.el.classList.contains(\"btn-up_hide\") &&\r\n      !this.el.classList.contains(\"btn-up_hiding\")\r\n    ) {\r\n      this.el.classList.add(\"btn-up_hiding\");\r\n      window.setTimeout(() => {\r\n        this.el.classList.add(\"btn-up_hide\");\r\n        this.el.classList.remove(\"btn-up_hiding\");\r\n      }, 300);\r\n    }\r\n  },\r\n  addEventListener() {\r\n    // при прокрутке окна (window)\r\n    window.addEventListener(\"scroll\", () => {\r\n      const scrollY = window.scrollY || document.documentElement.scrollTop;\r\n      if (this.scrolling && scrollY > 0) {\r\n        return;\r\n      }\r\n      this.scrolling = false;\r\n      // если пользователь прокрутил страницу более чем на 200px\r\n      if (scrollY > 400) {\r\n        this.show(); // сделаем кнопку .btn-up видимой\r\n      } else {\r\n        this.hide(); // иначе скроем кнопку .btn-up\r\n      }\r\n    });\r\n    // при нажатии на кнопку .btn-up\r\n    document.querySelector(\".btn-up\").onclick = () => {\r\n      this.scrolling = true;\r\n      this.hide();\r\n      // переместиться в верхнюю часть страницы\r\n      window.scrollTo({\r\n        top: 0,\r\n        left: 0,\r\n        behavior: \"smooth\",\r\n      });\r\n    };\r\n  },\r\n};\r\n\r\nbtnUp.addEventListener();\r\n\r\n// (\"use strict\");\r\n\r\nconst isMobile = {\r\n  Android: function () {\r\n    return navigator.userAgent.match(/Android/i);\r\n  },\r\n  BlackBerry: function () {\r\n    return navigator.userAgent.match(/BlackBerry/i);\r\n  },\r\n  iOS: function () {\r\n    return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n  },\r\n  Opera: function () {\r\n    return navigator.userAgent.match(/Opera Mini/i);\r\n  },\r\n  Windows: function () {\r\n    return navigator.userAgent.match(/IEMobile/i);\r\n  },\r\n  any: function () {\r\n    return (\r\n      isMobile.Android() ||\r\n      isMobile.BlackBerry() ||\r\n      isMobile.iOS() ||\r\n      isMobile.Opera() ||\r\n      isMobile.Windows()\r\n    );\r\n  },\r\n};\r\n\r\nif (isMobile.any()) {\r\n  document.body.classList.add(\"_touch\");\r\n\r\n  let menuArrows = document.querySelectorAll(\".menu__arrow\");\r\n  if (menuArrows.length > 0) {\r\n    for (let index = 0; index < menuArrows.length; index++) {\r\n      const menuArrow = menuArrows[index];\r\n      menuArrow.addEventListener(\"click\", function (e) {\r\n        menuArrow.parentElement.classList.toggle(\"_active\");\r\n      });\r\n    }\r\n  }\r\n} else {\r\n  document.body.classList.add(\"_pc\");\r\n}\r\n\r\n// Меню бургер\r\nconst iconMenu = document.querySelector(\".menu__icon\");\r\nconst menuBody = document.querySelector(\".menu__body\");\r\nif (iconMenu) {\r\n  iconMenu.addEventListener(\"click\", function (e) {\r\n    document.body.classList.toggle(\"_lock\");\r\n    iconMenu.classList.toggle(\"_active\");\r\n    menuBody.classList.toggle(\"_active\");\r\n  });\r\n}\r\n\r\n// Прокрутка при клике\r\nconst menuLinks = document.querySelectorAll(\".menu__link[data-goto]\");\r\nif (menuLinks.length > 0) {\r\n  menuLinks.forEach((menuLink) => {\r\n    menuLink.addEventListener(\"click\", onMenuLinkClick);\r\n  });\r\n\r\n  function onMenuLinkClick(e) {\r\n    const menuLink = e.target;\r\n    if (\r\n      menuLink.dataset.goto &&\r\n      document.querySelector(menuLink.dataset.goto)\r\n    ) {\r\n      const gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n      const gotoBlockValue =\r\n        gotoBlock.getBoundingClientRect().top +\r\n        pageYOffset -\r\n        document.querySelector(\"header\").offsetHeight;\r\n\r\n      if (iconMenu.classList.contains(\"_active\")) {\r\n        document.body.classList.remove(\"_lock\");\r\n        iconMenu.classList.remove(\"_active\");\r\n        menuBody.classList.remove(\"_active\");\r\n      }\r\n\r\n      window.scrollTo({\r\n        top: gotoBlockValue,\r\n        behavior: \"smooth\",\r\n      });\r\n      e.preventDefault();\r\n    }\r\n  }\r\n}\r\n\r\n//   _______________________Header color_____________________\r\n\r\nwindow.addEventListener(\"scroll\", function () {\r\n  const header = document.querySelector(\".header\");\r\n  header.classList.toggle(\"scrolled\", window.scrollY > 0);\r\n});\r\n\r\n// __________________________BUTTON____________________________\r\n\r\n(function setGlowEffectRx() {\r\n  const glowEffects = document.querySelectorAll(\".glow-effect\");\r\n\r\n  glowEffects.forEach((glowEffect) => {\r\n    const glowLines = glowEffect.querySelectorAll(\"rect\");\r\n    const rx = getComputedStyle(glowEffect).borderRadius;\r\n\r\n    glowLines.forEach((line) => {\r\n      line.setAttribute(\"rx\", rx);\r\n    });\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack:///./assets/scripts/index.js?");

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