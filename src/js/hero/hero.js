import { getCocktails } from '../swagger-api.js';
import searchMarkup from '../../templates/searchMarkup.hbs';
import refs from './refs.js';

refs.form.addEventListener('submit', onInputSearch);
refs.searchButtonWrapper.addEventListener('click', onInputSearch);

let page = 1;
let cardPerPage = 9;

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

    function renderMarkupCard(page) {
      let firstIndex = (page - 1) * cardPerPage;
      let lastIndex = firstIndex + cardPerPage;
      const pageLimit = response.data.slice(firstIndex, lastIndex);

      return (refs.list.innerHTML = searchMarkup(pageLimit));
    }
    renderMarkupCard(page);
  } catch (error) {
    const logo = new URL('../../img/hero/Group 11.png', import.meta.url);
    refs.list.innerHTML = `<div class="error-img-container">
    <img class="hero-error-img" src="${logo}" alt="cocktails" >
    <p class="error-text hero-dark">Sorry, we <span class="hero-title-accent">we didn’t</span> any cocktail for you</p>
    </div>`;
  } finally {
    refs.form.reset();
  }
}
