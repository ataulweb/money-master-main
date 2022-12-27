
function balanceAmountTotal(){
    const foodInputField = document.getElementById('food-input-field');
    const foodInputValue = foodInputField.value;
    const foodInputNumber = parseFloat(foodInputValue);
    
    const rentInputField = document.getElementById('rent-input-field');
    const rentInputValue = rentInputField.value;
    const rentInputNumber = parseFloat(rentInputValue);
    
    const clothInputField = document.getElementById('cloth-input-field');
    const clothInputValue = clothInputField.value;
    const clothInputNumber = parseFloat(clothInputValue);

    
    const expenseField = document.getElementById('expense-field');
    const calculationNumber = foodInputNumber + rentInputNumber + clothInputNumber;
    expenseField.innerText = calculationNumber;

    const incomeInputField = document.getElementById('income-input-field')
    const incomeInputValue = incomeInputField.value;
    const incomeInputNumber = parseFloat(incomeInputValue);
    
    const balanceTotal = incomeInputNumber - calculationNumber;
        
    const balanceField = document.getElementById('balance-field');
    balanceField.innerText = balanceTotal; 
}

document.getElementById('btn-calculation').addEventListener('click', function(){
    balanceAmountTotal()
})

function savingAmountTotal(){
    const saveInputField = document.getElementById('save-input-field')
    const saveInputFieldValue = saveInputField.value;
    const saveInputFieldNumber = parseFloat(saveInputFieldValue);
    
    const incomeInputFieldTotal = document.getElementById('income-input-field')
    const incomeInputFieldTotalValue = incomeInputFieldTotal.value;
    const incomeInputFieldTotalNumber = parseFloat(incomeInputFieldTotalValue)
    const savingAmount = incomeInputFieldTotalNumber * saveInputFieldNumber;
    const savingAmountPercent = savingAmount / 100; 

    const savingAmountField = document.getElementById('saving-amount-field')
    const savingAmountFieldValue = savingAmountField.value;
    savingAmountField.value = savingAmountPercent;

    const balanceTotalReamining = document.getElementById('balance-field')
    const reaminingBalanceTotalValue = balanceTotalReamining.innerText;
    const balanceTotalReaminingNumber = parseFloat(reaminingBalanceTotalValue)
    const reaminingBalance = balanceTotalReaminingNumber - savingAmountPercent;

    const reaminingBalanceField = document.getElementById('reamining-balance')
    const reaminingBalanceValue = reaminingBalanceField.value;
    reaminingBalanceField.value = reaminingBalance;
}

document.getElementById('btn-savings').addEventListener('click', function(){
    savingAmountTotal()
    
})