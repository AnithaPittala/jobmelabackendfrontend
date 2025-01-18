const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

// Function to update slider
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    // Shift the slider
    const offset = currentIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Next button click event
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
});

// Previous button click event
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlider();
});

// Auto-slide functionality (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}, 5000);
