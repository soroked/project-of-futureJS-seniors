import axios from 'axios';
const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_INGREDIENTS = 'ingredients/';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function getIngredients(queryId) {
  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS + `${queryId}`);
}

const iconOff = new URL('../../img/icons.svg#icon-x', import.meta.url);
const iconX = '#icon-x';

// MODAL TEXT

export function modalIngidient(queryId) {
  getIngredients(queryId).then(resp => {
    let favsIngredients = JSON.parse(localStorage.getItem('favorites')) || [];
    let addOrDeleteIngredient = 'ADD TO FAVORITE';
    addOrDeleteIngredient = favsIngredients?.some(
      item => item._id === resp.data[0]._id
    )
      ? 'REMOVE FROM FAVORITE'
      : 'ADD TO FAVORITE';

    const modalInstanceIngridient = basicLightbox.create(`
                    <div class="modal-ingredient mw-modal-dark">
                    <div class="ingridient-card">
                    <h2 class="title-modal-ingridient mw-text-main-dark">${
                      resp.data[0].title
                    }</h2>
                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">${
                      resp.data[0].type
                    }</p>
                    <div class="line mw-btn-dark"> </div>
                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">${
                      resp.data[0].title
                    }</span> ${resp.data[0].description}</p>
                    <ul class="list-modal-ingridients ">
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">Type: ${
                      resp.data[0].type
                    }</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">
                    Country of origin: ${resp.data[0].country}</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ${
                      resp.data[0].abv
                    }</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">Flavour: ${
                      resp.data[0].flavour
                    }</p>
                    </li>
                    </ul>
                    </div>
                    <div class="buttons">
                    <button class="add-btn-modal-ingridient" data-value=${
                      resp.data[0]._id
                    }>${addOrDeleteIngredient}</button>
                    <button class="back-btn-modal-ingridient mw-text-first-dark mw-btn-dark">Back</button>
                    </div>
                    <button type="button" class="modal-ingredient-close-btn">
            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=${
              iconOff.pathname + iconX
            }></use></svg>
          </button>
                    </div></div>
                    
                    `);
    modalInstanceIngridient.show();

    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    let addOrDelete = 'ADD TO FAVORITE';
    addOrDelete = favs?.some(item => item._id === resp.data[0]._id)
      ? 'REMOVE FROM FAVORITE'
      : 'ADD TO FAVORITE';

    const addToFavorite = document.querySelector('.add-btn-modal-ingridient');

    addToFavorite.addEventListener('click', onAddBtn);

    function onAddBtn(e) {
      if (
        e.target.nodeName === 'BUTTON' ||
        e.target.classList.contains('add-btn-modal-ingredient')
      ) {
        const id = e.target.dataset.value;
        const cocktail = resp.data[0];
        favs = JSON.parse(localStorage.getItem('favorites')) || [];

        const index = favs.findIndex(item => item._id === id);

        if (index < 0) {
          favs.push(cocktail);
          addToFavorite.innerHTML = 'REMOVE FROM FAVORITE';
          localStorage.setItem('favorites', JSON.stringify(favs));
          return;
        }
        favs.splice(index, 1);
        addToFavorite.innerHTML = 'ADD TO FAVORITE';
        localStorage.setItem('favorites', JSON.stringify(favs));
      }
    }

    const addBtnModalIngridient = document.querySelector(
      '.add-btn-modal-ingridient'
    );

    const backBtnModalIngridient = document.querySelector(
      '.back-btn-modal-ingridient'
    );
    const modalIngredientCloseBtn = document.querySelector(
      '.modal-ingredient-close-btn'
    );
    function modalCloseIngridient() {
      modalInstanceIngridient.close();
    }
    backBtnModalIngridient.addEventListener('click', modalCloseIngridient);
    modalIngredientCloseBtn.addEventListener('click', modalCloseIngridient);
  });
}

const ingredientGalleryModal = document.querySelector('.ingredients-gallery');

ingredientGalleryModal.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  if (
    e.target.nodeName !== 'BUTTON' ||
    e.target.classList.contains('delete-btn')
  ) {
    return;
  } else {
    modalIngidient(e.target.dataset.id);
  }
}
