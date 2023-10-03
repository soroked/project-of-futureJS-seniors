import { refsM } from "./refsM";
import { renderList } from "./render-list";

import { renderMarkupCardFav } from "./render-list";

// import { updateValueBasedOnScreenWidth } from "../main/pagination/updateValueBasedOnScreenWidth";


//? Функция парса локала если он есть
export function parseLocal(key) {
    const local = localStorage.getItem(key);
    let page = 1
    // const logo = new URL('../../img/icons.svg#icon-trash-01', import.meta.url);
    // const icon = "#icon-trash-01"
    
    try {
          
        if (local) {
            // console.log("Не пустой локал");
            const json = JSON.parse(local);
            
            if (json.length === 0) {
                // console.log("Пусто после удаления");
                localStorage.removeItem("cocktails")
                refsM.erroreImg.classList.remove("is-hidden-img-favorite")
                
            }
            
            renderMarkupCardFav(page, 6, json, refsM.gellery, refsM.pagination)
            
           
            // refsM.gellery.innerHTML = renderList(json)
           
            
            
            
        } else{
             refsM.erroreImg.classList.remove("is-hidden-img-favorite")
            // console.log("Пустой локал");
        }    
        
    } catch (error) {
        // console.log(error);
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
        
    } catch (error) {
        // console.log(error);
    }
    
}

