"use strict";

//smooth scroll

document
  .querySelector(".about__header__link")
  .addEventListener("click", function () {
    document
      .querySelector(".about__body")
      .scrollIntoView({ behavior: "smooth" });
  });

gsap.to(".about__header__title__border", {
  width: "100%",

  duration: 1,
  delay: 0.75,
});

document
  .querySelectorAll(".about__body__ourteam__info__image")
  .forEach(function (image) {
    gsap.from(image, {
      y: "100%",

      scrollTrigger: {
        trigger: ".about__body__ourteam__info ",
        start: "-20% center",

        scrub: false,
      },
      duration: 1,
    });
  });
