const navbarLinksContainer = document.getElementById('navbarLinksContainer');
const navbarMenuBtn = document.getElementById('navbarMenuBtn');
var menuBar1 = document.getElementById('menuBar1');
var menuBar2 = document.getElementById('menuBar2');
var menuBar3 = document.getElementById('menuBar3');



navbarMenuBtn.addEventListener('click', () => {
    if (navbarMenuBtn.className === 'navbarMenuClosed') {
        menuBar1.classList.add('closeBtn');
        menuBar2.classList.add('closeBtn');
        menuBar3.classList.add('closeBtn');
        navbarMenuBtn.classList.replace('navbarMenuClosed', 'navbarMenuOpen');
        navbarLinksContainer.style.width = ('100%');
    } else if (navbarMenuBtn.className === 'navbarMenuOpen') {
        menuBar1.classList.remove('closeBtn');
        menuBar2.classList.remove('closeBtn');
        menuBar3.classList.remove('closeBtn');
        navbarMenuBtn.classList.replace('navbarMenuOpen', 'navbarMenuClosed');
        navbarLinksContainer.style.width = ('0%');
    }
})

function toggleFullScreenMenu() {
    if (navbarLinksContainer.classList === 'navbarLinksContainerClosed') {
        console.log('Navbar is closed');
    }
}

// if(navbarLinksContainer.className === 'navbarLinksContainer') {
//     navbarLinksContainer.style.width = ('100%');
// } else {
//     navbarLinksContainer.style.width = ('0%');
// }