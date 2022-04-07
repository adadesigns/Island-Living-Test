"use strict";

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(function (n) {
  return n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});