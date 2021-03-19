import { add, subtract, multiply, divide } from './utils.js';

const addInput1 = document.getElementById ('add-input-1');
const addInput2 = document.getElementById ('add-input-2');
const addResult = document.getElementById ('add-results');

export function handleAddClick() {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const sum = add(value1, value2);
    
    addResult.textContent = sum;
}

const subInput1 = document.getElementById ('sub-input-1');  
const subInput2 = document.getElementById ('sub-input-2');
const subResult = document.getElementById ('sub-results');

export function handleSubClick() {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const minus = subtract(value1, value2);

    subResult.textContent = minus;
}

const mulInput1 = document.getElementById ('mul-input-1');
const mulInput2 = document.getElementById ('mul-input-2');
const mulResults = document.getElementById ('mul-results');

export function handleMulClick() {
    const value1 = Number(mulInput1.value);
    const value2 = Number(mulInput2.value);
    const mult = multiply(value1, value2);
    
    mulResults.textContent = mult;
}

const divInput1 = document.getElementById ('div-input-1');
const divInput2 = document.getElementById ('div-input-2');
const divResult = document.getElementById ('div-results');

export function handleDivClick() {
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);
    const div = divide(value1, value2);

    divResult.textContent = div;
}

