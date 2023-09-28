import { getFavCoctails } from "./fetch-ingredient";

const ingredientsGallery = document.querySelector('.ingredients-gallery')
const notFoundContainer = document.querySelector('.not-found-container')

export const renderIngredients = ids => {
  ingredientsGallery.innerHTML = '';
  notFoundContainer.classList.add('is-hidden');
  if (!ids || ids.length === 0) {
    notFoundContainer.classList.remove('is-hidden');
  }
  ids.forEach(async id => {
    const response = await getFavCoctails(id);
    if (!response[0]) return;
    const data = response[0];
    ingredientsGallery.innerHTML += `
        <div class="ingredient-card">
        <h2 class="ingredient-header">${data.title}</h2>
        <p class="alcoholic-ing">${
          data.alcohol === 'Yes' ? 'Alcoholic' : 'Non-Alcoholic'
        }</p>
        <p class="ingredient-description">
        ${data.description}
        </p>
        <div class="ingredient-btns">
          <button type="button" class="ingredient-learn-more-btn learn-more-btn" data-id="${id}" >
            LEARN MORE
          </button>
          <button
            type="button"
            class="delete-btn"
            data-id="${id}"
            data-role="delete"
          >
            <svg
    class="delete-icon">
        <use href="./images/fav-images/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
      </div>
    `;
  });
};



