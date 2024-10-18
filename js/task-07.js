const elem = document.getElementById("font-size-control");
const text = document.getElementById("text");
elem.addEventListener('input', () => {
    text.style.fontSize = `${elem.value}px`;
})