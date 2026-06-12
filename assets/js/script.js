'use strict';

/**
 * Caching DOM Elements for performance optimization
 */
const body = document.body;
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const themeToggleBtn = document.querySelector("[data-theme-btn]");
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

/**
 * Helper: Toggle element active class
 */
const toggleActive = (elem) => elem.classList.toggle("active");

/**
 * Sticky Header & Back to Top behavior
 */
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY >= 10;
  header.classList.toggle("active", isScrolled);
  goTopBtn.classList.toggle("active", isScrolled);
});

/**
 * Mobile Navigation Menu Toggle
 */
navToggleBtn.addEventListener("click", () => {
  toggleActive(navToggleBtn);
  toggleActive(navbar);
  toggleActive(body);
});

/**
 * Close Mobile Navigation Menu
 */
const closeNavbar = () => {
  navToggleBtn.classList.remove("active");
  navbar.classList.remove("active");
  body.classList.remove("active"); // Fixed: Explicitly remove active instead of toggling to avoid scroll lock issues
};

// Expose closeNavbar globally for inline onclick handlers in index.html
window.closeNavbar = closeNavbar;

/**
 * Skills & Tools Tab Switcher
 * Optimizes tab switching and prevents layout toggles when clicking already active tab.
 */
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // If the clicked tab is already active, do nothing
    if (btn.classList.contains("active")) return;

    // Toggle active state for tab containers
    toggleActive(toggleBtnBox);
    toggleActive(skillsBox);
    
    // Toggle active states for the tab buttons
    toggleBtns.forEach((tab) => toggleActive(tab));
  });
});

/**
 * Theme Manager (Dark & Light Theme Mode)
 * Simplifies and reduces duplicate class list adjustments.
 */
const applyTheme = (themeName) => {
  if (themeName === "light_theme") {
    body.classList.remove("dark_theme");
    body.classList.add("light_theme");
    themeToggleBtn.classList.add("active");
  } else {
    body.classList.remove("light_theme");
    body.classList.add("dark_theme");
    themeToggleBtn.classList.remove("active");
  }
  localStorage.setItem("theme", themeName);
};

// Toggle Theme click handler
themeToggleBtn.addEventListener("click", () => {
  const currentIsLight = body.classList.contains("light_theme");
  applyTheme(currentIsLight ? "dark_theme" : "light_theme");
});

// Initialize Theme on load
const cachedTheme = localStorage.getItem("theme") || "dark_theme";
applyTheme(cachedTheme);