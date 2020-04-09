const ONE_SECOND = 1000;
const NEXT_SLIDE = "next";
const PREV_SLIDE = "prev";

/* Countdown timer */
let endDate = new Date("May 10, 2020 17:00:00").getTime() / 1000;
setInterval(() => {
  let dateNow = new Date().getTime() / 1000;
  let difference = Math.round(endDate - dateNow);

  document.getElementById(
    "countdown-value"
  ).textContent = difference.toLocaleString();
}, ONE_SECOND);

/* Slideshow */
let slides = document.querySelectorAll(".slide-section");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function newSlide(direction) {
  let slidesLength = slides.length;

  slides[currentSlide].style.display = "none";
  dots[currentSlide].classList.remove("active");

  currentSlide += direction === NEXT_SLIDE ? 1 : -1;

  if (currentSlide >= slidesLength) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slidesLength - 1;
  }

  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}

function dotClick(number) {
  console.log(number);

  if (number - 1 === currentSlide) {
    return;
  }

  slides[currentSlide].style.display = "none";
  dots[currentSlide].classList.remove("active");

  currentSlide = number - 1;

  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}
