const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;
//
const headers = document.querySelectorAll('.slide-content h1');
let count = 0;

const slideNext = () => {
  let active = headers[count];
  active.classList.remove('active');
  count >= headers.length - 1 ? (count = 0) : count++;
  active = headers[count];
  active.classList.add('active');
  current.classList.remove('active');
};

if (auto) {
  slideInterval = setInterval(slideNext, intervalTime);
}
// const slideNext = () => {
//   const current = document.querySelector('.current');
//   current.classList.remove('current');
//   if (current.nextElementSibling) {
//     current.nextElementSibling.classList.add('current');
//   } else {
//     slides[0].classList.add('current');
//   }
//   current.classList.remove('current');
// };

// if (auto) {
//   slideInterval = setInterval(slideNext, intervalTime);
// }
