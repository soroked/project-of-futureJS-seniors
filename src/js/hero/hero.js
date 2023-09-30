import { getCocktails } from '../swagger-api.js';
import { renderMarkupCard } from '../renderMarkupCard.js';
import { updateValueBasedOnScreenWidth } from '../main/pagination/updateValueBasedOnScreenWidth.js';
import debounce from 'debounce';
import { listPag } from '../main/pagination/pagination.js';
import refs from './refs.js';
import { markupError } from './markupError.js';

refs.form.addEventListener('submit', onInputSearch);
<<<<<<< Updated upstream
refs.searchButtonWrapper.addEventListener('click', onInputSearch);
=======
refs.searchDropdown.addEventListener('click', onInputSearch);

>>>>>>> Stashed changes
let page = 1;

window.addEventListener('load', updateValueBasedOnScreenWidth);
window.addEventListener('resize', debounce(updateValueBasedOnScreenWidth, 300));

async function onInputSearch(e) {
  e.preventDefault();
  let searchQuery = null;

  if (e.target.classList.contains('button-list-js')) {
    return;
  }

  if (e.target.nodeName === 'BUTTON') {
    searchQuery = e.target.dataset.value;
<<<<<<< Updated upstream
  } else if (e.currentTarget.nodeName === 'DIV') {
    searchQuery = e.target.dataset.value;
=======
>>>>>>> Stashed changes
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
    refs.list.innerHTML = markupError;
  } finally {
    refs.form.reset();
    refs.buttonSpan.innerHTML = 'A';
  }
}
