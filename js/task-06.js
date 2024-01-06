const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function () {
    const correctLength = parseInt(validationInput.getAttribute('data-length'));
    if (validationInput.value.length >= correctLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});