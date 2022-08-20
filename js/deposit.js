// step-1: add event listener To deposite
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2:get Deposit amount from the deporite input
    //for input field use .value to get the value insite the input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    //convart string to intiger
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3: get the cutrrent deposite total 
    //for non input (element other than input. textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalAmountString = depositTotalElement.innerText;
    //convart string to intiger
    const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountString); 
    // step-4: add to set the total deposit
    const currentDepositTotal= previousDepositTotalAmount + newDepositAmount;
    //set the current deposit
    depositTotalElement.innerText = currentDepositTotal;
     // step-5: get the current total balance 
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalElementString = balanceTotalElement.innerText;
     //convart string to intiger 
     const previousBalanceTotalElement = parseFloat(previousBalanceTotalElementString);
     // step-6: calculate current total balance 
    const currentTotalBalance = previousBalanceTotalElement + newDepositAmount;
     //set the balance total 
    balanceTotalElement.innerText  = currentTotalBalance;
     //step-7 clear the deposit value
    depositField.value = '';
})
