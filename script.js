const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const modeicon = document.getElementById('toggle-icon');

//
// The 3 lines below was commented out because of DRY coding
//

// const image1 = document.getElementById('image1');
// const image2 = document.getElementById('image2');
// const image3 = document.getElementById('image3');

const textbox = document.getElementById('text-box');
const img = document.getElementsByTagName('img'); 

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

/*
// The function imageMode was changed with setImageMode function for DRY Coding

// Set Images for Dark Mode ore Light Mode
function imageMode(mode) {
    image1.src = `images/undraw_proud_coder_${mode}.svg`;
    image2.src = `images/undraw_feeling_proud_${mode}.svg`;
    image3.src = `images/undraw_conceptual_idea_${mode}.svg`;
}
*/

// for DRY : Set all images mode to current mode
function setImageMode(img, toMode) {
    toMode === DARK_THEME ? img.src =img.src.replace('light', toMode) : img.src = img.src.replace('dark', toMode);  
}

/*
// Function darkMode() and lightMode() is commented out for DRY Code
// Function Dark Mode
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textbox.style.backgroundColor ='rgb(255 255 255 / 50%)';
    modeicon.children[0].textContent ='Dark Mode';
    modeicon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Function Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textbox.style.backgroundColor ='rgb(0 0 0 / 50%)';
    modeicon.children[0].textContent ='Light Mode';
    modeicon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}
*/
// For DRY Dark Light Mode
function toggleModeTo(mode) { 
    nav.style.backgroundColor =  mode === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textbox.style.backgroundColor = mode === DARK_THEME  ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    modeicon.children[0].textContent = mode === DARK_THEME  ? 'Dark Mode' : 'Light Mode';
    mode === DARK_THEME  ? modeicon.children[1].classList.replace('fa-sun', 'fa-moon') : modeicon.children[1].classList.replace('fa-moon', 'fa-sun');
    // mode === DARK_THEME  ? imageMode('dark') : imageMode('light');
    for(let i=0; i < img.length; i++) 
        mode === DARK_THEME ? setImageMode(img[i], DARK_THEME) : setImageMode(img[i], LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // darkMode();
        toggleModeTo(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // lightMode();
        toggleModeTo(LIGHT_THEME);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        // darkMode();
        toggleModeTo(DARK_THEME);
    }
}