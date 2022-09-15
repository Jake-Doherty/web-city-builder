/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('city-name');
const climateSelect = document.getElementById('climate-selector');
const archSelect = document.getElementById('architecture-selector');
const attrInput = document.getElementById('attractions-input');
const attrButton = document.getElementById('attractions-button');
const nameDisplay = document.getElementById('name-display');
const cliImage = document.getElementById('cli-image');
const archImage = document.getElementById('arch-image');
const attrList = document.getElementById('attr-list');

/* State */
const city = {
    name: 'Keats',
    climate: 'Dry',
    architecture: 'Classical',
    attractions: ['Tesla Trees', 'The Sphinx'],
};

// console.logs REMOVE BEFORE SUBMIT!!!!!!
console.log(nameInput);
console.log(climateSelect);
console.log(archSelect);
console.log(attrInput);
console.log(city);
console.log(attrButton);
console.log(nameDisplay);
console.log(cliImage);
console.log(archImage);
console.log(attrList);

/* Events */
nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
    cliImage.src = 'assets/' + city.climate + '-climate.jpg';
}

// (don't forget to call any display functions you want to run on page load!)
displayCity();
