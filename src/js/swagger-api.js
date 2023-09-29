import axios from "axios";

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_COCKTAIL = 'cocktails/search/';
const ENDPOINT_INGREDIENTS = 'ingredients/search/';

function getCocktails(query) {

  const params = {
    f: query,
  };
  
  return axios.get(BASE_URL + ENDPOINT_COCKTAIL, {params});
};

function getIngredients(query) {

  const params = {
    f: query,
  };

  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS, {params});
};

export { getCocktails, getIngredients };