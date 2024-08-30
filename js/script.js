const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let currentIndex = 0;
const numItems = items.length;
const itemWidth = items[0].offsetWidth; // Width of a single slide

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + numItems) % numItems;
    updateCarousel();
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % numItems;
    updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * itemWidth;
  container.style.transition = 'transform 0.5s ease'; // Smooth transition
  container.style.transform = `translateX(${offset}px)`;
  items.forEach(item => {
      item.style.transition = 'opacity 0.5s ease'; // Smooth transition
      item.style.opacity = 1; // Reset opacity
  });
  items[currentIndex].style.opacity = 0; // Hide current slide momentarily
  setTimeout(() => {
      items[currentIndex].style.opacity = 1; // Reveal current slide smoothly
  }, 10);
}


  
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById('emailInput');
    emailInput.classList.add('hidden'); // Add the 'hidden' class to hide the email input
    this.subscribe(); // Submit the form programmatically if needed
});
  