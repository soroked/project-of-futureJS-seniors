const refs = {
  searchButtonWrapper: document.querySelector(".button-search-wrapper-js"),
  searchButton: document.querySelector(".button-search-js"),
  searchDropdown: document.querySelector(".button-dropdown-js"),
  buttonListEl: document.querySelector(".button-list-js"),
  buttonSpan: document.querySelector(".button-search-span-js"),
}

const ALPHANUMBERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function renderButtonsRow(arr, start, end) {
  return `<div class="button-rows">` + (arr.slice(start, end).map(item => `<button class="button-item" data-value=${item}>${item}</button>`).join("")) + '</div>';
}

const firstButtonsRow = renderButtonsRow(ALPHANUMBERS, 0, 14);
const secondButtonsRow = renderButtonsRow(ALPHANUMBERS, 14, 27);
const thirdButtonsRow = renderButtonsRow(ALPHANUMBERS, 27);
const fourthButtonsRow = renderButtonsRow(ALPHANUMBERS, 0, 19);
const fifthButtonsRow = renderButtonsRow(ALPHANUMBERS, 19);

refs.buttonListEl.innerHTML = firstButtonsRow + secondButtonsRow + thirdButtonsRow + fourthButtonsRow + fifthButtonsRow;

refs.searchButtonWrapper.addEventListener('click', searchButtonWrapperHandler);

function searchButtonWrapperHandler(e) {
  if (e.target.nodeName === 'BUTTON') {
    refs.buttonSpan.innerHTML = e.target.dataset.value;
    refs.searchDropdown.classList.toggle('hidden');
    refs.searchButtonWrapper.classList.toggle('active');
    return;
  }

  if (e.currentTarget.classList.contains('button-search-wrapper-js')) {
    refs.searchDropdown.classList.toggle('hidden');
    refs.searchButtonWrapper.classList.toggle('active');
  }
}