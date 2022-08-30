const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
let lastScroll = 0;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header--hide');
const containBackground = () => header.classList.contains('header--bg');
const inputHeader = document.querySelector('.header__checkbox');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide()) {
    //scroll down
    header.classList.add('header--hide');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('header--hide');
  }
  lastScroll = scrollPosition();
  if (scrollPosition() > headerHeight && !containBackground()) {
    header.classList.add('header--bg');
  } else if (scrollPosition() < headerHeight && containBackground()) {
    header.classList.remove('header--bg');
  }
})

document.addEventListener('click', (evt) => { 
  if (evt.target.closest('.header__nav') || evt.target.closest('.header__community-link') || evt.target.closest('.header__logo')) {
    inputHeader.checked = false;
    lastScroll = 0;
  }
})




const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
	clickable: true,
  },
   breakpoints: {
  1600: {
	  slidesPerView: 4,
      spaceBetween: 50,
   }
  }
});
