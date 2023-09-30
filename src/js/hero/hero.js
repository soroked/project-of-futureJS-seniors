import { getCocktails } from '../swagger-api.js';
import { renderMarkupCard } from './renderMarkupCard.js';

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
let cardPerPage = 8;

async function onInputSearch(e) {
  e.preventDefault();
  let searchQuery = null;

  if (e.target.nodeName === 'BUTTON') {
    searchQuery = e.target.dataset.value;
  } else if (e.currentTarget.nodeName === 'DIV') {
    searchQuery = e.target.dataset.value;
  } else {
    searchQuery = e.currentTarget.elements.search.value.toLowerCase().trim();
  }

  try {
    const response = await getCocktails(searchQuery);

    let arr = [];
    arr.push(response.data);

    renderMarkupCard(page, cardPerPage, ...arr);
  } catch (error) {
    refs.list.innerHTML = '';
  } finally {
    refs.form.reset();
  }
}
