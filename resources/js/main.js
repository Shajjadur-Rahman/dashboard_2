// slick slider and counterUp activation

$(document).ready(function () {
  $(".demo").slick({
    autoplay: true,
    arrows: false,
  });
  $(".counter").counterUp({
    delay: 20,
    time: 1500,
  });
});
let sidebar_btn = document.querySelector("#sidebar_btn");
let sidebar = document.querySelector(".sidebar");
let span_icon = document.querySelectorAll(".span_icon");
let content = document.querySelector(".content");
sidebar_btn.addEventListener("click", function () {
  sidebar_btn.classList.toggle("checked");
  sidebar.classList.toggle("sidebar_toggle");
  sidebar.style.transition = "0.5s";
  for (i = 0; i < span_icon.length; i++) {
    span_icon[i].classList.toggle("span_icon_toggle");
    span_icon[i].style.transition = "0.5s";
  }
  content.classList.toggle("content_slide_toggle");
  content.style.transition = "0.5s";
});

// type.js

var typed = new Typed(".text", {
  strings: [
    "Hello guys, I'm Md. Shajjad.......",
    "I'm full-stack python developer !",
    "If you need for eye-catching web app",
    "You can contact with me.........",
    " through following ' Email address  or  Phone number ' .",
    "Email :   shaturngbd@gmail.com ",
    "Phone : 01785259895 ",
    " Thanks ! ",
  ],
  typeSpeed: 50,
  backSpeed: 0,
  loop: true,
});
// search box

// pagination button

let pagination_btn = document.querySelectorAll(".active");

for (i = 0; i < pagination_btn.length; i++) {
  pagination_btn[i].addEventListener("click", function () {
    for (j = 0; j < pagination_btn.length; j++) {
      pagination_btn[j].classList.remove("btn_background");
    }
    this.classList.add("btn_background");
  });
}

//mobile menu
function openNav() {
  var myNav = document.getElementById("myNav");
  myNav.style.width = "100%";
}
function closeNav() {
  var myNav = document.getElementById("myNav");
  myNav.style.width = "0%";
}

// theme change

var setTheme = localStorage.getItem("theme");
if (setTheme == null) {
  swapStyle("resources/css/dark.css");
} else {
  swapStyle(setTheme);
}
function swapStyle(sheet) {
  document.getElementById("myStyle").href = sheet;
  localStorage.setItem("theme", sheet);
}
