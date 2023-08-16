//function for get element from input feild by id
function getInputFieldValuesById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const value = parseFloat(inputValueString);

    inputField.value = '';
    
    return value;
}
//function for get element from where to set the value

function getElementValueById(elementId){
    const getElement = document.getElementById(elementId);
    const elementValueString = getElement.innerText;
    const elemntValue = parseFloat(elementValueString);

    return elemntValue;
}
//function for set the value
function setElementValueById (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDeposit = getInputFieldValuesById('deposit-field');
    const previousDeposit = getElementValueById('make-deposit');

    const totalDeposit = previousDeposit + newDeposit;
    setElementValueById('make-deposit', totalDeposit);

    const previousBalance = getElementValueById('total-balance');
    const totalDepositBalance = newDeposit + previousBalance;
    setElementValueById('total-balance', totalDepositBalance);

})
