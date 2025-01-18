// script.js
let currentIndex = 0;

function nextSlide() {
  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 20; // Include margin
  const maxIndex = cards.length - Math.floor(cardContainer.offsetWidth / cardWidth); // Max scrollable index

  if (currentIndex < maxIndex) {
    currentIndex++;
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

function prevSlide() {
  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 20; // Include margin

  if (currentIndex > 0) {
    currentIndex--;
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}
// 


const slider1 = document.querySelector('#slider1 .slider');
const leftBtn1 = document.querySelector('#slider1 .slider-btn.left');
const rightBtn1 = document.querySelector('#slider1 .slider-btn.right');

let currentPosition1 = 0;

rightBtn1.addEventListener('click', () => {
  const cardWidth = document.querySelector('#slider1 .like-card').offsetWidth + 20; // Card width + gap
  const maxScroll = slider1.scrollWidth - slider1.offsetWidth; // Max scroll distance
  if (currentPosition1 < maxScroll) {
    currentPosition1 += cardWidth;
    slider1.style.transform = `translateX(-${currentPosition1}px)`;
  }
});

leftBtn1.addEventListener('click', () => {
  const cardWidth = document.querySelector('#slider1 .like-card').offsetWidth + 20; // Card width + gap
  if (currentPosition1 > 0) {
    currentPosition1 -= cardWidth;
    slider1.style.transform = `translateX(-${currentPosition1}px)`;
  }
});
