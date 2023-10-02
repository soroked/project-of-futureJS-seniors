import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const ENDPOINT_RANDOM = 'cocktails/';
const ENDPOINT_COCKTAIL = 'cocktails/search/';
const ENDPOINT_INGREDIENTS = 'ingredients/';

function getCocktails(query) {
  const params = {
    f: query,
  };

  return axios.get(BASE_URL + ENDPOINT_COCKTAIL, { params });
}

function getIngredients(query) {
  const params = {
    f: query,
  };

  return axios.get(BASE_URL + ENDPOINT_INGREDIENTS, { params });
}

function getRandomCocktails(number) {
  const params = {
    r: number,
  };

  return axios.get(BASE_URL + ENDPOINT_RANDOM, { params });
}

export { getCocktails, getIngredients, getRandomCocktails };
