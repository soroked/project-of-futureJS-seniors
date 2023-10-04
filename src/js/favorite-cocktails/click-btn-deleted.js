import { removeItemFromLocalStorage } from "./forLocalStorage";
import { parseLocal } from "./forLocalStorage";
import { refsM } from "./refsM";
import { modalInstanceCoctail } from "../main/modal-windows";

// //? Функция клика по кнопке

export function clickToBtn(e, key) {
    if (e.target.classList.contains("btn-card-deleted")) {

        const listItem = e.target.closest(".item-card-cocktails");
        if (listItem) {
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);
            removeItemFromLocalStorage(key, index);
            parseLocal(key);
            
            showNotification(listItem)
            
        }
        
    }

    if (e.target.classList.contains("btn-learn-favorite-eduard")) {
        const cocktailName = e.target.dataset.value;
        
        return modalInstanceCoctail(cocktailName.replaceAll("-"," "));

    }
}



//Уведомление об удалении элемента из избранного
function showNotification(item) {

    const name = item.querySelector(".cocktail-title").textContent
    
    refsM.notify.textContent = `Your deleted favorites cocktails: ${name}`

    refsM.notify.classList.remove("is-hidden-favorite");

    setTimeout(() => {
        refsM.notify.classList.add("is-hidden-favorite");
    }, 2000);
}
