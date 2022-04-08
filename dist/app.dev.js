"use strict";

// Hamburger menu js
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
}); //Form validation script    
//Get data

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error'); //Validate name from form

function validateName() {
  var name = document.getElementById('Name').value;

  if (name.lenght == "") {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i)) {
    nameError.innerHTML = 'Name is not valid';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
} //Validate email from form


function validateEmail() {
  var email = document.getElementById('Email').value;

  if (email.lenght == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    emailError.innerHTML = 'Email is not valid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
} //Validate message from form


function trimTextarea(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function validateMessage() {
  if (document.getElementById('textareaContactForm').value == '') {
    messageError.innerHTML = 'Please write a message';
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
} //Validate Form


function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  } else {
    console.log('Should be fine');
    return true;
  }
}