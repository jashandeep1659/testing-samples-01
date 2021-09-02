"use strict";
// start of navbar menu
let menu_toggler = document.querySelector(".nav_toggle");
let menu_overlay = document.querySelector(".menu-overlay");
let menu_close = document.querySelector(".close-menu");
let menu = document.querySelector("#menu");

const enable_disable_nav = () => {
    menu.classList.toggle("active");
    menu_overlay.classList.toggle("active");
    let toggler_button_i = document.querySelector(".nav_toggle i");
    toggler_button_i.classList.toggle("bx-menu-alt-right");
    toggler_button_i.classList.toggle("bx-x");
};

menu_toggler.addEventListener("click", enable_disable_nav);
menu_overlay.addEventListener("click", enable_disable_nav);
menu_close.addEventListener("click", enable_disable_nav);
// end of navbar menu

const themechanger = document.querySelector("#themechanger");
const theme_container = document.querySelector("html");
const setTheme = (theme) => {
    let light = document.querySelector(".light_button");
    let dark = document.querySelector(".dark_button");
    if (theme === "dark") {
        theme_container.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", theme);
        light.selected = "";
        dark.selected = "selected";
    } else if (theme === "light") {
        localStorage.setItem("theme", theme);
        theme_container.setAttribute("data-theme", "light");
        light.selected = "selected";
        dark.selected = "";
    }
};
themechanger.addEventListener("change", (e) => {
    setTheme(e.target.value);
});

const defaultTheme = localStorage.getItem("theme") || setTheme("light");
setTheme(defaultTheme);
