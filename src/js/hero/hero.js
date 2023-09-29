import { getCocktails } from '../swagger-api.js';

const refs = {
  form: document.querySelector('.hero-search-form'),
  input: document.querySelector('.hero-form-input'),
  list: document.querySelector('.hero-search-cards'),
};

refs.form.addEventListener('submit', onInputSearch);

function onInputSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements['data-search'].value
    .toLowerCase()
    .trim();
  console.log(searchQuery);

  getCocktails(searchQuery)
    .then(response => response.data)
    .then(data => {
      refs.list.innerHTML = renderMarkup(data);
      // console.log(data);
    })
    .catch(console.error())
    .finally(refs.form.reset());

  function renderMarkup(card) {
    // const firstIndex = (page - 1) * cardPerPage;
    // const lastIndex = firstIndex + cardPerPage;

    // const pageLimit = data.slice(firstIndex, lastIndex);

    return card
      .map(({ drinkThumb, drink, description }) => {
        return `<li class="cocktail-card">
            <img class="gallery-item__img" src="${drinkThumb}" alt="${drink}" loading="lazy"/>
            <div class="info">
              <h3 class="info-item">
                ${drink}
              </h3>
              <p class="info-item">
                ${description}
              </p>
            </div>
          </li>`;
      })
      .join('');
  }
}

// const page = 1;
// const contentPerPage = 3
// const lastIndex = page * contentPerPage // 3
// const firstIndex = lastIndex - contentPerPage // 0
// scouts.slice(firstIndex, lastIndex)
// scouts.slice(0, 3) => [ 'levi', 'hange', 'erwin' ]
// page 2
// scouts.slice(3, 6) => [ 'petra', 'oruo', 'miche' ]
