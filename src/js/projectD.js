// TODO: Improve this calculator, it's bad because I made it ages ago lol.
// Calculate distance button.
const calcDistanceButton = document.getElementById('calculate-distance-button');
// Select the conversion type calculate "speed" or "distance".
const chooseConversion = document.getElementById('miles-kilometers-select');
const calcSpeedButton = document.getElementById('calculate-speed-button');
// Select Calculator Option.
const selectOption = document.getElementById('speed-distance-select');
const speedDiv = document.getElementById('calculate-speed-div');
const measurement = { Kilometres: 'KPH', Miles: 'MPH' };

const selectMeasurement = (e) => {
	const speedKilometers = document.getElementById('speed-kilometers-option');
	// Define Kilometers for the selected output.
	const distanceKilometers = document.getElementById('distance-kilometers');

	let type = e.target.value;
	let abbreviation = measurement[type];

	speedKilometers.innerText = type;
	distanceKilometers.innerText = abbreviation;
};

// Assure that the correct UI elements are shown in accordance to selected option.
const optionSelect = (e) => {
	const distanceDiv = document.getElementById('calculate-distance-div');

	switch (e.target.value) {
		case 'speed':
			distanceResultDiv.style.display = 'none';
			distanceDiv.style.display = 'none';
			speedDiv.style.display = 'block';
			break;

		case 'distance':
			speedResultDiv.style.display = 'none';
			distanceDiv.style.display = 'block';
			speedDiv.style.display = 'none';
			break;

		case 'select-speed-distance':
			distanceDiv.style.display = 'none';
			speedDiv.style.display = 'none';
			break;
	}
};

// Invalid Input value Div.
const invalidInputDiv = document.getElementById('invalid-input-value-div');
const inputErrorMessage = document.getElementById('input-error-text');
// Declare Input Values for speed calculation.
let minutes = document.getElementsByClassName('duration-input-minutes');
let seconds = document.getElementsByClassName('duration-input-seconds');
let hours = document.getElementsByClassName('duration-input-hours');

// Assure that the input values are acceptable.
const verifySpeedValue = () => {
	if (speedInput.value > 1e8) {
		speedInput.value = null;
		invalidInputDiv.style.display = 'block';
		inputErrorMessage.innerText = 'Input exceeded maximum value of 100,000,000.';
	} else if (speedInput.value < 0) {
		speedInput.value = null;
		invalidInputDiv.style.display = 'block';
		inputErrorMessage.innerText = 'Input value cannot be negative.';
	}
};
const verifyDistanceValue = () => {
	if (distanceInput.value > 1e8) {
		distanceInput.value = null;
		invalidInputDiv.style.display = 'block';
		inputErrorMessage.innerText = 'Input exceeded maximum value of 100,000,000.';
	} else if (distanceInput.value < 0) {
		distanceInput.value = null;
		invalidInputDiv.style.display = 'block';
		inputErrorMessage.innerText = 'Input value cannot be negative.';
	}
};
const verifyHourValue = () => {
	for (let i = 0; i < hours.length; i++) {
		if (hours[i].value > 1e5) {
			hours[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Hour value exceeded maximum value of 100,000.';
		} else if (hours[i].value < 0) {
			hours[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Hour value cannot be negative.';
		}
	}
};
const verifyMinuteValue = () => {
	for (let i = 0; i < minutes.length; i++) {
		if (minutes[i].value > 60) {
			minutes[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Minute value cannot exceed 60.';
		} else if (minutes[i].value < 0) {
			minutes[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Minute value cannot be negative.';
		}
	}
};
const verifySecondValue = () => {
	for (let i = 0; seconds.length; i++) {
		if (seconds[i].value > 60) {
			seconds[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Second value cannot exceed 60.';
		} else if (seconds[i].value < 0) {
			seconds[i].value = null;
			invalidInputDiv.style.display = 'block';
			inputErrorMessage.innerText = 'Second value cannot be negative.';
		} else {
			invalidInputDiv.style.display = 'none';
		}
	}
};

// Speed and Distance user inputs.
const distanceInput = document.getElementById('distance-input');
const speedInput = document.getElementById('speed-input');
// Average Speed Calculation Results.
let averageSpeedResult = document.getElementById('average-speed-result');
let speedResultDiv = document.getElementById('speed-result-div');

// Calculate speed using given input values provided.
const calculateSpeed = () => {
	let mile = distanceInput.value;
	let time = hours[0].value / 1 + minutes[0].value / 60 + seconds[0].value / 3600;

	let averageSpeed = mile / time;
	averageSpeed = isNaN(averageSpeed) ? 0 : averageSpeed;
	averageSpeed = new Intl.NumberFormat('en-US').format(averageSpeed.toFixed(2));
	distanceInput.value = hours[0].value = minutes[0].value = seconds[0].value = null;

	averageSpeedResult.innerText = `Average Speed: ${averageSpeed} MPH`;
	speedResultDiv.style.display = 'block';
	distanceResultDiv.style.display = 'none';

	// If Kilometers is selected, then change the output result to KPH.
	if (chooseConversion.value === 'Kilometres') {
		averageSpeedResult.innerText = `Average Speed: ${averageSpeed} KPH`;
	}
};

// Average Distance Traveled Calculation Results.
let distanceTraveledResult = document.getElementById('average-distance-result');
let distanceResultDiv = document.getElementById('distance-result-div');
// Calculate the distance using given input values provided.
const calculateDistance = () => {
	let velocity = speedInput.value;
	let time = hours[1].value / 1 + minutes[1].value / 60 + seconds[1].value / 3600;

	let distanceTraveled = time * velocity;
	distanceTraveled = new Intl.NumberFormat('en-US').format(distanceTraveled.toFixed(2));
	speedInput.value = hours[1].value = minutes[1].value = seconds[1].value = null;

	distanceTraveledResult.innerText = `Approximate Distance Traveled: ${distanceTraveled} Miles`;
	distanceResultDiv.style.display = 'block';

	// If Kilometers is selected, then change the output result to KPH.
	if (chooseConversion.value === 'Kilometres') {
		distanceTraveledResult.innerText = `Approximate Distance Traveled: ${distanceTraveled} Kilometres`;
	}
};

// Reset the page on reset button click.
const reset = document.getElementById('reset-btn');
reset.onclick = () => location.reload();

// Close out of the Error Modal
const closeModalBtn = document.getElementById('close-modal');
closeModalBtn.onclick = () => (invalidInputDiv.style.display = 'none');

// Remove calculator visibility when error is shown.
const calculator = document.getElementById('calculator-wrapper');
const test = () => {
	switch (invalidInputDiv.style.display) {
		case 'block':
			console.log('Error is shown!');
			calculator.style.display = 'none';
			break;

		case 'none':
			console.log('Error is hidden!');
			calculator.style.display = 'block';
			break;
	}
};

// Calculate Distance on button calculate click.
calcDistanceButton.addEventListener('click', calculateDistance, false);
// Select calculator conversion method.
chooseConversion.addEventListener('change', selectMeasurement, false);
// Calculate Speed on button calculate click.
calcSpeedButton.addEventListener('click', calculateSpeed, false);
// Verify the calculation method has changed.
selectOption.addEventListener('change', optionSelect, false);
// Verify that the input values are acceptable.
distanceInput.addEventListener('change', verifyDistanceValue, false);
speedInput.addEventListener('change', verifySpeedValue, false);
// Remove calculator visibility when error is shown.
calculator.addEventListener('change', test, false);
// Verify input values are acceptable for both selected calculator options.

for (let i = 0; i < hours.length; i++) hours[i].addEventListener('change', verifyHourValue, false);
for (let i = 0; i < minutes.length; i++) minutes[i].addEventListener('change', verifyMinuteValue, false);
for (let i = 0; i < seconds.length; i++) seconds[i].addEventListener('change', verifySecondValue, false);