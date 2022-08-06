const dotContainer = document.getElementById('mobileDotContainer');
const cardContainer = document.getElementById('mobileCardsContainer');

const dots = dotContainer.getElementsByClassName('mobileCardDot');
const cards = cardContainer.getElementsByClassName('mobileCard');

const vanillaCard = document.getElementById('vanillaCard');
const carrotCard = document.getElementById('carrotCard');
const chocolateCard = document.getElementById('chocolateCard');
const strawberryCard = document.getElementById('strawberryCard');
const blueberryCard = document.getElementById('blueberryCard');
/*
for (i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        var currentDot = document.getElementsByClassName('cardDotActive');
        currentDot[0].className = currentDot[0].className.replace(' cardDotActive', '');
        this.className += ' cardDotActive';
    });
}
*/


for (dotPosition = 0; dotPosition < dots.length; dotPosition++) {
    dots[dotPosition].addEventListener('click', function() {
        var currentDot = document.getElementsByClassName('mobileCardDotActive');
        currentDot[0].className = currentDot[0].className.replace(' mobileCardDotActive', '');
        this.className += ' mobileCardDotActive';
    })
}

function vanillaSwitch() {
    vanillaCard.className.replace(' mobileCardActive', '');
}