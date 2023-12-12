"use strict";

//smooth scroll

document
  .querySelector(".contact__header__link")
  .addEventListener("click", function () {
    document
      .querySelector(".contact__body")
      .scrollIntoView({ behavior: "smooth" });
  });

//contact send text button

document
  .querySelector(".contact__form__button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (
      document.querySelector("#formname").value !== "" &&
      document.querySelector("#formemail").value !== "" &&
      document.querySelector("#formcontact").value !== "" &&
      document.querySelector("#formmessage").value !== ""
    ) {
      setTimeout(() => {
        document
          .querySelectorAll(".contact__form__input")
          .forEach(function (inputfield) {
            inputfield.blur();
            inputfield.value = "";
          });
      }, 1000);

      setTimeout(() => {
        gsap.fromTo(
          ".contact__form__row--alert",
          {
            display: "block",
          },
          {
            display: "none",
            duration: 10,
          }
        );
      }, 1000);
    }
  });

//on load js

gsap.to(".contact__header__title__border", {
  width: "20%",

  duration: 1,
  delay: 0.75,
});
