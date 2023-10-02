import { getCocktails } from '../swagger-api.js';
import { renderMarkupCard } from '../renderMarkupCard.js';
import { updateValueBasedOnScreenWidth } from '../main/pagination/updateValueBasedOnScreenWidth.js';
import debounce from 'debounce';
import { listPag } from '../main/pagination/pagination.js';
import refs from './refs.js';
import { markupError } from './markupError.js';

// refs.form.addEventListener('submit', onInputSearch);
// refs.searchDropdown.addEventListener('click', onInputSearch);

let page = 1;

window.addEventListener('load', updateValueBasedOnScreenWidth);
window.addEventListener('resize', debounce(updateValueBasedOnScreenWidth, 300));

window.addEventListener('load', onInputSearch);

async function onInputSearch(e) {
  e.preventDefault();
  let searchQuery = '';

  if (e.target.classList?.contains('button-list-js')) {
    return;
  }

  if (e.target.nodeName === 'BUTTON') {
    searchQuery = e.target.dataset.value;
  } else if (e.target.nodeName === 'FORM'){
    searchQuery = e.currentTarget.elements?.search.value.trim();
  }

  try {
    const response = await getCocktails(searchQuery);

    let arr = [];
    arr.push(response.data);
    renderMarkupCard(page, updateValueBasedOnScreenWidth(), ...arr);
  } catch (error) {
    listPag.innerHTML = '';
    refs.list.innerHTML = markupError;
  } finally {
    refs.form.reset();
    refs.buttonSpan.innerHTML = 'A';
  }
}
