const colorSwither = document.getElementById("themeSwitch");

const bodyEl = document.body;

colorSwither.checked = false;

colorSwither.addEventListener("click", onCheckBoxChange);

const picturesDark = document.querySelector('.picture-hero-dark');
const picturesLight = document.querySelector('.picture-hero-light');
const LS_KEY = 'switcher';

if (localStorage.getItem('switcher') === 'light' || !localStorage.getItem('switcher')) {
    picturesLight.classList.remove('is-hidden-hero');
    picturesDark.classList.add('is-hidden-hero');
} else {
    picturesLight.classList.add('is-hidden-hero');
    picturesDark.classList.remove('is-hidden-hero');
}

function onCheckBoxChange(){

if (colorSwither.checked){
    colorSwither.classList.toggle('dark');
    bodyEl.classList.toggle('dark');
    localStorage.setItem(LS_KEY, 'dark');

    picturesLight.classList.toggle('is-hidden-hero');
        picturesDark.classList.toggle('is-hidden-hero');
        return;
}
    
    bodyEl.classList.remove('dark');
    picturesLight.classList.toggle('is-hidden-hero');
        picturesDark.classList.toggle('is-hidden-hero');
        localStorage.setItem(LS_KEY, 'light');
}


function setThemeOnLoad(){

    const IsData = localStorage.getItem(LS_KEY);

    if(IsData === 'dark'){
        bodyEl.classList.toggle('dark');
        colorSwither.checked = true;
        return;
    }

    bodyEl.classList.remove('dark');
    colorSwither.checked = false;


}

setThemeOnLoad();





// function setThemeOnLoad() {
//     const lsData = localStorage.getItem(LS_KEY);
  
//     if (lsData === 'dark') {
//       bodyEl.classList.replace('light', 'dark');
//       themeSwitcher.checked = true;
//       return;
//     }
  
//     bodyEl.classList.replace('dark', 'light');
//     themeSwitcher.checked = false;
// }

// setThemeOnLoad();

