import { refsM } from './favorite-cocktails/refsM';
import searchMarkup from '../templates/searchMarkup.hbs';
import { createPagination } from './main/pagination/pagination.js';
import refs from './hero/refs';

export function renderMarkupCard(page, cardPerPage, arr, list, listPag) {
  let firstIndex = (page - 1) * cardPerPage;
  let lastIndex = firstIndex + cardPerPage;
  const pageLimit = arr.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(arr.length / cardPerPage);

  createPagination(totalPages, page, arr, list, listPag);

const logo = new URL('../img/icons.svg#icon-heart', import.meta.url);
const icon = '#icon-heart';

  const favs = JSON.parse(localStorage.getItem('cocktails')) || [];

  list.innerHTML = pageLimit
    .map(item => {
      const drink = item.drink.split(" ").join("+");
      const notActive = favs?.some(itemLS => itemLS._id === item._id)
        ? 'button-add-fav-active'
        : '';

      return `        
         <li class="cocktail-item karina-dark-theme-bg">
            <img class="cocktail-img" src=${item.drinkThumb} alt="${item.drink.slice(0.17)}">
            <h3 class="cocktail-title karina-dark-theme">${item.drink}</h3>
            <p class="cocktail-description karina-dark-theme">${
              item.description
            }</p>
            <div class="button-div">
            <button data-value=${
              drink
            } class="button-learn-more karina-dark-theme-bg karina-dark-theme">LEARN MORE</button>
          <button data-value=${item._id} class="button-add-fav ${notActive}">
          <svg class="icon-add-fav"><use href=${
            logo.pathname + icon
          }></use></svg>
        </svg></button>
            </div>
           </li>
          
          `;
    })
    .join('');
}
