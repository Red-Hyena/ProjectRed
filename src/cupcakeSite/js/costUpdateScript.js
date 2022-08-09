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