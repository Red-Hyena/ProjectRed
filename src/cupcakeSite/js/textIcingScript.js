var textExtraConfirmBtn = document.querySelector('.textExtraConfirm');

textExtraConfirmBtn.addEventListener('click', (e) => {
    var textExtraInput = document.getElementById('textExtra').value;
    var textExtraRefined = textExtraInput.split(" ").join("");
    var textExtraLength = textExtraRefined.length;
    var textExtraCost = 0.10 * parseInt(textExtraLength);
    alert(`${textExtraCost}`);
});

