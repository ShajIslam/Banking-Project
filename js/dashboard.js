document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const despositField = document.getElementById('deposit-field');
    const newDepositstring = despositField.value;
    const newDeposit = parseFloat(newDepositstring);
    
    despositField.value ='';

    if(isNaN(newDeposit)){ //check if the input field NaN or not
        alert('please input a valid string');
        return;
    }
    
    const totalDeposit = document.getElementById('make-deposit');
    const previousDepositString = totalDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const totalDepositAmount = previousDeposit + newDeposit; 
    totalDeposit.innerText = totalDepositAmount;

    


    // set total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalaceString = totalBalance.innerText;
    const balance = parseFloat(totalBalaceString);

    const totalFinal = balance + newDeposit;
    totalBalance.innerText = totalFinal;
    
})