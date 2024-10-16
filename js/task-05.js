let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value === "") {
        nameOutput.textContent = "Anonymous"
    }
    else {
        nameOutput.textContent = nameInput.value;
    }
})