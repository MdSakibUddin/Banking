//handle deposite button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the ammount deposited
    var depositInput = document.getElementById('deposit-input');
    var depositAmmountText = depositInput.value;
    var newDepositAmmount = parseFloat(depositAmmountText);
    // console.log(depositAmmount);
    //update deposit total
    var depositTotal = document.getElementById('deposit-output');
    var previousDepositText = depositTotal.innerText;

    var previousDepositAmount = parseFloat(previousDepositText);
    var newDepositTotal = previousDepositAmount + newDepositAmmount;

    depositTotal.innerText = newDepositTotal;
    //update account update balance
    var balanceTotal = document.getElementById('balance-total');
    var balanceTotalText = balanceTotal.innerText;
    var previousBalanceTotal = parseFloat(balanceTotalText);
    var newbalanceTotal = previousBalanceTotal + newDepositAmmount;




    balanceTotal.innerText = newbalanceTotal;





    depositInput.value = "";


})
document.getElementById('withdraw-button').addEventListener('click', function () {
    var withdrawInput = document.getElementById('withdraw-input');
    var withdrawAmmountText = withdrawInput.value;
    var newWithdrawAmmount = parseFloat(withdrawAmmountText);

    //set withdraw total
    var withdrawTotal = document.getElementById('withdraw-total');
    var previousWithdrawText = withdrawTotal.innerText;
    var previousWithdrawTotal = parseFloat(previousWithdrawText);
    var newWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balance
    var balanceTotal = document.getElementById('balance-total');
    var previousBalanceText = balanceTotal.innerText;
    var previousBalanceTotal = parseFloat(previousBalanceText);
    var newbalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    balanceTotal.innerText = newbalanceTotal;


    //clear withdraw input
    withdrawInput.value = "";


})