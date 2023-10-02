import { refs } from './hero/hero';
import searchMarkup from '../templates/searchMarkup.hbs';
import { createPagination } from './main/pagination/pagination.js';
import refs from './hero/refs';

export function renderMarkupCard(page, cardPerPage, arr) {
  let firstIndex = (page - 1) * cardPerPage;
  let lastIndex = firstIndex + cardPerPage;
  const pageLimit = arr.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(arr.length / cardPerPage);
  createPagination(totalPages, page, arr);

  const logo = new URL('../img/icons.svg#icon-heart', import.meta.url);
  const icon = "#icon-heart"

  refs.list.innerHTML = pageLimit.map(
        item =>
        
          `        
         <li class="cocktail-item hero-dark">
            <img class="cocktail-img" src=${item.drinkThumb} alt=${item.drink}>
            <h3 class="cocktail-title hero-dark">${item.drink}</h3>
            <p class="cocktail-description hero-dark">${item.description}</p>
            <div class="button-div">
            <button data-value=${item.drink} class="button-learn-more hero-dark">LEARN MORE</button>
          <button data-value=${item._id} class="button-add-fav">
          <svg class="icon-add-fav"><use href=${logo.pathname+icon}></use></svg>
        </svg></button>
            </div>
           </li>
          
          `
      )
      .join('');
}
