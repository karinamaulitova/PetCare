var pageHeader = document.querySelector('.header');
var menuButton = document.querySelector('.header__menu-button');
var closeMenuButton = document.querySelector('.navigation__close-button');

function openMenu(header) {
  header.classList.add('header_menu-open');
  document.addEventListener('keydown', (evt) => handleEscClose(evt, header));
}

function closeMenu(header) {
  header.classList.remove('header_menu-open');
  document.removeEventListener('keydown', (evt) => handleEscClose(evt, header));
}

function handleEscClose(evt, header) {
  if (evt.key === 'Escape') {
    closeMenu(header);
  }
}

menuButton.addEventListener('click', () => openMenu(pageHeader));
closeMenuButton.addEventListener('click', () => closeMenu(pageHeader));
