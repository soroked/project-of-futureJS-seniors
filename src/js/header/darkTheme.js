const colorSwitchers = document.querySelectorAll("#themeSwitch");
const bodyEl = document.body;

const themeChecked = {
    dark: true,
    light: false
}
const  onCheckBoxChange = (colorSwitcher) => () => {
    if(picturesLight && picturesDark){
    picturesLight.classList.toggle('is-hidden-hero');
    picturesDark.classList.toggle('is-hidden-hero');
    }


    if (colorSwitcher.checked){
        colorSwitcher.classList.toggle('dark');
        bodyEl.classList.toggle('dark');
        localStorage.setItem(LS_KEY, 'dark');
    
        
    } else {
        bodyEl.classList.remove('dark');
            localStorage.setItem(LS_KEY, 'light');
    }
        colorSwitchers.forEach((switcher)=> switcher.checked = colorSwitcher.checked)
    }


colorSwitchers.forEach((colorSwitcher)=> colorSwitcher.addEventListener("click", onCheckBoxChange(colorSwitcher)) )

const picturesDark = document.querySelector('.picture-hero-dark');
const picturesLight = document.querySelector('.picture-hero-light');
const LS_KEY = 'switcher';

if(picturesLight && picturesDark){
    if (localStorage.getItem('switcher') === 'light' || !localStorage.getItem('switcher')) {
        picturesLight.classList.remove('is-hidden-hero');
        picturesDark.classList.add('is-hidden-hero');
    } else {
        picturesLight.classList.add('is-hidden-hero');
        picturesDark.classList.remove('is-hidden-hero');
    }
    
}
function setThemeOnLoad(){

    const IsData = localStorage.getItem(LS_KEY);
    const selectedTheme = themeChecked[IsData];

    if(selectedTheme){
        bodyEl.classList.toggle('dark');
    } else {
        bodyEl.classList.remove('dark');
    }
    colorSwitchers.forEach((colorSwitcher)=> colorSwitcher.checked=selectedTheme)
   }

setThemeOnLoad();