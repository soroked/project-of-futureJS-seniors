export default function addToFavorites(ingredient) {
  try {
     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isAlreadyAdded = favorites.some((fav) => fav._id === ingredient._id);


  if (!isAlreadyAdded) {
    favorites.push(ingredient);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  } catch (error) {
    console.error(error);
  }
}