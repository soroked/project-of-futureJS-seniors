//? Функция рендера разметки



export function renderList(data) {

  const logo = new URL('../../img/icons.svg#icon-trash-01', import.meta.url);
    const icon = "#icon-trash-01"
    
  return data
    .map(
        (el, index) => 
           ` 
        <li class="item-card-cocktails favorite-cocktails-dark-bg" data-index="${index}">
            <img src="${el.drinkThumb}" class="img-card-cocktails" width="307" height="200" alt="${el.drink.slice(0,17)}">
            <div class="wraper-card" >
            <h2 class="name-card-cocktails favorite-cocktails-dark">${el.drink}</h2>
            <p class="description-card-cocktails favorite-cocktails-dark">${el.description}</p>
            
            <ul class="list-btn-card">
            <li class="item-btn-card">
            <button type="button" class="btn-card-cocktails favorite-cocktails-dark favorite-cocktails-dark-bg">Learn more</button>
            </li>
            <li class="item-btn-card item-card-deleted">
            <button type="button" class="btn-card-deleted favorite-cocktails-dark">
             <svg class="icon-card-deleted "><use href=${logo.pathname+icon}></use></svg>
            </button>
            </li>
            </ul>
            </div>
           
        </li>
    `
      
    )
    .join('');
}
