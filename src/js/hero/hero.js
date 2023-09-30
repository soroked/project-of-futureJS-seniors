import { getCocktails } from '../swagger-api.js';
import { renderMarkupCard } from '../renderMarkupCard.js';
import { updateValueBasedOnScreenWidth } from '../main/pagination/updateValueBasedOnScreenWidth.js';
import debounce from 'debounce';
import { listPag } from '../main/pagination/pagination.js';

export const refs = {
  form: document.querySelector('.hero-search-form'),
  input: document.querySelector('.hero-form-input'),
  list: document.querySelector('.hero-search-cards'),
  searchButtonWrapper: document.querySelector('.button-search-wrapper-js'),
  searchButton: document.querySelector('.button-search-js'),
};

refs.form.addEventListener('submit', onInputSearch);
refs.searchButtonWrapper.addEventListener('click', onInputSearch);

let page = 1;

window.addEventListener('load', updateValueBasedOnScreenWidth);
window.addEventListener('resize', debounce(updateValueBasedOnScreenWidth, 300));

async function onInputSearch(e) {
  e.preventDefault();
  let searchQuery = null;

  if (e.target.nodeName === 'BUTTON') {
    searchQuery = e.target.dataset.value;
  } else if (e.currentTarget.nodeName === 'DIV') {
    searchQuery = e.target.dataset.value;
  } else {
    searchQuery = e.currentTarget.elements.search.value.trim();
  }

  try {
    const response = await getCocktails(searchQuery);

    let arr = [];
    arr.push(response.data);
    renderMarkupCard(page, cardPerPage, ...arr);
  } catch (error) {
    listPag.innerHTML = '';
    const logo = new URL('../../img/hero/Group 11.png', import.meta.url);
    refs.list.innerHTML = `<div class="error-img-container">
    <img class="hero-error-img" src="${logo}" alt="cocktails" >
    <p class="error-text hero-dark">Sorry, we <span class="hero-title-accent">we didn’t</span> any cocktail for you</p>
    </div>`;
  } finally {
    refs.form.reset();
  }
}
