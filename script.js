'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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
//cookie message🦄
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'we used cookies for better functionality. <button class="btn btn--close-cookie">Got it!</button>';
//   //📖📖📖📖📖📖📖📖📖📖📖📖comment part
// // header.prepend(message);
// // header.prepend(message);
// // header.before(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// header.append(message);
// //📖📖📖📖📖📖📖📖📖📖📖📖comment part up to here
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //styling
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.backgroundColor);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// console.log(getComputedStyle(message).height);
// 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄 cookie message till here
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
//nav link
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//scrolling sticky nav
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
const initialcoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialcoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//INTERSECTIONOBSERVER API
// const obsCallback = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = section1.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //when 0% of header is visible we want something to happen
  rootMargin: `-${navHeight}px`, // only pixels can work
});

//reveal-on-scroll feature using intersectionObserver
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);

  section.classList.add('section--hidden');
});
console.log('Lazy Loading section');
//lazy-loading-images feature
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
const imgTargets = document.querySelectorAll('img[data-src');
imgTargets.forEach((img) => imgObserver.observe(img));
//SLIDER
const leftBtn = document.querySelector('.slider__btn--left');
const rightBtn = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});
const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach((dot) => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
createDots();
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
