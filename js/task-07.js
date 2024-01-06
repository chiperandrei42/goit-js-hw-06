const fontSizeControl = document.getElementById('font-size-control');
const textValue = document.getElementById('text');

fontSizeControl.addEventListener('input', function () {
    textValue.style.fontSize = fontSizeControl.value + "px";
});