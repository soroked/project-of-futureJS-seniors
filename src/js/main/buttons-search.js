const refs = {
    searchButtonWrapper: document.querySelector(".button-search-wrapper-js"),
    searchButton: document.querySelector(".button-search-js"),
    searchDropdown: document.querySelector(".button-dropdown-js"),
    buttonListEl: document.querySelector(".button-list-js"),
}

const ALPHANUMBERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const markup = ALPHANUMBERS.map(item => `<li class="button-item" data-value=${item}>${item}</li>`).join("");

refs.buttonListEl.innerHTML = markup;

refs.searchButton.innerHTML = ALPHANUMBERS[0];

refs.searchButtonWrapper.addEventListener('click', searchButtonWrapperHandler);

function searchButtonWrapperHandler(e) {
  if (e.target.className.includes('button-search-wrapper-js') || e.target.className.includes('button-search-js')) {
    refs.searchDropdown.classList.toggle('hidden');
    refs.searchButtonWrapper.classList.toggle('active');
  }

  if (e.target.className.includes('button-item')) {
    refs.searchButton.innerHTML = e.target.dataset.value;
    refs.searchDropdown.classList.toggle('hidden');
    refs.searchButtonWrapper.classList.toggle('active');
  }
}