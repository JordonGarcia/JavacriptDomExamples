// Changing the color of a button to a random color by clicking on it.
let colorButton = document.getElementById('button-select');
let resetButton = document.getElementById('reset-button');
let style = document.body.style;

colorButton.onclick = () => {
    const hex = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    style.backgroundColor = hex;
    // colorButton.style.fontFamily = 'Trebuchet MS'; - What is this?
    colorButton.innerText = `${hex}`;
}

resetButton.onclick = () => {
    style.backgroundColor = '#ffffff';
    colorButton.innerText = 'Click me!';
}