//? Функция рендера разметки

// export function renderList(data) {

//   const logo = new URL('../../img/icons.svg#icon-trash-01', import.meta.url);
//     const icon = "#icon-trash-01"

//   return data
//     .map(
//         (el, index) =>
//            `
//         <li class="item-card-cocktails favorite-cocktails-dark-bg" data-index="${index}">
//             <img src="${el.drinkThumb}" class="img-card-cocktails" width="307" height="200" alt="${el.drink.slice(0,17)}">
//             <div class="wraper-card" >
//             <h2 class="name-card-cocktails favorite-cocktails-dark">${el.drink}</h2>
//             <p class="description-card-cocktails favorite-cocktails-dark">${el.description}</p>

//             <ul class="list-btn-card">
//             <li class="item-btn-card">
//             <button type="button" class="btn-card-cocktails favorite-cocktails-dark favorite-cocktails-dark-bg">Learn more</button>
//             </li>
//             <li class="item-btn-card item-card-deleted">
//             <button type="button" class="btn-card-deleted favorite-cocktails-dark">

//              <svg
//   class="delete-icon"
//   xmlns="http://www.w3.org/2000/svg"
//   width="18"
//   height="18"
//   viewBox="0 0 18 18"
//   fill="none"
// >
//   <path
//     d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"
//     stroke="#FDFDFF"
//     stroke-width="1.5"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   />
// </svg>
//             </button>
//             </li>
//             </ul>
//             </div>

//         </li>
//     `

//     )
//     .join('');
// }

import { createPagination } from '../main/pagination/pagination';
import { refsM } from './refsM';

export function renderMarkupCardFav(page, cardPerPage, arr, list, listPag) {
  let firstIndex = (page - 1) * cardPerPage;
  let lastIndex = firstIndex + cardPerPage;
  const pageLimit = arr.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(arr.length / cardPerPage);
  createPagination(totalPages, page, arr, list, listPag, renderMarkupCardFav);

  list.innerHTML = pageLimit
    .map((item, ind) => {
      const drink = item.drink.split(' ').join('+');

      return `        
         <li class="cocktail-item karina-dark-theme-bg item-card-cocktails " data-index="${ind}">
            <img class="cocktail-img" src=${item.drinkThumb} alt=${item.drink}>
            <h3 class="cocktail-title karina-dark-theme">${item.drink}</h3>
            <p class="cocktail-description karina-dark-theme">${item.description}</p>
            <div class="button-div">
            <button data-value=${drink} class="button-learn-more karina-dark-theme-bg karina-dark-theme btn-learn-favorite-eduard">LEARN MORE</button>
          <button data-value=${item._id} class="button-add-fav btn-card-deleted">
           <svg
              class="delete-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"
                stroke="#FDFDFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
            </div>
           </li>
          
          `;
    })
    .join('');
}
