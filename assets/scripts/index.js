// slider HELP

const swiper = new Swiper(".swiper", {
  grabCursor: true,
  touchRatio: 2,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // slidesPerView: 1, // - по умолчанию значение 1
  slidesPerView: 3,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // },
  loop: true,
  loopedSlides: 3,
  watchOverflow: true,
  spaceBetween: 37,
  slidesPerGroup: 2,
  // centeredSlides: true,
  initialSlide: 0,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  speed: 1200,
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const headerContainer = document.querySelector(".header__container");
  header.classList.toggle("scrolled", window.scrollY > 0);
  headerContainer.classList.toggle(
    "scrolledHeaderContainer",
    window.scrollY > 0
  );
});

//_____________________Education PIC-ZOOM__________________

document.querySelectorAll('.education__pic').forEach(image =>{
  image.onclick = () => {
  document.querySelector('.education__popup').style.display = 'block';
  document.querySelector('.education__popup-img').src = image.getAttribute('src');
  }
});
document.querySelector('.education__popup-span').onclick = () =>{
  document.querySelector('.education__popup').style.display = 'none';
}

window.onclick = (event) => {
  let popup = document.querySelector('.education__popup');
  if (event.target == popup) {
    popup.style.display = 'none';
  }
}
// _____________________ Соединённый сценарий____________

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.formWithValidation');
  const userName = document.querySelector('#userName'); 
  const email = document.querySelector('#email');
  const checkboxAdult = document.querySelectorAll('.checkbox_18');
  const checkboxPrivat = document.querySelectorAll('.checkboxPrivat');  
  const errorsInfo = document.querySelector('#errorsInfo');
  const whatsappInput = document.querySelector('#whatsApp');

  let submitted = false; 

  function validateEmail(email) {
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return re.test(email);
  }

  function validateCheckboxes(checkboxes) {
    return [...checkboxes].some(checkbox => checkbox.checked); 
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!submitted) {
      submitted = true;
    }

    let errors = [];

    if (userName.value === '') {
      errors.push('Имя обязательно');
    }

    if (email.value === '') {
      errors.push('Email обязателен');
    } else if (!validateEmail(email.value)) {
      errors.push('Недействительный адрес электронной почты');
    }

    if (!validateCheckboxes(checkboxAdult)) {
      errors.push('Подтверди, что тебе больше 18 лет');
    }

    if (!validateCheckboxes(checkboxPrivat)) {
      errors.push('Необходимо согласиться с условиями');
    }

    if (errors.length > 0) {
      errorsInfo.innerHTML = errors.join('<br>');
      errorsInfo.style.color = '#fb7070';
    } else {
      errorsInfo.innerHTML = '';

      try {
        form.classList.add('_sending');
        let formData = new FormData(form);
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          let result = await response.json();
          displaySuccessMessageModal(result.message);
          form.reset();
        } else {
          displayErrorMessage("Ошибка отправки данных");
        }
      } catch (error) {
        displayErrorMessage("Произошла ошибка: " + error.message);
      } finally {
        form.classList.remove('_sending');
      }
    }
  });

  function displaySuccessMessageModal(message) {
    const modal = document.querySelector('#myModal');
    const successMessageModal = modal.querySelector('#successMessage');
    successMessageModal.textContent = message;
    modal.style.display = 'block'; // Open the modal
  }

  function displayErrorMessage(message) {
    const errorMessage = document.querySelector('#errorMessage');
    errorMessage.textContent = message;
  }

  userName.addEventListener('input', () => {
    if (submitted) errorsInfo.innerHTML = '';
  });

  email.addEventListener('input', () => {
    if (submitted) errorsInfo.innerHTML = '';
  });

  whatsappInput.addEventListener('input', () => {
    if (submitted) errorsInfo.innerHTML = '';  
  });

  checkboxAdult.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (submitted) errorsInfo.innerHTML = '';
    });
  });

  checkboxPrivat.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (submitted) errorsInfo.innerHTML = '';
    });  
  });
});


// _____________________ФОРМА____________________


// const form = document.querySelector('.formWithValidation');
// const userName = document.querySelector('#userName'); 
// const email = document.querySelector('#email');
// const checkboxAdult = document.querySelectorAll('.checkbox_18');
// const checkboxPrivat = document.querySelectorAll('.checkboxPrivat');  
// const errorsInfo = document.querySelector('#errorsInfo');
// const whatsappInput = document.querySelector('#whatsApp');

// let submitted = false; 


// // const whatsappRegex = /\+[0-9]{1,3}\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}/;

// function validateEmail(email) {
//   const re =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
//   return re.test(email);
// }

// function validateCheckboxes(checkboxes) {
//   return [...checkboxes].some(checkbox => checkbox.checked); 
// }

// form.addEventListener('submit', e => {

//   if (!submitted) {
//     submitted = true;
//   }

//   let errors = [];

//   if (userName.value === '') {    // Check if the username field is empty
//         errors.push('Имя обязательно');
//       }

//   if (email.value === '') {    // Check if the email field is empty
//         errors.push('Email обязателен');
//       } else if (!validateEmail(email.value)) {    // Check if the email format is valid
//         errors.push('Недействительный адрес электронной почты');
//       }

//   if (!validateCheckboxes(checkboxAdult)) {
//     errors.push('Подтверди, что тебе больше 18 лет'); 
//   }

//   if (!validateCheckboxes(checkboxPrivat)) {
//     errors.push('Необходимо согласиться с условиями');
//   }

//   // if (!whatsappRegex.test(whatsappInput.value)) {
//   //   errors.push('Поле WhatsApp может содержать только цифры, "-", "+", "()" и пробелы');
//   // }

//   if (errors.length > 0) {
//     e.preventDefault();
//     errorsInfo.innerHTML = errors.join('<br>');
//     errorsInfo.style.color = '#fb7070';
//   } else {
//     errorsInfo.innerHTML = '';
//     form.submit();
//   }
// });

// userName.addEventListener('input', () => {
//   if (submitted) errorsInfo.innerHTML = '';
// });

// email.addEventListener('input', () => {
//   if (submitted) errorsInfo.innerHTML = '';
// });

// whatsappInput.addEventListener('input', () => {
//   if (submitted) errorsInfo.innerHTML = '';  
// });

// checkboxAdult.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     if(submitted) errorsInfo.innerHTML = '';
//   });
// });

// checkboxPrivat.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     if(submitted) errorsInfo.innerHTML = '';
//   });  
// });

// ________________________________________________

// "use strict"

// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		let formData = new FormData(form);
// 		formData.append('image', formImage.files[0]);

// 		if (error === 0) {
// 			form.classList.add('_sending');
// 			let response = await fetch('sendmail.php', {
// 				method: 'POST',
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				alert(result.message);
// 				formPreview.innerHTML = '';
// 				form.reset();
// 				form.classList.remove('_sending');
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove('_sending');
// 			}
// 		} else {
// 			alert('Заполните обязательные поля');
// 		}

// 	}


// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email')) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 				formAddError(input);
// 				error++;
// 			} else {
// 				if (input.value === '') {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 		return error;
// 	}
// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// 	//Функция теста email
// 	function emailTest(input) {
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}

// });


// -------------- КНОПКА ВВЕРХ ------------------

const btnUp = {
  el: document.querySelector(".btn-up"),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.remove("btn-up_hide");
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.add("btn-up_hide");
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        this.show(); // сделаем кнопку .btn-up видимой
      } else {
        this.hide(); // иначе скроем кнопку .btn-up
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();

// ("use strict");

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// Меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//   _______________________Header color_____________________

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// __________________________BUTTON____________________________

(function setGlowEffectRx() {
  const glowEffects = document.querySelectorAll(".glow-effect");

  glowEffects.forEach((glowEffect) => {
    const glowLines = glowEffect.querySelectorAll("rect");
    const rx = getComputedStyle(glowEffect).borderRadius;

    glowLines.forEach((line) => {
      line.setAttribute("rx", rx);
    });
  });
})();
