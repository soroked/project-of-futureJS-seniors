const notFoundContainer = document.querySelector('.not-found-container')

export function renderMarkUpIngredients(arr) {
 ingredientsGallery.innerHTML = '';
  notFoundContainer.classList.add('is-hidden');
  if (!ids || ids.length === 0) {
    notFoundContainer.classList.remove('is-hidden');
  }
  const markup = arr.flatMap(createMarkupIngredients).join('');
  ingredientsGallery.insertAdjacentHTML('beforeend', markup);
}

function createMarkupIngredients({ description, title, _id }) {
  return `<li class="ingredient-card">
    <h2 class="ingredient-header">${title}</h2>
    <p class="alcoholic-ing">Alcoholic</p>
    <p class="ingredient-description">
      ${description}
    </p>
    <div class="ingredient-btns">
      <button class="ingredient-learn-more-btn learn-more-btn" data-id="${_id}">learn more</button>
      <button class="delete-btn" data-id="${_id}">
        <svg class="delete-icon width="18" height="18">
         <use href="../img/icons.svg#icon-trash-01"></use>
        </svg>
      </button>
    </div>
  </li>`;
}
