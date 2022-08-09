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
// Next/Previous Form Buttons
var cakeToFlavour = document.querySelector('.cakeToFlavour');
var flavourToCake = document.querySelector('.flavourToCake');
var flavourToIcing = document.querySelector('.flavourToIcing');
var icingToFlavour = document.querySelector('.icingToFlavour');
var icingToDecorations = document.querySelector('.icingToDecorations');
var decorationsToIcing = document.querySelector('.decorationsToIcing');
var decorationsToTextExtra = document.querySelector('.decorationsToTextExtra');
var textExtraToDecorations = document.querySelector('.textExtraToDecorations');

// Total Cost Buttons
var totalCostInput = document.getElementById('totalCostInput');
var cakeTypes = document.querySelectorAll('input[name="cakeType"]');
var flavourTypes = document.querySelectorAll('input[name="flavourType');
var icingTypes = document.querySelectorAll('input[name=icingType]');
var decorationTypes = document.querySelectorAll('input[name=decorationType');

// Cost Update Variables
var cakeTypeCost = 0;
var flavourTypeCost = 0;
var icingTypeCost = 0;
var decorationTypeCost = 0;
var totalCost = 0;

for (var cakeType of cakeTypes) {
    cakeType.addEventListener('change', cakeTypeCostSum);
}
for (var flavourType of flavourTypes) {
    flavourType.addEventListener('change', flavourTypeCostSum);
}
for (var icingType of icingTypes) {
    icingType.addEventListener('change', icingTypeCostSum);
}
for (var decorationType of decorationTypes) {
    decorationType.addEventListener('change', decorationTypeCostSum);
}

function cakeTypeCostSum(e) {
    if (this.checked) {
        cakeTypeCost = Number(this.value).toFixed(2);
        totalCostSum();
    }
}
function flavourTypeCostSum(e) {
    if (this.checked) {
        flavourTypeCost = Number(this.value).toFixed(2);
        totalCostSum();
    }
}
function icingTypeCostSum(e) {
    if (this.checked) {
        icingTypeCost = Number(this.value).toFixed(2);
        totalCostSum();
    }
}
function decorationTypeCostSum(e) {
    if (this.checked) {
        decorationTypeCost = Number(this.value).toFixed(2);
        totalCostSum();
    }
}
// Total Cost
function totalCostSum() {
    totalCost = parseFloat(cakeTypeCost) + parseFloat(flavourTypeCost) 
    + parseFloat(icingTypeCost) + parseFloat(decorationTypeCost);
    totalCostInput.innerText = `£${Number(totalCost).toFixed(2)}`;
}

// Text Extra
var textExtraConfirmBtn = document.querySelector('.textExtraConfirm');

textExtraConfirmBtn.addEventListener('click', (e) => {
    var textExtraInput = document.getElementById('textExtra').value;
    var textExtraRefined = textExtraInput.split(" ").join("");
    var textExtraLength = textExtraRefined.length;
    var textExtraCost = (0.10 * parseInt(textExtraLength)) + totalCost;
    totalCostInput.innerText = `£${Number(textExtraCost).toFixed(2)}`;
});
var textExtraConfirmBtn = document.querySelector('.textExtraConfirm');

textExtraConfirmBtn.addEventListener('click', (e) => {
    var textExtraInput = document.getElementById('textExtra').value;
    var textExtraRefined = textExtraInput.split(" ").join("");
    var textExtraLength = textExtraRefined.length;
    var textExtraCost = 0.10 * parseInt(textExtraLength);
    alert(`${textExtraCost}`);
});

