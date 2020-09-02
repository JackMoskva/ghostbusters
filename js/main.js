let page = document.querySelector('.page');
let themeBtn = document.querySelector('.theme-btn');

themeBtn.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
}


const mMenuBtn = document.querySelector('.btn-burger');
const mMenu = document.querySelector('.m-menu');

mMenuBtn.onclick = function () {
  mMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1,
      navigation: {
        nextEl: '.btn-next',
      }
    }
  }
});

const filterCard = document.querySelectorAll('.card');
let castTitle = document.querySelectorAll('.cast-title');

document.querySelector('.cast-tabs').addEventListener('click', event => {

  if (event.target.tagName !== 'H2') return false;
  let filterClass = event.target.dataset['filter'];

  filterCard.forEach(elem => {
    elem.classList.remove('hide');

    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});

for (let i = 0; i < castTitle.length; i++) {
  castTitle[i].addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < castTitle.length; j++) {
      castTitle[j].classList.remove('active');
    }
    castTitle[i].classList.add('active');
  });
}