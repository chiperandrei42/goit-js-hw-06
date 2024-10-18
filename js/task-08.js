const form = document.querySelector(".login-form");
const formInputs = form.querySelectorAll("input");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === "") {
            alert("You must fill in all inputs");
            return form.reset();
        }
    }
    const userInput = {
                email: formInputs[0].value,
                password: formInputs[1].value
    }
    console.log(`Email: ${userInput.email}\nPassword: ${userInput.password}`);
    form.reset();

});