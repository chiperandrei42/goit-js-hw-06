const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value');

let counter = 0;

incrementBtn.addEventListener('click', () => {
    counter++;
    value.textContent = parseInt(counter, 10); 
})

decrementBtn.addEventListener('click', () => {
    counter--
    value.textContent = parseInt(counter, 10);
})