let slideImages = document.querySelectorAll('.slides img');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let counter = 0;
let interval;

// Function to switch to the next slide
function slideNext() {
  slideImages[counter].classList.remove('active');
  dots[counter].classList.remove('active');
  
  counter = (counter + 1) % slideImages.length;
  
  slideImages[counter].classList.add('active');
  dots[counter].classList.add('active');
}

// Function to switch to the previous slide
function slidePrev() {
  slideImages[counter].classList.remove('active');
  dots[counter].classList.remove('active');
  
  counter = (counter - 1 + slideImages.length) % slideImages.length;
  
  slideImages[counter].classList.add('active');
  dots[counter].classList.add('active');
}

// Set up auto sliding
function autoSliding() {
  interval = setInterval(slideNext, 2000);
}

// Stop auto sliding on hover
document.querySelector('.slide-container').addEventListener('mouseover', () => {
  clearInterval(interval);
});

// Resume auto sliding when not hovering
document.querySelector('.slide-container').addEventListener('mouseout', autoSliding);

// Function to switch slides when clicking a dot
function switchImage(currentDot) {
  let imageIndex = parseInt(currentDot.getAttribute('data-index'));
  
  slideImages[counter].classList.remove('active');
  dots[counter].classList.remove('active');
  
  counter = imageIndex;
  
  slideImages[counter].classList.add('active');
  dots[counter].classList.add('active');
}

// Add event listeners
nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);
dots.forEach(dot => dot.addEventListener('click', function() { switchImage(dot); }));

// Start auto sliding on page load
autoSliding();
