const slider = document.querySelector('.slider');
const leftBtn = document.querySelector('.slider-btn.left');
const rightBtn = document.querySelector('.slider-btn.right');

let currentPosition = 0;

rightBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.like-card').offsetWidth + 20; // Card width + gap
  const maxScroll = slider.scrollWidth - slider.offsetWidth; // Max scroll distance
  if (currentPosition < maxScroll) {
    currentPosition += cardWidth;
    slider.style.transform = `translateX(-${currentPosition}px)`;
  }
});

leftBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.like-card').offsetWidth + 20; // Card width + gap
  if (currentPosition > 0) {
    currentPosition -= cardWidth;
    slider.style.transform = `translateX(-${currentPosition}px)`;
  }
});
