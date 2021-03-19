import { 
    handleAddClick,
    handleSubClick,
    handleMulClick,
    handleDivClick,
} from './handlers.js';

const addButton = document.getElementById ('add-button');
const subButton = document.getElementById ('sub-button');
const mulButton = document.getElementById ('mul-button');
const divButton = document.getElementById ('div-button');
const clearFields = document.getElementById ('clear-fields');


addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
mulButton.addEventListener('click', handleMulClick);
divButton.addEventListener('click', handleDivClick);

// clearFields.addEventListener('click', () => {
//     addInput1.value = '';
//     addInput2.value = '';
//     subInput1.value = '';
//     subInput2.value = '';
//     mulInput1.value = '';
//     mulInput2.value = '';
//     divInput1.value = '';
//     divInput2.value = '';
// });