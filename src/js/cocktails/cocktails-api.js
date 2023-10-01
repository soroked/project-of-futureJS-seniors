import axios from 'axios';
import { updateValueBasedOnScreenWidth } from '../main/pagination/updateValueBasedOnScreenWidth';
import debounce from 'debounce';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_COCKTAIL = 'cocktails/';

window.addEventListener('load', updateValueBasedOnScreenWidth);
window.addEventListener('resize', debounce(updateValueBasedOnScreenWidth, 300));


async function getRandomCocktails(query) {
  const params = {
    r: query,
  };
  const resp = await axios.get(BASE_URL + ENDPOINT_COCKTAIL, { params });
  console.log(resp.data);
  return resp.data;

}

let array = null;
const cocktailsElement = document.querySelector('.cocktail-list');

async function getCocktails(cardPerPage) {
  try {
    const data = await getRandomCocktails(updateValueBasedOnScreenWidth());
    console.log(cardPerPage);

   
    // const screenWidth = window.innerWidth;

    // if(screenWidth <= 1250) {
    //     key = 8
    // }

    const limitData = data.slice(0, cardPerPage)

    const logo = new URL('../../img/icons.svg#icon-heart', import.meta.url);
    const icon = "#icon-heart"


    const cocktailsHtml = limitData
      .map(
        item =>
        
          `        
         <li class="cocktail-item">
            <img class="cocktail-img" src=${item.drinkThumb} alt=${item.drink}>
            <h3 class="cocktail-title">${item.drink}</h3>
            <p class="cocktail-description">${item.description}</p>
            <div class="button-div">
            <button data-value=${item.drink} class="button-learn-more">LEARN MORE</button>
          <button data-value=${item._id} class="button-add-fav">
          <svg class="icon-add-fav"><use href=${logo.pathname+icon}></use></svg>
        </svg></button>
            </div>
           </li>
          
          `
      )
      .join('');
      array = limitData;

    cocktailsElement.innerHTML = cocktailsHtml;
  } catch (error) {
    console.error(error);
  }
}

cocktailsElement.addEventListener("click", onLearnMore)

function onLearnMore(e) {
  if(e.target.classList.contains("button-learn-more")) {
    console.log(e.target.dataset.value);
  }

  cocktailsElement.addEventListener("click", onAddFav)

  function onAddFav(e) {
    if(e.target.classList.contains("button-add-fav")) {
      console.log(e.target.dataset.value);
    }
  }
 
  
}


getCocktails(updateValueBasedOnScreenWidth());