// Scroll Progress Indicator
window.addEventListener("scroll", () => {
    const indicator = document.getElementById("scrollIndicator");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    indicator.style.height = `${scrollPercent}%`;
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

// Automatic Dark Mode
const currentHour = new Date().getHours();
if (currentHour >= 18 || currentHour <= 6) {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
}

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-item");
const totalSlides = slides.length;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 3000);

updateSlider();
// Scroll Progress Indicator
window.addEventListener("scroll", () => {
    const indicator = document.getElementById("scrollIndicator");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    indicator.style.height = `${scrollPercent}%`;
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

// Automatic Dark Mode
const currentHour = new Date().getHours();
if (currentHour >= 18 || currentHour <= 6) {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
}

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-item");
const totalSlides = slides.length;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 3000);

updateSlider();
