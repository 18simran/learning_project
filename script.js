'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const all = document.getElementsByClassName('btn');
console.log(all);
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we used cookies for better functionality. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.prepend(message);
// header.before(message);
// header.append(message.cloneNode(true));
// header.before(message);
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
//styling
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);
// document.documentElement.style.setProperty('--color-primary', 'orangered');
//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.className);
logo.alt = 'i m a barbie gurl in the barbie world ';
console.log(logo.alt);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.versionNumber);
console.log(logo.dataset.key);
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');

///
const btnScrollTo = document.querySelector('.btn--scroll-to');
console.log(btnScrollTo);
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('curent scroll ( x/y)', window.scrollX, window.scrollY);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  section1.scrollIntoView({ behaviour: 'smooth' });
});

// h1.removeEventListener('mouseenter', alerth1);
//ek hi baar alert message aaega ese

// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);
//event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
  }
});
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabContent.forEach((c) => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
