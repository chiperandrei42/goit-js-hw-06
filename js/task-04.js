let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const buttonValue = document.getElementById('value');

decrementButton.addEventListener('click', function () {
    counterValue -= 1;
    buttonValue.textContent = counterValue;
});
incrementButton.addEventListener('click', function () {
    counterValue += 1;
    buttonValue.textContent = counterValue;
});