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


addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
mulButton.addEventListener('click', handleMulClick);
divButton.addEventListener('click', handleDivClick);