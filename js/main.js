const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

const array = [menu, menuNav, menuBranding];

const toggleMenu = () => {
  menuBtn.classList.toggle("close");
  navItems.forEach((item) => item.classList.toggle("show"));
  array.forEach((item) => item.classList.toggle("show"));
};

menuBtn.addEventListener("click", toggleMenu);
