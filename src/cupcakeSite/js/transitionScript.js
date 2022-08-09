// Forms
var cakeFlex = document.getElementById('cakeFlex');
var flavourFlex = document.getElementById('flavourFlex');
var icingFlex = document.getElementById('icingFlex');
var decorationsFlex = document.getElementById('decorationsFlex');
var textExtraFlex = document.getElementById('textExtraFlex');

//Buttons
var cakeToFlavour = document.querySelector('.cakeToFlavour');
cakeToFlavour.addEventListener('click', () => {
    if ((cakeFlex.className === "activeFormFlex") && (flavourFlex.className === "inactiveFormFlex")) {
        cakeFlex.className = ("inactiveFormFlex");
        flavourFlex.className = ("activeFormFlex");
    } else {
        return;
    }
    
});
var flavourToCake = document.querySelector('.flavourToCake');
flavourToCake.addEventListener('click', () => {
    if ((flavourFlex.className === "activeFormFlex") && (cakeFlex.className === "inactiveFormFlex")) {
        flavourFlex.className = ("inactiveFormFlex");
        cakeFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var flavourToIcing = document.querySelector('.flavourToIcing');
flavourToIcing.addEventListener('click', () => {
    if ((flavourFlex.className === "activeFormFlex") && (icingFlex.className === "inactiveFormFlex")) {
        flavourFlex.className = ("inactiveFormFlex");
        icingFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var icingToFlavour = document.querySelector('.icingToFlavour');
icingToFlavour.addEventListener('click', () => {
    if ((icingFlex.className === "activeFormFlex") && (flavourFlex.className === "inactiveFormFlex")) {
        icingFlex.className = ("inactiveFormFlex");
        flavourFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var icingToDecorations = document.querySelector('.icingToDecorations');
icingToDecorations.addEventListener('click', () => {
    if ((icingFlex.className === "activeFormFlex") && (decorationsFlex.className === "inactiveFormFlex")) {
        icingFlex.className = ("inactiveFormFlex");
        decorationsFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var decorationsToIcing = document.querySelector('.decorationsToIcing');
decorationsToIcing.addEventListener('click', () => {
    if ((decorationsFlex.className === "activeFormFlex") && (icingFlex.className === "inactiveFormFlex")) {
        decorationsFlex.className = ("inactiveFormFlex");
        icingFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var decorationsToTextExtra = document.querySelector('.decorationsToTextExtra');
decorationsToTextExtra.addEventListener('click', () => {
    if ((decorationsFlex.className === "activeFormFlex") && (textExtraFlex.className === "inactiveFormFlex")) {
        decorationsFlex.className = ("inactiveFormFlex");
        textExtraFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})
var textExtraToDecorations = document.querySelector('.textExtraToDecorations');
textExtraToDecorations.addEventListener('click', () => {
    if ((textExtraFlex.className === "activeFormFlex") && (decorationsFlex.className === "inactiveFormFlex")) {
        textExtraFlex.className = ("inactiveFormFlex");
        decorationsFlex.className = ("activeFormFlex");
    } else {
        return;
    }
})