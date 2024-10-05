const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    
    // Change cursor color in dark mode
    if (document.body.classList.contains("dark-mode")) {
        cursorDot.style.backgroundColor = "#f39c12"; // Change to dark mode color
        cursorOutline.style.borderColor = "#f39c12";
    } else {
        cursorDot.style.backgroundColor = "#4CAF50"; // Change to light mode color
        cursorOutline.style.borderColor = "#4CAF50";
    }
});

// Custom cursor functionality
document.addEventListener("mousemove", (e) => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    
    cursorDot.style.left = `${e.pageX}px`;
    cursorDot.style.top = `${e.pageY}px`;
    cursorOutline.style.left = `${e.pageX}px`;
    cursorOutline.style.top = `${e.pageY}px`;
});
