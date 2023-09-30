const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';

import axios from 'axios';
import createIngredientCard from './createMarkup';
import addToFavorites from './localstorage-fav-ingredients';


const notFoundContainer = document.querySelector('.not-found-container')
const ingredientsGallery = document.querySelector('.ingredients-gallery')



async function getIngredientsFromAPI() {
  try {
    const response = await axios.get(`${BASE_URL}ingredients/search?f`);
 
    const ingredients = response.data; 

   
if (ingredients.length === 0) {
  
  notFoundContainer.classList.remove('fav-ingr-is-hidden');
} else {
  
  notFoundContainer.classList.add('fav-ingr-is-hidden');


  ingredients.forEach((ingredient) => {
    const ingredientCard = createIngredientCard(ingredient);
    ingredientsGallery.innerHTML += ingredientCard;


     ingredientsGallery.addEventListener('click', (event) => {
        
       
if (event.target.classList.contains('add-to-favorites')) {
          const ingredientId = event.target.getAttribute('data-id');
          const selectedIngredient = ingredients.find((ingredient) => ingredient._id === ingredientId);
          
          if (selectedIngredient) {         
addToFavorites(selectedIngredient);
          }
        }
      });
  });
}
  } 
catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener('load', getIngredientsFromAPI);


 


















