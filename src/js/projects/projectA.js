// Changing background color randomly by clicking on the button.
let colorButton = document.getElementById('button-select');
let resetButton = document.getElementById('reset-button');
let style = document.body.style;

colorButton.onclick = () => {
    const hex = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    style.backgroundColor = hex;
    colorButton.innerText = `${hex}`;
}

resetButton.onclick = () => {
    style.backgroundColor = '#ffffff';
    colorButton.innerText = 'Click me!';
}