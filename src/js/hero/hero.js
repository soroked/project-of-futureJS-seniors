import { getCocktails, getRandomCocktails } from '../swagger-api.js';
import { renderMarkupCard } from '../renderMarkupCard.js';
import { updateValueBasedOnScreenWidth } from '../main/pagination/updateValueBasedOnScreenWidth.js';
import debounce from 'debounce';
import refs from './refs.js';
import { markupError } from './markupError.js';
import { modalInstanceCoctail } from '../main/modal-windows.js';

refs.form.addEventListener('submit', onInputSearch);
refs.searchDropdown.addEventListener('click', onInputSearch);

let page = 1;
let fav = [];
let counter = 0;
window.addEventListener('load', updateValueBasedOnScreenWidth);
window.addEventListener('resize', debounce(updateValueBasedOnScreenWidth, 300));

window.addEventListener('load', onInputSearch);
let random = true;

async function onInputSearch(e) {
  e.preventDefault();
  let searchQuery = '';

  if (e.target.classList?.contains('button-list-js')) {
    return;
  }

  if (e.target.nodeName === 'BUTTON') {
    searchQuery = e.target.dataset.value;
  } else if (e.target.nodeName === 'FORM') {
    searchQuery = e.currentTarget.elements?.search.value.trim();
  }

  try {
    let response = null;
    if (random) {
      response = await getRandomCocktails(updateValueBasedOnScreenWidth());
      random = false;
    } else {
      refs.titileCocktail.innerHTML = 'Searching results';
      response = await getCocktails(searchQuery);
    }
    fav = response.data;

    let arr = [];
    arr.push(response.data);
    renderMarkupCard(
      page,
      updateValueBasedOnScreenWidth(),
      ...arr,
      refs.list,
      refs.listPag,
      refs.titileCocktail
    );

    const onLearnMoreBtn = document.querySelector('.hero-search-cards');
    if(counter === 0){
      function onLearnMore(e) {
        if (e.target.classList.contains('button-learn-more')) {
          const cocktailName = e.target.dataset.value;
  
          return modalInstanceCoctail(cocktailName.replaceAll('+', ' '));
        }
   
      }
      onLearnMoreBtn.addEventListener('click', onLearnMore);
      counter ++;
    }
    
  } catch (error) {
    refs.listPag.innerHTML = '';
    refs.list.innerHTML = markupError;
    refs.titileCocktail.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } finally {
    refs.form.reset();
    refs.buttonSpan.innerHTML = 'A';
  }
}

const heart = document.querySelector('.hero-search-cards');
heart.addEventListener('click', onHeart);

function onHeart(e) {
  if (
    e.target.nodeName === 'use' ||
    e.target.classList.contains('button-add-fav') ||
    e.target.classList.contains('icon-add-fav')
  ) {
    const heartButton = e.target.closest('.button-add-fav');
    const id = heartButton.dataset.value;
    const cocktail = fav.find(item => item._id === id);
    const favs = JSON.parse(localStorage.getItem('cocktails')) || [];

    const index = favs.findIndex(item => item._id === id);

    if (index < 0) {
      heartButton.classList.add('button-add-fav-active');
      favs.push(cocktail);
      localStorage.setItem('cocktails', JSON.stringify(favs));
      return;
    }
    heartButton.classList.remove('button-add-fav-active');
    favs.splice(index, 1);
    localStorage.setItem('cocktails', JSON.stringify(favs));
  }
}
