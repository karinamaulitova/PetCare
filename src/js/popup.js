const popupOpenButton = document.querySelector('#popup-open-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => handleEscClose(evt, popup));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => handleEscClose(evt, popup));
}

function handleEscClose(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
}

popupOpenButton.addEventListener('click', () => openPopup(popup));
popupCloseButton.addEventListener('click', () => closePopup(popup));
popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popup);
});

popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popup);
  }
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(popup);
  }
});
