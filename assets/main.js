"use strict";
let menu_toggler = document.querySelector(".nav_toggle");
let menu_overlay = document.querySelector(".menu-overlay");
let menu_close = document.querySelector(".close-menu");
let menu = document.querySelector("#menu");
const enable_disable_nav = () => {
    menu.classList.toggle("active");
    menu_overlay.classList.toggle("active");
};

menu_toggler.addEventListener("click", enable_disable_nav);
menu_overlay.addEventListener("click", enable_disable_nav);
menu_close.addEventListener("click", enable_disable_nav);
