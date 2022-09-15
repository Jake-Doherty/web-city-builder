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
const cityArticle = document.getElementById('city-section');

/* State */
const city = {
    name: 'Keats',
    climate: 'dry',
    architecture: 'modern',
    attractions: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

archSelect.addEventListener('change', () => {
    city.architecture = archSelect.value;
    displayCity();
});

attrButton.addEventListener('click', () => {
    const newAttraction = attrInput.value;
    city.attractions.push(newAttraction);
    displayAttractions();
    attrInput.value = '';
});

/* Display Functions */
function displayControls() {
    nameInput.value = city.name;
    climateSelect.value = city.climate;
    archSelect.value = city.architecture;
}

function displayCity() {
    cityArticle.classList.value = '';
    cityArticle.classList.add(city.climate, city.architecture);
    nameDisplay.textContent = city.name;
    cliImage.src = 'assets/' + city.climate + '-climate.jpg';
    cliImage.alt = city.climate;
    archImage.src = 'assets/' + city.architecture + '-architecture.jpg';
    archImage.alt = city.architecture;
}

function displayAttractions() {
    // clear the list with this
    attrList.innerHTML = '';

    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        // not sure if the below is correct to prevent an empty string from being added, but it still works with it added to the code
        if (li.textContent !== '') {
            attrList.append(li);
        }
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayControls();
displayCity();
displayAttractions();
