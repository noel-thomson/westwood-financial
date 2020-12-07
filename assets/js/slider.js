const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;
//
const headers = document.querySelectorAll('.slide-content h1');
let count = 0;

headers[0].classList.add('active');
let height = headers[0].clientHeight + 10;
headers[0].style.top = `-${height}px`;

const slideNext = () => {
  let active = headers[count];
  active.classList.remove('active');
  count >= headers.length - 1 ? (count = 0) : count++;
  active = headers[count];
  let height = active.clientHeight + 10;
  active.classList.add('active');
  active.style.top = `-${height}px`;
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
