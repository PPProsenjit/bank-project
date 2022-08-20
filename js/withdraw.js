//step-1 withdraw event Listener To Deposit
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const newWithdrawTotalElementString = withdrawTotalElement.innerText;
    const newWithdrawTotalElement = parseFloat(newWithdrawTotalElementString);
    // step-4:calculate total withdraw amount
    const currentWithdrawTotal = newWithdrawTotalElement + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step-5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    //convart string to intiger 
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step -6: after withdraw calculate the tolat balance 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step-7:
    withdrawField.value = '';
})