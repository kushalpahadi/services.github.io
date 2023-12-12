"use strict";

gsap.config({
  nullTargetWarn: false,
});

//*********sticky navbar */

let mm = gsap.matchMedia();

mm.add("(min-width: 1001px)", () => {
  gsap.to(".navbar", {
    background: "rgb(6 38 90)",

    height: "95px",

    scrollTrigger: {
      trigger: [".header", ".contact__header", ".about__header"],
      start: "10px top",
      end: "10px -15px",
      scrub: 1,
    },
  });
});

mm.add("(max-width: 1000px)", () => {
  gsap.to(".navbar", {
    background: "rgb(6 38 90)",

    height: "75px",

    scrollTrigger: {
      trigger: [".header", ".contact__header", ".about__header"],
      start: "10px top",
      end: "10px -15px",
      scrub: 1,
    },
  });
});

//scroll bg change   home page

gsap.to(".main", {
  backgroundColor: "rgb(0, 0, 43)",

  scrollTrigger: {
    trigger: [".header", ".contact__header", ".about__header"],
    start: "bottom 65%",
    end: "bottom 75%",

    scrub: 5,
  },
});

gsap.to(".dropdown", {
  background: "rgb(6 38 90)",

  scrollTrigger: {
    trigger: [".header", ".contact__header", ".about__header"],
    start: "10px top",
    end: "10px -15px",
    scrub: 1,
  },
});

//end

gsap.to(".cursorblur", {
  background: "rgb(15, 122, 216)",
  scrollTrigger: {
    trigger: [".header", ".contact__header", ".about__header"],
    start: "bottom 80%",
    end: "bottom 40%",

    scrub: 1,
  },
});

//***************loading screen */
gsap.fromTo(
  ".loading--screen",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: 0.75,
    ease: "power4",
  }
);

//
gsap.from(".navbar", {
  opacity: 0,
  duration: 1,
  y: -10,
  delay: 0.75,
});

gsap.from(
  [
    ".contact__header__label",
    ".about__header__title",
    ".about__header__label",
    ".ani",
  ],
  {
    opacity: 0,
    y: -15,
    duration: 0.7,
    stagger: 0.33,
    ease: "power2",
    delay: 0.75,
  }
);

gsap.from(".navbar__list", {
  opacity: 0,
  y: -10,
  duration: 0.7,
  stagger: 0.13,

  delay: 0.75,
});

//links animation on load
gsap.from([".about__header__link", ".contact__header__link"], {
  opacity: 0,
  y: -15,
  duration: 0.7,

  ease: "power2",
  delay: 1,
});

//contact us loading

//**cursor */
const cursor = document.querySelector(".cursor");
const cursorblur = document.querySelector(".cursorblur");

document.addEventListener("pointermove", function (e) {
  gsap.to(cursorblur, {
    x: e.x - cursorblur.getBoundingClientRect().height / 2,
    y: e.y - cursorblur.getBoundingClientRect().height / 2,
  });
});

//open and close toggle function

const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");

const menu = document.querySelector(".menu");

const opentl = gsap.timeline();

btnOpen.addEventListener("click", function () {
  gsap.to(menu, {
    left: 0,
    duration: 0.5,
    ease: "power4",
  });
});

const closetl = gsap.timeline();

btnClose.addEventListener("click", function () {
  closetl.to(menu, {
    left: "-100%",
    duration: 0.5,
    ease: "power4",
  });
});

///swiper js testimonail
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  grabCursor: true,
  lazyLoading: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    1024: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 40,
    },
  },
});

AOS.init({
  // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  // offset: 120, // offset (in px) from the original trigger point
  // delay: 0, // values from 0 to 3000, with step 50ms
  // duration: 3000, // values from 0 to 3000, with step 50ms
  // easing: "ease", // default easing for AOS animations
  // once: false, // whether animation should happen only once - while scrolling down
  // mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should
});

//lenis smooth scroll

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const servicesbtnmbl = document.querySelector("#mobiledropdownbtn");
const mbldropdown = document.querySelector(".services__contents");
servicesbtnmbl.addEventListener("click", function () {
  mbldropdown.classList.toggle("display__flex");

  document.querySelector("#caret__down").classList.toggle("rotate__caret");
});
