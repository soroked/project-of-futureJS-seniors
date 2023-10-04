import axios from 'axios';
const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_INGREDIENTS = 'ingredients/';
import { getCocktails } from '../swagger-api.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {
  addToFavorites,
  removeFromFavoritesByIndex,
} from '../localstorage-fav-ingredients.js';

const iconOff = new URL('../../img/icons.svg#icon-x', import.meta.url);
const iconX = '#icon-x';

function getIngredients(queryId) {
  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS + `${queryId}`);
}

// MODAL TEXT

let abd = '';

export function modalInstanceCoctail(query) {
  if (abd === query) {
    return;
  }
  abd = query;

  getCocktails(query).then(response => {
    const ingridientsMarkup = response.data[0].ingredients
      .map(
        item =>
          `<li class="item-modal-coctail-ingridients mw-text-third-dark" data-value=${item.ingredientId}>
                    <p class="link-modal-coctail-ingridient mw-text-third-dark">
                    ${item.title}
                    </p>
                    </li>`
      )
      .join('');

    let favs = JSON.parse(localStorage.getItem('cocktails')) || [];
    let addOrDelete = 'ADD TO FAVORITE';
    addOrDelete = favs?.some(item => item._id === response.data[0]._id)
      ? 'REMOVE FROM FAVORITE'
      : 'ADD TO FAVORITE';

    const modalInstanceCoctail = basicLightbox.create(
      `
                    <div class="modal-coctail mw-modal-dark">
                    <div class="photo-card-coctail dark-photo-card-coctail">
                    <div class="photo-info">
                    <img class="photo-coctail" src="${response.data[0].drinkThumb}" alt="" title="" height="277" loading="lazy"/>
                    <div class="info-modal-coctail">
                    
                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">${response.data[0].drink}</h2>

                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>

                    <p class="text-modal-coctail-type mw-text-secondary-dark">Per cocktail</p>

                    <ul class="list-modal-coctail-ingridients">` +
        ingridientsMarkup +
        `</ul>
                     </div></div>
                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>
                    
                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">
                    ${response.data[0].instructions}
                    </p>
                    <div class="buttons">
                    <button class="add-btn-modal-coctail" data-value=${
                      response.data[0]._id
                    }>${addOrDelete}</button>
                    <button class="back-btn-modal-coctail mw-text-first-dark mw-btn-dark">Back</button>
                    </div>
                    <button type="button" class="modal-coctail-close-btn">
            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=${
              iconOff.pathname + iconX
            }></use></svg>
          </button>
                    </div>
                    </div>
                    `
    );

    // RENDER

    modalInstanceCoctail.show();

    // Add id for General modal window
    const modal = document.querySelector('.basicLightbox');
    modal.id = 'general';

    const addToFavorite = document.querySelector('.add-btn-modal-coctail');
    addToFavorite.addEventListener('click', onAddBtn);
    const heartButton = document.querySelector('button-add-fav');
    console.log(heartButton);

    function onAddBtn(e) {
      if (
        e.target.nodeName === 'BUTTON' ||
        e.target.classList.contains('add-button-modal-coctail')
      ) {
        const id = e.target.dataset.value;
        const cocktail = response.data[0];
        favs = JSON.parse(localStorage.getItem('cocktails')) || [];

        const index = favs.findIndex(item => item._id === id);

        if (index < 0) {
          favs.push(cocktail);
          addToFavorite.innerHTML = 'REMOVE FROM FAVORITE';
          localStorage.setItem('cocktails', JSON.stringify(favs));
          return;
        }
        favs.splice(index, 1);
        addToFavorite.innerHTML = 'ADD TO FAVORITE';
        localStorage.setItem('cocktails', JSON.stringify(favs));
      }
    }

    const linkModalCoctail = document.querySelector(
      '.list-modal-coctail-ingridients'
    );

    const backBtnModalCoctail = document.querySelector(
      '.back-btn-modal-coctail'
    );
    const modalCoctailCloseBtn = document.querySelector(
      '.modal-coctail-close-btn'
    );
    const modalCoctail = document.querySelector('.modal-coctail');

    // RENDER INGREDIENTS
    function handleLinkOpenModalIngridient(e) {
      e.preventDefault();

      if (
        e.target.parentElement.classList.contains(
          'item-modal-coctail-ingridients'
        )
      ) {
        const queryId = e.target.closest('.item-modal-coctail-ingridients')
          .dataset.value;

        modalCoctail.classList.add('is-hidden-modal');

        //   modal.style.background = '#0000';

        getIngredients(queryId).then(resp => {

          let favsIngredients = JSON.parse(localStorage.getItem('favorites')) || [];
          console.log(favsIngredients);
          let addOrDeleteIngredient = 'ADD TO FAVORITE';
          addOrDeleteIngredient = favsIngredients?.some(item => item._id === resp.data[0]._id)
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

          const addToFavoriteIngredient = document.querySelector('.add-btn-modal-ingridient');
          addToFavoriteIngredient.addEventListener('click', onAddBtnIngredient);
          // const heartButton = document.querySelector('button-add-fav');
          // console.log(heartButton);

          function onAddBtnIngredient(e) {
            if (
              e.target.nodeName === 'BUTTON' ||
              e.target.classList.contains('add-btn-modal-ingridient')
            ) {
              const id = e.target.dataset.value;
              const ingredient = resp.data[0];
              favsIngredients = JSON.parse(localStorage.getItem('favorites')) || [];

              const index = favsIngredients.findIndex(item => item._id === id);

              if (index < 0) {
                favsIngredients.push(ingredient);
                addToFavoriteIngredient.innerHTML = 'REMOVE FROM FAVORITE';
                localStorage.setItem('favorites', JSON.stringify(favsIngredients));
                return;
              }
              favsIngredients.splice(index, 1);
              addToFavoriteIngredient.innerHTML = 'ADD TO FAVORITE';
              localStorage.setItem('favorites', JSON.stringify(favsIngredients));
              return;
            }
          }

          const backBtnModalIngridient = document.querySelector(
            '.back-btn-modal-ingridient'
          );
          const modalIngredientCloseBtn = document.querySelector(
            '.modal-ingredient-close-btn'
          );

          const addBtnModalIngredient = document.querySelector(
            '.add-btn-modal-ingridient'
          );

          // addBtnModalIngredient.addEventListener('click', e => {
          //   addToFavorites(resp.data[0]);
          // });

          function modalCloseIngridient() {
            modalInstanceIngridient.close();
            modalCoctail.classList.remove('is-hidden-modal');
            // modal.style.background = '#000c';
          }
          backBtnModalIngridient.addEventListener(
            'click',
            modalCloseIngridient
          );
          modalIngredientCloseBtn.addEventListener(
            'click',
            modalCloseIngridient
          );
        });
      }
    }

    function modalCloseCoctail() {
      modalInstanceCoctail.close();
    }
    linkModalCoctail.addEventListener('click', handleLinkOpenModalIngridient);
    backBtnModalCoctail.addEventListener('click', modalCloseCoctail);
    modalCoctailCloseBtn.addEventListener('click', modalCloseCoctail);
  });
}
