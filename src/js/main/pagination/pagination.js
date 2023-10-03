import { renderMarkupCard } from '../../renderMarkupCard';
import { updateValueBasedOnScreenWidth } from './updateValueBasedOnScreenWidth';
import refs from '../../hero/refs';
import { refsM } from '../../favorite-cocktails/refsM';

export let paginationIsSet = false;

export function createPagination(totalPages, page, arr, list, listPag) {
  let liItem = '';
  let activeLiItem = null;
  let beforePage = page - 1;
  let afterPage = page + 1;

  refs.titileCocktail.scrollIntoView({ behavior: 'smooth' });

  if (page > 1) {
    liItem += `<li class="prev"><span>&#60</span></li>`;
  }

  if (page > 2) {
    liItem += `<li class="numb"><span>1</span></li>`;
    if (page > 3) {
      liItem += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page > 6) {
    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage = afterPage + 1;
    }
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength += 1) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength === 0) {
      pageLength = pageLength + 1;
    }
    if (page === pageLength) {
      activeLiItem = 'active-pagination';
    } else {
      activeLiItem = '';
    }
    if (totalPages !== 1) {
      liItem += `<li class="numb ${activeLiItem} "><span>${pageLength}</span></li>`;
    }
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liItem += `<li class="dots"><span>...</span></li>`;
    }
    liItem += `<li class="numb"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liItem += `<li class="next"><span>&#62</span></li>`;
  }

  listPag.innerHTML = liItem;

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (prevButton) {
    prevButton.addEventListener('click', () => handlePaginationClick(page - 1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => handlePaginationClick(page + 1));
  }

  const numberButtons = document.querySelectorAll('.numb');

  numberButtons.forEach(button => {
    button.addEventListener('click', () =>
      handlePaginationClick(parseInt(button.innerText))
    );
  });

  if (!paginationIsSet) {
    document.addEventListener('keyup', onLeftRight);
    paginationIsSet = true;
  }

  function handlePaginationClick(clickedPage) {
    createPagination(totalPages, clickedPage, arr, list, listPag);
    renderMarkupCard(
      clickedPage,
      updateValueBasedOnScreenWidth(),
      arr,
      list,
      listPag
    );
  }

  function onLeftRight(evt) {
    if (evt.key === 'ArrowLeft') {
      if (page === 1) {
        return;
      }
      page -= 1;
      handlePaginationClick(page);
    }
    if (evt.key === 'ArrowRight') {
      if (page === totalPages) {
        return;
      }
      page += 1;
      handlePaginationClick(page);
    }
  }
}
