const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function () {
  const withdrawField = document.getElementById('input-withdraw');
  const newWithdrawAmount = parseFloat(withdrawField.value);

  //get current withdraw amount and set withdraw amount
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const prevWithdrawAmount = parseFloat(withdrawTotalElement.innerText);
  const totalWithdrawAmount = prevWithdrawAmount + newWithdrawAmount;
  withdrawTotalElement.innerText = totalWithdrawAmount;

  //calculate total balance
  const balanceTotalElement = document.getElementById('balance-total');
  const prevBalance = parseFloat(balanceTotalElement.innerText);
  const currentBalance = prevBalance - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalance;

  //clear input field
  withdrawField.value = '';
});
