import { refsM } from './refsM';
import { renderMarkupCardFav } from './render-list';

// import { updateValueBasedOnScreenWidth } from "../main/pagination/updateValueBasedOnScreenWidth";

//? Функция парса локала если он есть
export function parseLocal(key) {
  const local = localStorage.getItem(key);
  let page = 1;

  try {
    if (local) {
      const json = JSON.parse(local);

      if (json.length === 0) {
        localStorage.removeItem('cocktails');
        refsM.erroreImg.classList.remove('is-hidden-img-favorite');
      }

      renderMarkupCardFav(page, 6, json, refsM.gellery, refsM.pagination);
    } else {
      refsM.erroreImg.classList.remove('is-hidden-img-favorite');
    }
  } catch (error) {}
}

// //? Функция удаления из локала по индексу

export function removeItemFromLocalStorage(key, index) {
  const local = localStorage.getItem(key);

  try {
    const jsos = JSON.parse(local);
    jsos.splice(index, 1);
    const updatedData = JSON.stringify(jsos);
    localStorage.setItem(key, updatedData);
  } catch (error) {}
}
