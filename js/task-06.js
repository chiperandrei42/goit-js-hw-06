const element = document.getElementById("validation-input");

element.addEventListener('blur', () => {
    if (element.value.length > element.dataset.length) {
        element.classList.add("valid");
        element.classList.remove("invalid");
    }
    else {
        element.classList.add("invalid")
        element.classList.remove("valid");
    }
})