import { renderMarkUpIngredients } from "./createMarkup";
const BASE_URL = 'https://drinkify.b.goit.study/api/v1/ingredients/';

import local from "./local";
import axios from 'axios';

import { getIngredients } from "./fetch-ingredient";

const notFoundContainer = document.querySelector('.not-found-container')

const ingredientsGallery = document.querySelector('.ingredients-gallery')



function createMarkupIngredients(id) {
   const render = map(`<li class="ingredient-card">
    <h2 class="ingredient-header">${title}</h2>
    <p class="alcoholic-ing">Alcoholic</p>
    <p class="ingredient-description">
      ${description}
    </p>
    <div class="ingredient-btns">
      <button class="ingredient-learn-more-btn learn-more-btn" data-id="${_id}">learn more</button>
      <button class="delete-btn" data-id="${_id}">
        <svg class="delete-icon width="18" height="18">
         <use href="../img/icons.svg#icon-trash-01"></use>
        </svg>
      </button>
    </div>
  </li>`
).join('')}

export function renderMarkUpIngredients(arr) {
 ingredientsGallery.innerHTML = '';
  notFoundContainer.classList.add('is-hidden');
  if (!ids || ids.length === 0) {
    notFoundContainer.classList.remove('is-hidden');
  }
  const markup = arr.flatMap(createMarkupIngredients).join('');
  ingredientsGallery.insertAdjacentHTML('beforeend', markup);
}

async function getFavIngredients() {
  try {
    const arrId = local.load('id_ing');
    const promises = arrId.map(id => axios.get(`${BASE_URL}${id}`));

    const arrForRender = await Promise.all(promises);
    const newData = arrForRender.map(el => el.data);

    renderMarkUpIngredients(newData);
  } catch (err) {}
}














