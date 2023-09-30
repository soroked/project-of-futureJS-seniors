import { refs } from "./refs";
import { renderList } from "./render-list";

//? Функция парса локала если он есть
export function parseLocal(key) {
    const local = localStorage.getItem(key);
    
    try {
          const jsos = JSON.parse(local);
        refs.gellery.innerHTML = renderList(jsos)

        if (jsos.length === 0) {
            console.log("Пустой локал");
        }
        
    } catch (error) {
        console.log("Внезапная ошибка");
    }
}



// //? Функция удаления из локала по индексу

export function removeItemFromLocalStorage(key, index) {
    
    const local = localStorage.getItem(key);

    try {
         const jsos = JSON.parse(local);
        jsos.splice(index, 1);
        const updatedData = JSON.stringify(jsos);
        localStorage.setItem(key, updatedData);
        refs.notify
    } catch (error) {
        console.log(error);
    }
    
}

