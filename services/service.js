const slider = document.querySelector('.slider');
slider.addEventListener('wheel', (event) => {
  event.preventDefault();
  slider.scrollLeft += event.deltaY;
});
// testimonials


const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Start with the first slide

function updateSlider() {
  const slideWidth = sliderContainer.children[0].offsetWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Disable/enable buttons based on the current slide
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === sliderContainer.children.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < sliderContainer.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Initialize slider on page load
updateSlider();
// accordins


