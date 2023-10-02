const KEY_COCTAIL = 'favoriteCoctail';
const KEY_INGRIDIENT = 'favoriteIngridient';

export const favoriteCoctail = getFavoriteCoctail() || [];
export const favoriteIngridient = getFavoriteIngridient() || [];

export function setFavoriteCoctail(array) {
  localStorage.setItem(KEY_COCTAIL, JSON.stringify(array));
}

export function setFavoriteIngridient(array) {
  localStorage.setItem(KEY_INGRIDIENT, JSON.stringify(array));
}

export function getFavoriteCoctail() {
  return JSON.parse(localStorage.getItem(KEY_COCTAIL));
}
export function getFavoriteIngridient() {
  return JSON.parse(localStorage.getItem(KEY_INGRIDIENT));
}
