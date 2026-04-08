let slideImages = document.querySelectorAll('.slides img');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

let counter = 0;
let interval;
let slideIntervalTime = 3000;

// Show slide
function showSlide(index) {
  slideImages[counter].classList.remove('active');
  dots[counter].classList.remove('active');

  counter = index;

  slideImages[counter].classList.add('active');
  dots[counter].classList.add('active');
}

// Next
function slideNext() {
  let nextIndex = (counter + 1) % slideImages.length;
  showSlide(nextIndex);
}

// Previous
function slidePrev() {
  let prevIndex = (counter - 1 + slideImages.length) % slideImages.length;
  showSlide(prevIndex);
}

// Auto slide
function startAutoSlide() {
  stopAutoSlide();
  interval = setInterval(slideNext, slideIntervalTime);
}

// Stop auto
function stopAutoSlide() {
  clearInterval(interval);
}

// Dot click
dots.forEach(dot => {
  dot.addEventListener('click', function () {
    let index = parseInt(this.getAttribute('data-index'));
    showSlide(index);
    startAutoSlide();
  });
});

// Buttons
nextButton.addEventListener('click', () => {
  slideNext();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  slidePrev();
  startAutoSlide();
});

// Hover pause
let container = document.querySelector('.slide-container');

container.addEventListener('mouseenter', stopAutoSlide);
container.addEventListener('mouseleave', startAutoSlide);

// Keyboard control
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    slideNext();
    startAutoSlide();
  }
  if (e.key === 'ArrowLeft') {
    slidePrev();
    startAutoSlide();
  }
});

// Start
startAutoSlide();