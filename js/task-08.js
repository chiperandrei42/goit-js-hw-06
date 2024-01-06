const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value === '' || password.value === '') {
        alert("All fields should be completed");
    } else {
        const formInformation = {
            email: email.value,
            password: password.value
        };

        console.log(formInformation);

        form.reset();
    }
});