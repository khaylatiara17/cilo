// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progressBar");
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

// Scroll Animation
const animatedElements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
    const viewportHeight = window.innerHeight;

    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 50) {
            el.classList.add("visible");
        }
    });
});
