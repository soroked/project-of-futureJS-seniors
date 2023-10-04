import { fetchData } from "./fetch-data";
import { refsM } from "./refsM";
import { parseLocal } from "./forLocalStorage";
import { clickToBtn } from "./click-btn-deleted";
import { renderList } from "./render-list";

const bodyEl = document.body;
const colorSwither = document.getElementById("themeSwitch");

if (localStorage.getItem('switcher') === 'light' || !localStorage.getItem('switcher')) {
    colorSwither.checked = false;
} else {
    colorSwither.checked = true;
    bodyEl.classList.toggle('dark');
    colorSwither.classList.add('dark');
}

colorSwither.addEventListener("click", () => {
    colorSwither.classList.toggle('dark');
    bodyEl.classList.toggle('dark');
    if (localStorage.getItem('switcher') === 'light' || !localStorage.getItem('switcher')) {
        localStorage.setItem('switcher', 'dark')
    } else {
        localStorage.setItem('switcher', 'light')
    }
});



(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();


//* Получаем ответ от функции fetchData(letter)

// refsM.form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const letter = refsM.form.elements.search.value

//     if (letter === "") {
//         console.log("Пустая строка");
//         return
//     }
    
    
//     returnData(letter)
    
// })

// async function returnData(letter) {
    
//     try {
//         const data = await fetchData(letter)
//         console.log(data);

//         refsM.gellery.innerHTML = renderList(data.data)
//         const dataParse = JSON.stringify(data.data)
//         localStorage.setItem("cocktails", dataParse)
        
//     } catch (error) {

//         console.log("Ошибка ответа");
//         refsM.gellery.innerHTML = " "
//     }
// }


const local = "cocktails" // Предполагаемый ключ локала

//? Парс и проверка локала
parseLocal(local) //* Проверка local storage


//? Делегирование на кнопку удаления
refsM.gellery?.addEventListener("click", (e) => {
    
    clickToBtn(e, local)
       // клик по кнопке
});



