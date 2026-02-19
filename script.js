console.log("Portfolio Loaded");

// Example animation
window.addEventListener("scroll", () => {

let scroll = window.scrollY;
document.querySelector(".Title")
.style.transform = `translateY(${scroll * 0.2}px)`;

});