const addInput1 = document.getElementById ('add-input-1');
const addInput2 = document.getElementById ('add-input-2');
const addButton = document.getElementById ('add-button');
const addResult = document.getElementById ('add-results');
const subInput1 = document.getElementById ('sub-input-1');
const subInput2 = document.getElementById ('sub-input-2');
const subButton = document.getElementById ('sub-button');
const subResult = document.getElementById ('sub-results');
const mulInput1 = document.getElementById ('mul-input-1');
const mulInput2 = document.getElementById ('mul-input-2');
const mulButton = document.getElementById ('mul-button');
const mulResults = document.getElementById ('mul-results');
const divInput1 = document.getElementById ('div-input-1');
const divInput2 = document.getElementById ('div-input-2');
const divButton = document.getElementById ('div-button');
const divResult = document.getElementById ('div-results');
const clearFields = document.getElementById ('clear-fields');


addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result = number1 + number2;
    addResult.textContent = result;
});

subButton.addEventListener('click', () => {
    const number3 = Number(subInput1.value);
    const number4 = Number(subInput2.value);
    const result = number3 - number4;
    subResult.textContent = result;
});

mulButton.addEventListener('click', () => {
    const number5 = Number(mulInput1.value);
    const number6 = Number(mulInput2.value);
    const result = number5 * number6;
    mulResults.textContent = result;
});

divButton.addEventListener('click', () => {
    const number7 = Number(divInput1.value);
    const number8 = Number(divInput2.value);
    const result = number7 / number8;
    divResult.textContent = result;
});

clearFields.addEventListener('click', () => {
    addInput1.value = '';
    addInput2.value = '';
    subInput1.value = '';
    subInput2.value = '';
    mulInput1.value = '';
    mulInput2.value = '';
    divInput1.value = '';
    divInput2.value = '';
});