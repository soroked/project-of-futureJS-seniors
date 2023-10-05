import { refsM } from './refsM';
import { parseLocal } from './forLocalStorage';
import { clickToBtn } from './click-btn-deleted';

const local = 'cocktails'; // Предполагаемый ключ локала

//? Парс и проверка локала
parseLocal(local); //* Проверка local storage

//? Делегирование на кнопку удаления
refsM.gellery?.addEventListener('click', e => {
  clickToBtn(e, local);
  // клик по кнопке
});
