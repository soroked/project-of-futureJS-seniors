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

function getIngredients(queryId) {
  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS + `${queryId}`);
}

// modalInstanceCoctail('155 Belmont')
// MODAL TEXT

let abd = '';

export function modalInstanceCoctail(query) {
  if (abd === query) {
    return;
  }
  abd = query;

  getCocktails(query).then(response => {
    console.log('asd');

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
    console.log(addOrDelete);

    const modalInstanceCoctail = basicLightbox.create(
      `
                    <div class="modal modal-coctail mw-modal-dark">
                    <div class="photo-card-coctail dark-photo-card-coctail">
                    <div class="photo-info">
                    <img class="photo-coctail" src="${response.data[0].drinkThumb}" alt="" title="" height="277" loading="lazy"/>
                    <div class="info-modal-coctail">
                    
                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">${response.data[0].drink}</h2>

                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>

                    <p class="text-modal-coctail-type">Per cocktail</p>

                    <ul class="list-modal-coctail-ingridients">` +
        ingridientsMarkup +
        `</ul>
                     </div></div>
                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>
                    
                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">
                    ${response.data[0].instructions}
                    </p>
                    <div class="buttons">
                    <button class="add-btn-modal-coctail" data-value=${response.data[0]._id}>${addOrDelete}</button>
                    <button class="back-btn-modal-coctail mw-text-main-dark mw-btn-dark">Back</button>
                    </div>
                    </div>
                    </div>
                    `
    );

    // RENDER
    modalInstanceCoctail.show();

    const addToFavorite = document.querySelector('.add-btn-modal-coctail');
    addToFavorite.addEventListener('click', onAddBtn);
    const heartButton = document.querySelector('button-add-fav');

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

    // Add listeners for window
    //   const linkModalCoctail = document.querySelector(
    //     '.link-modal-coctail-ingridient'
    //     );
    const linkModalCoctail = document.querySelector(
      '.list-modal-coctail-ingridients'
    );

    const backBtnModalCoctail = document.querySelector(
      '.back-btn-modal-coctail'
    );
    const modalCoctail = document.querySelector('.modal-coctail');
    console.log('hi');
    console.log(linkModalCoctail);

    // RENDER INGREDIENTS
    function handleLinkOpenModalIngridient(e) {
      e.preventDefault();
      console.log('START');
      console.dir(
        e.target.parentElement.classList.contains(
          'item-modal-coctail-ingridients'
        )
      );

      if (
        e.target.parentElement.classList.contains(
          'item-modal-coctail-ingridients'
        )
      ) {
        const queryId = e.target.closest('.item-modal-coctail-ingridients')
          .dataset.value;

        modalCoctail.classList.add('is-hidden-modal');

        getIngredients(queryId).then(resp => {
          const modalInstanceIngridient = basicLightbox.create(`
                    <div class="modal modal-ingridient mw-modal-dark">
                    <div class="ingridient-card">
                    <h2 class="title-modal-ingridient mw-text-main-dark">${resp.data[0].title}</h2>
                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">${resp.data[0].type}</p>
                    <div class="line mw-btn-dark"> </div>
                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">${resp.data[0].title}</span> ${resp.data[0].description}</p>
                    <ul class="list-modal-ingridients ">
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">Type: ${resp.data[0].type}</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">
                    Country of origin: ${resp.data[0].country}</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ${resp.data[0].abv}</p>
                    </li>
                    <li class="item-modal-ingridients mw-text-third-dark">
                    <p class="text-modal mw-text-third-dark">Flavour: ${resp.data[0].flavour}</p>
                    </li>
                    </ul>
                    </div>
                    <div class="buttons">
                    <button class="add-btn-modal-ingridient">ADD TO FAVORITE</button>
                    <button class="back-btn-modal-ingridient mw-text-main-dark mw-btn-dark ">Back</button>
                    </div>
                    </div></div>
                    `);
          modalInstanceIngridient.show();

          let favsIngr = JSON.parse(localStorage.getItem('favorites')) || [];
          let addOrDelete = 'ADD TO FAVORITE';
          addOrDelete = favsIngr?.some(item => item._id === resp.data[0]._id)
            ? 'REMOVE FROM FAVORITE'
            : 'ADD TO FAVORITE';

          const addToFavoriteIngr = document.querySelector(
            '.add-btn-modal-ingridient'
          );

          addToFavoriteIngr.addEventListener('click', onAddBtn);

          function onAddBtn(e) {
            if (
              e.target.nodeName === 'BUTTON' ||
              e.target.classList.contains('add-btn-modal-ingridient')
            ) {
              const id = resp.data[0]._id;
              const ingr = resp.data[0];
              favsIngr = JSON.parse(localStorage.getItem('favorites')) || [];
              const indexIngr = favsIngr.findIndex(item => item._id === id);
              if (indexIngr < 0) {
                favsIngr.push(ingr);
                addToFavoriteIngr.innerHTML = 'REMOVE FROM FAVORITE';
                localStorage.setItem('favorites', JSON.stringify(favsIngr));
                return;
              }
              favsIngr.splice(indexIngr, 1);
              addToFavoriteIngr.innerHTML = 'ADD TO FAVORITE';
              localStorage.setItem('favorites', JSON.stringify(favsIngr));
            }
          }

          const backBtnModalIngridient = document.querySelector(
            '.back-btn-modal-ingridient'
          );

          // const addBtnModalCoctail = document.querySelector(
          //   '.add-btn-modal-ingridient'
          // );

          // addBtnModalCoctail.addEventListener('click', e => {
          //   addToFavorites(resp.data[0]);
          // });

          function modalCloseIngridient() {
            modalInstanceIngridient.close();
            modalCoctail.classList.remove('is-hidden-modal');
          }
          backBtnModalIngridient.addEventListener(
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
  });
}

// onFavoriteIngridientCheck();

// onFavoriteCoctailCheck();

// function onFavoriteCoctailCheck() {
//   const addBtnModalCoctail = document.querySelector(`add-btn-modal-coctail`);
//   //якщо коктейль в списку
//   if (favoriteCoctail.includes(query)) {
//     addBtnModalCoctail.textContent = 'remove from favorite'; //змінити текст кнопки
//     return;
//   }
//   addBtnModalCoctail.textContent = 'add to favorite'; //змінити текст кнопки
// }

// function onFavoriteIngridientCheck() {
//   const addBtnModalIngridient = document.querySelector(
//     '.add-btn-modal-ingridient'
//   );
//   if (favoriteIngridient.includes(queryId)) {
//     addBtnModalIngridient.textContent = 'remove from favorite';
//     return;
//   }

//   addBtnModalIngridient.textContent = 'add to favorite';
// }

// const addBtnModalCoctail = document.querySelector(`.add-btn-modal-ingridient`);
// const addBtnModalIngridient = document.querySelector(
//   `.add-btn-modal-ingridient`
// );

// addBtnModalCoctail.addEventListener('click', onBtnCoctailClick);
// addBtnModalIngridient.addEventListener('click', onBtnIngridientClick);

// function onBtnCoctailClick() {
//   //якщо коктейль вже в списку
//   if (favoriteCoctail.includes(query)) {
//     favoriteCoctail.splice(favoriteCoctail.indexOf(query), 1); //видаляємо з масиву коктейль
//     setFavoriteCoctail(favoriteCoctail); //перезаписуємо сховище
//     addBtnModalCoctail.textContent = 'add to favorite'; //змінити текст кнопки
//     if (PAGE_OPEN === 1) {
//       renderList(watched); //оновлюємо сторінку
//     }
//   }

//   favoriteCoctail.push(query); //додати в масив коктейль
//   setFavoriteCoctail(query); //записати в сховище
//   addBtnModalCoctail.textContent = 'remove from favorite'; //змінити текст кнопки
//   if (PAGE_OPEN === 1) {
//     renderList(watched); //оновлюємо сторінку
//   }
// }

// function onBtnIngridientClick() {
//   if (favoriteIngridient.includes(queryId)) {
//     favoriteIngridient.splice(favoriteIngridient.indexOf(queryId), 1);
//     setFavoriteIngridient(favoriteIngridient); //перезаписуємо сховище
//     onBtnIngridientClick.textContent = 'add to favorite'; //змінити текст кнопки
//     if (PAGE_OPEN === 2) {
//       renderList(favoriteIngridient); //оновлюємо сторінку
//     }

//     return;
//   }

//   favoriteIngridient.push(queryId);
//   setFavoriteIngridient(favoriteIngridient);
//   onBtnIngridientClick.textContent = 'remove from favorite';
//   if (PAGE_OPEN === 2) {
//     renderList(favoriteIngridient); //оновлюємо сторінку
//   }
// }
