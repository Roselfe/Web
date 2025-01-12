const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    const totalItems = carousel.querySelectorAll('.carousel-item').length;
    currentIndex = Math.min(totalItems - 1, currentIndex + 1);
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
