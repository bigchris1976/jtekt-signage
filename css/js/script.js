// Live Clock
function updateClock() {
    document.getElementById("clock").innerHTML =
        new Date().toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();

// Slideshow Every 7 Seconds
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 7000);
``