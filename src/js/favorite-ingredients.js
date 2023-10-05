import {
  addToFavorites,
  removeFromFavoritesByIndex,
} from './localstorage-fav-ingredients';
import { renderMarkupCardIng } from './createMarkup';

const notFoundContainer = document.querySelector('.not-found-container');
const ingredientsGallery = document.querySelector('.ingredients-gallery');
const listPag = document.querySelector('.pagination-list-ing');

let page = 1;

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
  ingredients = JSON.parse(localStorage.getItem('favorites'));
  renderMarkupCardIng(page, 6, ingredients, ingredientsGallery, listPag);
  if (!ingredients.length) {
    location.reload();
  }
}

// async function getIngredientsFromAPI() {
