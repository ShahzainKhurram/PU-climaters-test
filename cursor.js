// cursor.js

// Select DOM elements for the custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

// Select theme toggle elements
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Variables to store mouse and cursor positions
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Throttle the mousemove event using requestAnimationFrame for better performance
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Function to animate the cursor movement smoothly
function animateCursor() {
    // Calculate the difference between current cursor position and mouse position
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;

    // Apply a simple easing for smooth movement (adjust the factor for speed)
    cursorX += distX * 0.1;
    cursorY += distY * 0.1;

    // Update the position of the cursorDot
    cursorDot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    // Update the position of the cursorOutline with a slight delay for the trailing effect
    cursorOutline.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    // Continue the animation loop
    requestAnimationFrame(animateCursor);
}

// Start the cursor animation loop
animateCursor();

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Toggle the theme icon between moon and sun
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");

    // Determine the current theme and save it to localStorage
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

// Initialize theme based on saved preference when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.remove("fa-sun");
    }
});
