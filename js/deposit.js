const depositBtn = document.getElementById('btn-deposit');
depositBtn.addEventListener('click', function () {
  //get new dposit amount
  const depositField = document.getElementById('input-deposit');
  const newDepositAmount = parseFloat(depositField.value);

  //get current deposit amount
  const depositTotalElement = document.getElementById('deposit-total');
  const prevDeposit = parseFloat(depositTotalElement.innerText);

  //set deposit amount to total deposit
  const currentDeposit = prevDeposit + newDepositAmount;
  depositTotalElement.innerText = currentDeposit;

  //get current total balance and set total balance
  const balanceTotalElement = document.getElementById('balance-total');
  const prevBalance = parseFloat(balanceTotalElement.innerText);
  const currentBalance = prevBalance + newDepositAmount;
  balanceTotalElement.innerText = currentBalance;

  //clear input field
  depositField.value = '';
});
