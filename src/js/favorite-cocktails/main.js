import { fetchData } from "./fetch-data";
import { refs } from "./refs";
import { parseLocal } from "./forLocalStorage";
import { clickToBtn } from "./click-btn-deleted";
import { renderList } from "./render-list";

//* Получаем ответ от функции fetchData(letter)

refs.form.addEventListener("submit", (e) => {
    e.preventDefault()

    const letter = refs.form.elements.search.value

    if (letter === "") {
        console.log("Пустая строка");
        return;
    }
    
    returnData(letter)
    
})

async function returnData(letter) {
    
    try {
        const data = await fetchData(letter)
        console.log(data);

        refs.gellery.innerHTML = renderList(data.data)
        const dataParse = JSON.stringify(data.data)
        localStorage.setItem("cocktails", dataParse)
        
    } catch (error) {

        console.log("Ошибка ответа");
        refs.gellery.innerHTML = " "
    }
}


const local = "cocktails" // Предполагаемый ключ локала

//? Парс и проверка локала
parseLocal(local) //* Проверка local storage


//? Делегирование на кнопку удаления
refs.gellery.addEventListener("click", (e) => {
    clickToBtn(e, local)
       // клик по кнопке
});



