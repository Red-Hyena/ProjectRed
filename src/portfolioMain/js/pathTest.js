

function animateCard(audio) {
    var soundEffect = document.getElementById('soundEffect');
    soundEffect.play();
}
function animateReset(audio) {
    var soundEffect = document.getElementById('soundEffect');
    soundEffect.pause();
    soundEffect.currentTime = 0;
}