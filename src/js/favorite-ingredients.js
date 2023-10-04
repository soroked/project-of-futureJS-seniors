import {
  addToFavorites,
  removeFromFavoritesByIndex,
} from './localstorage-fav-ingredients';
import { renderMarkupCardIng } from './createMarkup';

const notFoundContainer = document.querySelector('.not-found-container');
const ingredientsGallery = document.querySelector('.ingredients-gallery');
const listPag = document.querySelector('.pagination-list-ing');

let page = 1;

const bodyEl = document.body;
const colorSwitcher = document.getElementById('themeSwitch');
if (
  localStorage.getItem('switcher') === 'light' ||
  !localStorage.getItem('switcher')
) {
  colorSwitcher.checked = false;
} else {
  colorSwitcher.checked = true;
  bodyEl.classList.toggle('dark');
  colorSwitcher.classList.add('dark');
}
colorSwitcher.addEventListener('click', () => {
  colorSwitcher.classList.toggle('dark');
  bodyEl.classList.toggle('dark');
  if (
    localStorage.getItem('switcher') === 'light' ||
    !localStorage.getItem('switcher')
  ) {
    localStorage.setItem('switcher', 'dark');
  } else {
    localStorage.setItem('switcher', 'light');
  }
});

let ingredients = JSON.parse(localStorage.getItem('favorites'));

if (ingredients.length === 0) {
  notFoundContainer.classList.remove('fav-ingr-is-hidden');
} else {
  notFoundContainer.classList.add('fav-ingr-is-hidden');

  renderMarkupCardIng(page, 6, ingredients, ingredientsGallery, listPag);
}

ingredientsGallery.addEventListener('click', onDeleteButtonHandler);




function onDeleteButtonHandler(event) {
  ingredients = JSON.parse(localStorage.getItem('favorites'));

  let targetElement = event.target;

  if (targetElement.classList.contains('delete-icon')) {
    targetElement = targetElement.closest('.delete-btn');
  }

  if (targetElement.classList.contains('add-to-favorites')) {
    const ingredientId = targetElement.getAttribute('data-id');
    const selectedIngredient = ingredients.find(
      ingredient => ingredient._id === ingredientId
    );

    if (selectedIngredient) {
      addToFavorites(selectedIngredient);
    }
  } else if (targetElement.classList.contains('delete-btn')) {
    const ingredientId = targetElement.getAttribute('data-id');
    const selectedIngredientIndex = ingredients.findIndex(
      ingredient => ingredient._id === ingredientId
    );

    if (selectedIngredientIndex !== -1) {
      let ingredientsHasElem = removeFromFavoritesByIndex(
        selectedIngredientIndex
      );
      targetElement.closest('.ingredient-card').remove();
      if (!ingredientsHasElem) {
        notFoundContainer.classList.remove('fav-ingr-is-hidden');
      }
    }
  } else if (targetElement.classList.contains('learn-more-btn')) {
    const ingredientId = targetElement.getAttribute('data-id');
  }
}

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// async function getIngredientsFromAPI() {

