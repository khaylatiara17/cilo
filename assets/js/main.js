// Scroll Progress Indicator
const updateScrollIndicator = () => {
    const indicator = document.getElementById("scrollIndicator");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    indicator.style.height = `${scrollPercent}%`;
};

// Event listener untuk scroll
window.addEventListener("scroll", updateScrollIndicator);

// Dark Mode Toggle
const darkModeToggleButton = document.getElementById("darkModeToggle");

// Fungsi untuk mengaktifkan atau menonaktifkan dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
};

// Event listener untuk tombol toggle
darkModeToggleButton.addEventListener("click", toggleDarkMode);

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

// Update posisi slider
const updateSlider = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
};

// Interval untuk auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 3000);

// Initial call to update the slider
updateSlider();
