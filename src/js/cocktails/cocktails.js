




// const createMarkupForCard = (cards, container) => {
//   const makrup = cards
//   .map(
//       (item) => `
//           <h2 class="main-card-title">Cocktails</h2>
//           <ul class="card-list">
//           <li class="card-item" data-index="">
//           <div class="card-container${item._id
//           }">
//           <img class="card-item-image" src="${item.drinkThumb
//           }" alt="${a}" loading="lazy" />
//           <div class="card-item-wrapper">
//           <h3 class="card-item-title">${item.drink}</h3>  
//           <p class="card_item-description">${item.description
//           }</p> 
//           <button class="button-learn-more ${a}" data-id="${a}">
//           LEARN MORE
//           </button>   
//           <button class="button-add-favorite ${a}" data-id="${a}">
//           ${addFavoriteBtn}
//           </button>
//           </div>    
//           </div>
//           </li>
//           </ul>`
// )
// .join("")
//   container.insertAdjacementHTML("beforeend", makrup)
// }

// getRandomCocktails(res.result)


// export function createMarkupForCard(cards) {
//     return cards
//     .map(
//         ({ _id,
//             drink,
//             thumb,
            
//         }) => {
  
//             return `
//             <h2 class="main-card-title">Cocktails</h2>
//             <ul class="card-list">
//             <li class="card-item" data-index="">
//             <div class="card-container${a}">
//             <img class="card-item-image" src="${thumb}" alt="${a}" loading="lazy" />
//             <div class="card-item-wrapper">
//             <h3 class="card-item-title">${drink}</h3>  
//             <p class="card_item-description">${a}</p> 
//             <button class="button-learn-more ${a}" data-id="${a}">
//             LEARN MORE
//             </button>   
//             <button class="button-add-favorite ${a}" data-id="${a}">
//             ${addFavoriteBtn}
//             </button>
//             </div>    
//             </div>
//             </li>
//             </ul>`
// })
// .join("")
// }


// const refs = {
//     iconSvg: new URL('../img/icons.svg/icon-heart'),
//   };

// function createSvgIcon(name) {
//     return `
//       <svg class="button-icon-svg">
//         <use href="${refs.iconSvg}#${name}"></use>
//       </svg>
//     `;
//   }

// const addFavoriteBtn = `Add to favorite ${createSvgIcon('icon-heart')}`;
// const removeFavoriteBtn = `Remove from favorite ${createSvgIcon('icon-heart-full')}`;




// const toggleFavourite = () => {
//     const btn = document.querySelector(`.button__add-favorite--${id}`);
//     btn.classList.toggle('button-add-favorite-active');
//     if (btn.classList.contains('button-add-favorite-active')) {
//       btn.innerHTML = removeFavoriteBtn;
//     } else {
//       btn.innerHTML = addFavoriteBtn;
//     }
//   };

//   export function getFavourite() {
//     const favorite = JSON.parse(localStorage.getItem('favorite')) || {};
  
//     return favorite;
//   }


//   const handleFavorite = (id, data) => () => {
//     toggleFavourite();
//     const favorite = getFavorite();

//     let newFavourite = favorite;

//     if (favorite.hasOwnProperty(idd)) {
//       delete newFavourite[idd];
//     } else {
//         const saveFavorite = {
//           [id]: data,
//         };
  
//         newFavourite = { ...favorite, ...saveFavorite };
//       }
  
//       localStorage.setItem('favorite', JSON.stringify(newFavourite));
//     };
  

