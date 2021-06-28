const popupOpenButton = document.querySelector('#popup-open-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', () => openPopup(popup));
popupCloseButton.addEventListener('click', () => closePopup(popup));
popupForm.addEventListener('submit', () => closePopup(popup));
