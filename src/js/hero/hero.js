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

    function renderCards(page) {
      let firstIndex = (page - 1) * cardPerPage;
      let lastIndex = firstIndex + cardPerPage;
      const pageLimit = response.data.slice(firstIndex, lastIndex);

      return (refs.list.innerHTML = searchMarkup(pageLimit));
    }
    renderCards(page);
  } catch (error) {
    refs.list.innerHTML = '';
  } finally {
    refs.form.reset();
  }
}
