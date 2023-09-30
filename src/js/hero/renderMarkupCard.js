import { refs } from './hero';
import searchMarkup from '../../templates/searchMarkup.hbs';
import { createPagination } from '../main/pagination/pagination.js';

export function renderMarkupCard(page, cardPerPage, arr) {
  let firstIndex = (page - 1) * cardPerPage;
  let lastIndex = firstIndex + cardPerPage;
  const pageLimit = arr.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(arr.length / cardPerPage);

  createPagination(totalPages, page, arr);

  return (refs.list.innerHTML = searchMarkup(pageLimit));
}
