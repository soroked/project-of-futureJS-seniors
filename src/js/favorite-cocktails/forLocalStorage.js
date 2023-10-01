import { refsM } from "./refsM";
import { renderList } from "./render-list";
import { renderMarkupCard } from "../renderMarkupCard"
import { updateValueBasedOnScreenWidth } from "../main/pagination/updateValueBasedOnScreenWidth";


//? Функция парса локала если он есть
export function parseLocal(key) {
    const local = localStorage.getItem(key);
    const page = 1
    try {
        const jsos = JSON.parse(local);
        console.log(jsos);
        refsM.gellery.innerHTML = renderList(jsos)
        
        
        
        // refsM.gellery.innerHTML = renderMarkupCard(page, updateValueBasedOnScreenWidth(), jsos, refsM.gellery, refsM.pagination);
       

        if (jsos.length === 0) {
            console.log("Пустой локал");
        }
        
    } catch (error) {
        console.log(error);
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
        refsM.notify
    } catch (error) {
        console.log(error);
    }
    
}

