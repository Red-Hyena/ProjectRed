const carousel = document.querySelector('.carouselMobile');
const track = document.querySelector('.carousel_track');
const cards = Array.from(track.children);
const navDots = document.querySelector('.carousel_nav');
const dots = Array.from(navDots.children);

// Display cards next to each other
const cardWidth = cards[0].getBoundingClientRect().width;

const setCardPosition = (card, index) => {
    card.style.left = cardWidth * index + 'px';
};

// Card positioning functions
const moveToCard = (track, currentCard, targetCard) => {
    track.style.transform = 'translateX(-' + targetCard.style.left + ')';
    currentCard.classList.remove('currentCard');
    targetCard.classList.add('currentCard');
}

cards.forEach(setCardPosition);

// Pagination
navDots.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;
    const currentCard = track.querySelector('.currentCard');
    const currentDot = navDots.querySelector('.currentCard');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetCard = cards[targetIndex];

    moveToCard(track, currentCard, targetCard);
    updateDots(currentDot, targetDot);
})
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentCard');
    targetDot.classList.add('currentCard');
}

// Touch events for swipe
// Swipe left to move to next card
function swipeLeft() {
    const currentCard = track.querySelector('.currentCard');
    const nextCard = currentCard.nextElementSibling;
    const currentDot = navDots.querySelector('.currentCard');
    const nextDot = currentDot.nextElementSibling;
    moveToCard(track, currentCard, nextCard);
    updateDots(currentDot, nextDot);
}
// Swipe to move to previous card
function swipeRight() {
    const currentCard = track.querySelector('.currentCard');
    const prevCard = currentCard.previousElementSibling;
    const currentDot = navDots.querySelector('.currentCard');
    const prevDot = currentDot.previousElementSibling;
    moveToCard(track, currentCard, prevCard);
    updateDots(currentDot, prevDot);
}

// Touch 
// Variables required
var startX,
startY,
distX,
distY,
thresholdX = 100,
thresholdY = 100,
allowedTime = 100,
elapsedTime,
startTime

carousel.addEventListener('touchstart', e => {
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime()
})
// carousel.addEventListener('touchmove', e => {
// })
carousel.addEventListener('touchend', e => {
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX
    distY = touchobj.pageY - startY
    elapsedTime = new Date().getTime() - startTime
    if (elapsedTime >= allowedTime) {
        if (Math.abs(distX) >= thresholdX && Math.abs(distY) <= thresholdY) {
            // ^ Calculates X & Y axis distance to prevent diagonal swipe
            swipedir = (distX < 0)? 'left' : 'right'
            if (swipedir === 'left') {
                swipeLeft();
            } else {
                swipeRight();
            }
        }
    }
})

