const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');
let counterValue = document.getElementById('counter-value');
const reset = document.getElementById('reset-btn');
let style = document.body.style;
let currentValue = 0;
let currentIndex = 0;
let isMouseDown = false;

let updateValue = () => {
    if (currentValue >= 100) { currentValue = 100 }
    else if (currentValue <= -100) { currentValue = -100 }
    counterValue.innerHTML = currentValue;
};

let addFunctionFire = () => {
    isMouseDown = true;
    currentValue++;
    updateValue();
    updateBackGroundColor();
    // Rapid fire onMouseDown
    setInterval((function (index) {
        return () => {
            if (isMouseDown && currentIndex == index) {
                updateValue();
                currentValue++;
                updateBackGroundColor();
            }
        };
    })(++currentIndex), 100); // Millisecond fire time
};

let decreaseFunctionFire = () => {
    isMouseDown = true;
    currentValue--;
    updateValue();
    updateBackGroundColor();
    // Rapid fire onMouseHold
    setInterval((function (index) {
        return () => {
            if (isMouseDown && currentIndex == index) {
                updateValue();
                currentValue--;
                updateBackGroundColor();
            }
        };
    })(++currentIndex), 100); // Millisecond fire time
}

let removeFunctionFire = () => isMouseDown = false;

reset.onclick = () => {
    currentValue = 0;
    style.background = 'white';
    updateValue();
}

// Check to see if the currentValue is positive or negative
const updateBackGroundColor = () => {
    decreaseButton.style.background = 'rgba(230, 25, 25, 0.7)';
    decreaseButton.style.boxShadow = '2px 2px 2px 0px rgba(210, 25, 25, 0.7)'
    if (currentValue < 0) {
        negativeBGColorChange();
    } else {
        positiveBGColorChange();
    }
}

const positiveBGColorChange = () => {
    let [r, g, b] = [0, 255, 0]; // Set RGB Values
    let rgb = `RGB(${r + currentValue * 10}, ${g - currentValue * 3}, ${b})`;
    style.background = rgb;
    if (currentValue === 0) {
        style.background = 'white';
    }
}

const negativeBGColorChange = () => {
    let [r, g, b] = [0, 255, 255] // Set RGB Values
    let rgb = `RGB(${r}, ${g + currentValue * 4}, ${b})`;
    style.background = rgb;
    if (currentValue === 0) {
        style.background = 'white';
    }
}

// Fire all the functions of the buttons
increaseButton.addEventListener('mousedown', addFunctionFire, false);
increaseButton.addEventListener('mouseup', removeFunctionFire, false);
increaseButton.addEventListener('mouseleave', removeFunctionFire, false);
decreaseButton.addEventListener('mousedown', decreaseFunctionFire, false);
decreaseButton.addEventListener('mouseup', removeFunctionFire, false);
decreaseButton.addEventListener('mouseleave', removeFunctionFire, false);