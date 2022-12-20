'use strict';

// element toggle function

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

//header sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll"), function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

//navbar toggle

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});
