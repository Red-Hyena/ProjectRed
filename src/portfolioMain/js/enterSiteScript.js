const siteToggleBtn = document.querySelector('.enterSiteBtn');
const introScreen = document.getElementById('introScreen');
var introLines = document.querySelectorAll('.introLine');

const navbar = document.querySelector('.navbar');

const mainScreen = document.getElementById('mainScreen');

siteToggleBtn.addEventListener('click', () => {
    animateScreenToggle();
})


function animateScreenToggle() {
    introLines.forEach(introLine => {
        introLine.classList.add('fadeOut');
    })
    setTimeout(function(){
        introScreen.classList.replace('visible', 'hidden');
        navbar.classList.replace('hidden', 'navVisibleAlt');
        navbar.classList.add('fadeIn');
        setTimeout(function(){
            mainScreen.classList.replace('hidden', 'visible');
            mainScreen.classList.add('fadeIn');
        }, 1500);
    }, 1500);

}

// Video Play on Hover
const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');
const video3 = document.querySelector('.video3');

video1.addEventListener('mouseover', () => {
    video1.play();
})
video1.addEventListener('mouseout', () => {
    video1.currentTime = 0;
    video1.pause();
})
video2.addEventListener('mouseover', () => {
    video2.play();
})
video2.addEventListener('mouseout', () => {
    video2.currentTime = 0;
    video2.pause();
})
video3.addEventListener('mouseover', () => {
    video3.play();
})
video3.addEventListener('mouseout', () => {
    video3.currentTime = 0;
    video3.pause();
})