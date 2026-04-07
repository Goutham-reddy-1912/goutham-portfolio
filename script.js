// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu on nav click (mobile)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);