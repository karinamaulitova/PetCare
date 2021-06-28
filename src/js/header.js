var pageHeader = document.querySelector('.header');
var menuButton = document.querySelector('.header__menu-button');
var closeMenuButton = document.querySelector('.navigation__close-button');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.add('header_menu-open');
});

closeMenuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.remove('header_menu-open');
});
