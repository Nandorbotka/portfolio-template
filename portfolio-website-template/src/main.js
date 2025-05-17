"use strict";

import "./style.css";

const hamburgerBtn = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("menu");
const hLink = document.querySelectorAll("#h-link");
const body = document.querySelector("body");
const darkBtn = document.getElementById("darkBtn");

hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hidden");
    hamburgerBtn.classList.add("bg-white");
});

hLink.forEach((link) => {
    link.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("hidden");
    });
});

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});
