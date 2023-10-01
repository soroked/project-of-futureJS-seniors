import { removeItemFromLocalStorage } from "./forLocalStorage";
import { parseLocal } from "./forLocalStorage";
import { refs } from "./refs";

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
}



//Уведомление об удалении элемента из избранного
function showNotification(item) {

    const name = item.querySelector(".name-card-cocktails").textContent
    
    refs.notify.textContent = `Удалено: ${name}`

    refs.notify.classList.remove("is-hidden");

    setTimeout(() => {
        refs.notify.classList.add("is-hidden");
    }, 2000);
}
