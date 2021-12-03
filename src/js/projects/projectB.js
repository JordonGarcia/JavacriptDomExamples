document.querySelectorAll('input').forEach(input => {

    // Change background RGB values based on input slider.
    let inputGreen = document.getElementById('input-scroll-green');
    let inputBlue = document.getElementById('input-scroll-blue');
    let redValue = document.getElementById('red-current-value');
    let greenValue = document.getElementById('green-current-value');
    let blueValue = document.getElementById('blue-current-value');
    let inputRed = document.getElementById('input-scroll-red');
    let reset = document.getElementById('reset-btn');
    let style = document.body.style;
    style.transitionDuration = '500ms';

    input.oninput = () => {
        let [r, g, b] = [inputRed.value, inputGreen.value, inputBlue.value]; // Set RGB values
        let rgb = `RGB(${r}, ${g}, ${b})`;
        style.color = r && b && g < 120 ? 'white' : 'black'; // Change document font color in accordance of background color
        let RGBValue = style.backgroundColor = rgb; // Define input values as RGB Values.
        document.getElementById('range-value').innerHTML = RGBValue;
        redValue.innerHTML = `Red: ${inputRed.value}`;
        greenValue.innerHTML = `Green: ${inputGreen.value}`;
        blueValue.innerHTML = `Blue: ${inputBlue.value}`;
    }

    reset.onclick = () => {
        let x = 255; // Default value is RGB 220
        let rgb = `RGB(${x}, ${x}, ${x})`;
        inputRed.value = inputGreen.value = inputBlue.value = x;
        style.color = 'black';
        let y = style.backgroundColor = rgb;
        document.getElementById('range-value').innerHTML = y;
        redValue.innerHTML = `Red: ${inputRed.value}`;
        greenValue.innerHTML = `Green: ${inputGreen.value}`;
        blueValue.innerHTML = `Blue: ${inputBlue.value}`;
    }
});