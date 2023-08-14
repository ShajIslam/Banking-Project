document.getElementById('deposit-btn').addEventListener('click', function(){
    let count =0;
    const despositField = document.getElementById('deposit-field');
    const newDepositstring = despositField.value;
    const newDeposit = parseFloat(newDepositstring);
    
    
    const totalDeposit = document.getElementById('make-deposit');
    const previousDepositString = totalDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const totalDepositAmount = previousDeposit + newDeposit; 
    totalDeposit.innerText = totalDepositAmount;

    despositField.value ='';
    
})