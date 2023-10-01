import axios from 'axios';
const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_INGREDIENTS = 'ingredients/';
import { getCocktails } from '../swagger-api.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {
  favoriteCoctail,
  favoriteIngridient,
  getFavoriteCoctail,
  getFavoriteIngridient,
  setFavoriteCoctail,
  setFavoriteIngridient,
} from './local-storage';
function getIngredients(queryId) {
  //   return axios.get(
  //     `https://drinkify.b.goit.study/api/v1/ingredients/64aebb7f82d96cc69e0eb4a5`
  //   );
  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS + `${queryId}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    btnLearnMore: document.querySelector('.btn'),
  };

  const query = 'Lazy Coconut Paloma';

  function handleBtnOpenModalCoctail(event) {
    event.preventDefault();
    if (event.target.nodeName === 'BUTTON') {
      getCocktails(query).then(response => {
        console.log(response);

        // MODAL TEXT
        const modalInstanceCoctail = basicLightbox.create(`
                    <div class="modal modal-coctail">
                    <div class="photo-card-coctail photo-card-coctail dark-photo-card-coctail">
                    <div class="photo-info photo-info-dark">
                    <img class="photo-coctail" src="${response.data[0].drinkThumb}" alt="" title="" height="'277" loading="lazy" class="image-coctail" />
                    <div class="info-modal-coctail">
                    <h2 class="main-title-modal-coctail">${response.data[0].drink}</h2>
                    <p2 class="title-modal-coctail-categories">INGREDIENTS:</p2>
                    <p class="text-modal-coctail-type">Per cocktail</p>
                    <ul class="list-modal-coctail-ingridients">
                    <li class="item-modal-coctail-ingridients">
                    <p class="link-modal-coctail-ingridient" id=${response.data[0].ingredients[0].ingredientId} >
                    ${response.data[0].ingredients[0].title}
                    </p>
                    </li>
                    <li class="item-modal-coctail-ingridients">
                    <p class="link-modal-coctail-ingridient" id=${response.data[0].ingredients[1].ingredientId} >
                    ${response.data[0].ingredients[1].title}
                    </p>
                    </li>
                    <li class="item-modal-coctail-ingridients">
                    <p class="link-modal-coctail-ingridient" id=${response.data[0].ingredients[2].ingredientId} >
                    ${response.data[0].ingredients[2].title}
                    </p>
                    </li>
                    </ul>
                     </div></div>
                    <p class="title-modal-coctail-categories">INSTRUCTIONS:</p>
                    
                    <p class="paragrapg-modal-coctail">
                    ${response.data[0].instructions}
                    </p>
                    <div class="modal modal-coctail">
                    <button class="add-btn-modal-coctail">ADD TO FAVORITE</button>
                    <button class="back-btn-modal-coctail">Back</button>
                    </div>
                    </div>
                    </div>
                    `);

        // RENDER
        modalInstanceCoctail.show();

        // Add listeners for window
        const linkModalCoctail = document.querySelector(
          '.link-modal-coctail-ingridient'
        );
        const modalCoctail = document.querySelector('.modal-coctail');
        console.log('hi');
        console.log(linkModalCoctail);
        //const list = document.querySelector('.modal');

        // RENDER INGREDIENTS
        function handleLinkOpenModalIngridient(e) {
          e.preventDefault();
          console.log('START');
          const queryId = '64f1d5dc69d8333cf130fd36';
          if (e.target.classList.contains('link-modal-coctail-ingridient')) {
            // console.log(
            //   e.target.closest['.link-modal-coctail-ingridient'].dataset
            // );
            console.log(queryId);
            console.log('hoorey');

            modalCoctail.classList.add('is-hidden');

            //const queryId = event.target.ingredientId;

            getIngredients(queryId).then(resp => {
              console.log(resp);

              const modalInstanceIngridient = basicLightbox.create(`
                    <div class="modal modal-ingridient">
                    <div class="ingridient-card">
                    <h2 class="title-modal-ingridient">${resp.data[0].title}</h2>
                    <p class="type-ingridient-modal-ingridient">${resp.data[0].type}</p>
                    <div class="line"> </div>
                    <p class="paragraph-modal-ingridient"><span class="span-paragraph-modal-ingridient">${resp.data[0].title}</span> ${resp.data[0].description}</p>
                    <ul class="list-modal-ingridients">
                    <li class="item-modal-ingridients">
                    <p class="text-modal">Type: ${resp.data[0].type}</p>
                    </li>
                    <li class="item-modal-ingridients">
                    <p class="text-modal">
                    Country of origin: ${resp.data[0].country}</p>
                    </li>
                    <li class="item-modal-ingridients">
                    <p class="text-modal"> Alcohol by volume: ${resp.data[0].abv}</p>
                    </li>
                    <li class="item-modal-ingridients">
                    <p class="text-modal">Flavour: ${resp.data[0].flavour}</p>
                    </li>
                    </ul>
                    </div>
                    <button class="add-btn-modal-ingridient">ADD TO FAVORITE</button>
                    <button class="back-btn-modal-ingridient">Back</button>
                    </div>
                    </div>
                    `);
              modalInstanceIngridient.show();

              const onTargetEscapeKeydown = evt => {
                if (evt.key === 'Escape') {
                  modalInstanceIngridient.close();
                  modalCoctail.classList.remove('is-hidden');
                  document.removeEventListener(
                    'keydown',
                    onTargetEscapeKeydown
                  );
                }
              };
            });
          }
        }
        linkModalCoctail.addEventListener(
          'click',
          handleLinkOpenModalIngridient
        );
      });
    }
  }

  //=====================Escape====================
  //  const onTargetEscapeKeydown = (event) => {
  //         if (event.key === 'Escape') {
  //             modalInstance.close();
  //             document.removeEventListener('keydown', onTargetEscapeKeydown);
  //         };
  //     };
  // document.addEventListener('keydown', onTargetEscapeKeydown);
  //}

  refs.btnLearnMore.addEventListener('click', handleBtnOpenModalCoctail);

  //-------------------перевірка кнопок----------------------
  onFavoriteCoctailCheck();
  onFavoriteIngridientCheck();

  function onFavoriteCoctailCheck() {
    const addBtnModalCoctail = document.querySelector(`add-btn-modal-coctail`);
    //якщо коктейль в списку
    if (favoriteCoctail.includes(query)) {
      addBtnModalCoctail.textContent = 'remove from favorite'; //змінити текст кнопки
      return;
    }
    addBtnModalCoctail.textContent = 'add to favorite'; //змінити текст кнопки
  }

  function onFavoriteIngridientCheck() {
    const addBtnModalIngridient = document.querySelector(
      '.add-btn-modal-ingridient'
    );
    if (favoriteIngridient.includes(queryId)) {
      addBtnModalIngridient.textContent = 'remove from favorite';
      return;
    }

    addBtnModalIngridient.textContent = 'add to favorite';
  }

  const addBtnModalCoctail = document.querySelector(
    `.add-btn-modal-ingridient`
  );
  const addBtnModalIngridient = document.querySelector(
    `.add-btn-modal-ingridient`
  );

  addBtnModalCoctail.addEventListener('click', onBtnCoctailClick);
  addBtnModalIngridient.addEventListener('click', onBtnIngridientClick);

  function onBtnCoctailClick() {
    //якщо коктейль вже в списку
    if (favoriteCoctail.includes(query)) {
      favoriteCoctail.splice(favoriteCoctail.indexOf(query), 1); //видаляємо з масиву коктейль
      setFavoriteCoctail(favoriteCoctail); //перезаписуємо сховище
      addBtnModalCoctail.textContent = 'add to favorite'; //змінити текст кнопки
      if (PAGE_OPEN === 1) {
        renderList(watched); //оновлюємо сторінку
      }
    }

    favoriteCoctail.push(query); //додати в масив коктейль
    setFavoriteCoctail(query); //записати в сховище
    addBtnModalCoctail.textContent = 'remove from favorite'; //змінити текст кнопки
    if (PAGE_OPEN === 1) {
      renderList(watched); //оновлюємо сторінку
    }
  }

  function onBtnIngridientClick() {
    if (favoriteIngridient.includes(queryId)) {
      favoriteIngridient.splice(favoriteIngridient.indexOf(queryId), 1);
      setFavoriteIngridient(favoriteIngridient); //перезаписуємо сховище
      onBtnIngridientClick.textContent = 'add to favorite'; //змінити текст кнопки
      if (PAGE_OPEN === 2) {
        renderList(favoriteIngridient); //оновлюємо сторінку
      }

      return;
    }

    favoriteIngridient.push(queryId);
    setFavoriteIngridient(favoriteIngridient);
    onBtnIngridientClick.textContent = 'remove from favorite';
    if (PAGE_OPEN === 2) {
      renderList(favoriteIngridient); //оновлюємо сторінку
    }
  }

  addBtnModalCoctail.removeEventListener('click', onBtnCoctailClick);
  onBtnIngridientClick.removeEventListener('click', onBtnIngridientClick);
  window.removeEventListener('click', onWindowClick);
});
