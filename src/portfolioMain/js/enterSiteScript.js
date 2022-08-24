const siteToggleBtn = document.querySelector('.enterSiteBtn');
const introScreen = document.getElementById('introScreen');
var introLines = document.querySelectorAll('.introLine');

const navbar = document.querySelector('.navbar');
const navAudio = new Audio('/src/portfolioMain/audio/mechanicalClamp.wav');

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
        navbar.classList.replace('hidden', 'navVisible');
        navbar.classList.add('moveFromLeft');
        navAudioPlay();
    }, 1500);
}

function navAudioPlay() {
    navAudio.play();
}