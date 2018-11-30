//Select DOM ITEMS
const menuBtn = document.querySelector('.nav-btn'),
    nav = document.querySelector('.nav'),
    navMenu = document.querySelector('.nav-items'),
    navItems = document.querySelectorAll('.nav-item'),
    menuSocialize = document.querySelector('.socialize'),
    socializeItems = document.querySelectorAll('.socilize-item');

//Set initial state of menu;
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('show');
        nav.classList.add('show');
        navMenu.classList.add('show');
        menuSocialize.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));
        socializeItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('show');
        nav.classList.remove('show');
        navMenu.classList.remove('show');
        menuSocialize.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        socializeItems.forEach(item => item.classList.remove('show'));

        //Set menu state 
        showMenu = false;
    }
}