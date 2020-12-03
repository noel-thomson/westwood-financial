const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const slideNext = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  current.classList.remove('current');
};

if (auto) {
  slideInterval = setInterval(slideNext, intervalTime);
}
