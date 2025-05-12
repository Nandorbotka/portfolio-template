"use strict";

import "./style.css";

const hamburgerBtn = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hidden");
    hamburgerBtn.classList.add("bg-white");
});
