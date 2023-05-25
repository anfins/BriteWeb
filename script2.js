const slideA = document.getElementById("firstSlideHIW");
const slideB = document.getElementById("secondSlideHIW");
const slideC = document.getElementById("thirdSlideHIW");

var currentSlide = 0;

// Function to show the current slide
function showSlide() {
  slides[currentSlide].classList.add("hidden-left");
}

// Function to switch to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}


function resetSlides(){
    slideA.style.display = "flex";
    slideB.style.display = "none";
    slideC.style.display = "none";

}

// Set the interval to switch slides every 3 seconds
setInterval(nextSlide, 3000);
