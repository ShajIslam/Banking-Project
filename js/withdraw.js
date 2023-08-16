// document.getElementById('withdraw-btn').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const currentWithdrawString =withdrawField.value;
//     const currentWithdraw = parseFloat(currentWithdrawString);


//     withdrawField.value = '';

//     if(isNaN(currentWithdraw)){//check the input field is NaN or not
//         alert('please input a valid string');
//         return;
//     }
    

//     const totalWithdraw = document.getElementById('withdraw-total');
//     const totalWithdrawString = totalWithdraw.innerText;
//     const previousWithdraw = parseFloat(totalWithdrawString);

    

//     const totalBalance = document.getElementById('total-balance');
//     const totalBalaceString = totalBalance.innerText;
//     const balance = parseFloat(totalBalaceString);

//     if(currentWithdraw > balance ){ //check if current withdraw greater than balance or not
//         alert('Not enough fund');
//         return;
//     }

//     const totalWithdrawAmount = previousWithdraw + currentWithdraw;
//     totalWithdraw.innerText = totalWithdrawAmount;

//     const balaceAfterWithdraw = balance - currentWithdraw;

//     totalBalance.innerText = balaceAfterWithdraw;
   

    
// })

//withdraw with function

function getFieldValueById(fieldId){
    const fieldValue = document.getElementById(fieldId);
    const fieldValueString = fieldValue.value;
    const value = parseFloat(fieldValueString);

    fieldValue.value = '';

    return value;
}
function getElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const elementValue = parseFloat(elementValueString);
    textElement.value = '';
    return elementValue;
}
function setElementValueById(elementId, newValue){
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}



document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdraw = getFieldValueById('withdraw-field');
    const previousWithdraw = getElementValueById('withdraw-total');

    const totalWithdraw = previousWithdraw + newWithdraw;
    setElementValueById('withdraw-total', totalWithdraw);

    const previousTotal = getElementValueById('total-balance');
    const newBalance = previousTotal - newWithdraw;
    setElementValueById('total-balance', newBalance);
    

})