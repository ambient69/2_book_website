/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/

const swiperHome = new Swiper(".home__swiper", {
  // Optional parameters

  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});
/*=============== FEATURED SWIPER ===============*/
const swiperFeatured = new Swiper(".featured__swiper", {
  // Optional parameters

  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});
/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper(".new__swiper", {
  // Optional parameters

  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/

const swiperTestimonial = new Swiper(".testimonial__swiper", {
  // Optional parameters

  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpElement = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUpElement.classList.add("show-scroll")
    : scrollUpElement.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Если текущий раздел видим, добавляем класс "active" к соответствующей ссылке
      const navLinks = document.querySelectorAll(
        `.nav__menu a[href="#${sectionId}"]`
      );
      navLinks.forEach((link) => link.classList.add("active-link"));
    } else {
      // Если текущий раздел не видим, удаляем класс "active" из соответствующей ссылки
      const navLinks = document.querySelectorAll(
        `.nav__menu a[href="#${sectionId}"]`
      );
      navLinks.forEach((link) => link.classList.remove("active-link"));
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
