import Notiflix from 'notiflix';

export function addToFavorites(ingredient) {
  try {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isAlreadyAdded = favorites.some(fav => fav._id === ingredient._id);

    if (!isAlreadyAdded) {
      favorites.push(ingredient);

      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}

export function removeFromFavoritesByIndex(index) {
  try {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites.length;
    // }
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}
