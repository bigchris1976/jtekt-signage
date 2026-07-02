// Live Clock
function updateClock() {
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.innerHTML = new Date().toLocaleString();
    }
}

// Update clock immediately and then every second
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateClock();
        setInterval(updateClock, 1000);
    });
} else {
    updateClock();
    setInterval(updateClock, 1000);
}

// Slideshow Every 7 Seconds
function initializeSlideshow() {
    const slides = document.querySelectorAll(".slide");
    
    if (slides.length === 0) {
        console.error('No slides found in the DOM');
        return;
    }
    
    let currentSlide = 0;
    
    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove("active");
        
        // Move to next slide
        currentSlide++;
        
        // Loop back to beginning if at end
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        // Add active class to new slide
        slides[currentSlide].classList.add("active");
    }
    
    // Change slide every 7 seconds
    setInterval(nextSlide, 7000);
}

// Initialize slideshow when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSlideshow);
} else {
    initializeSlideshow();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    // Clear any intervals if needed
});
