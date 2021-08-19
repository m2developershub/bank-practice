document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  // add deposit amount

  const depositValue = document.getElementById("deposit-value");
  const depositValueText = depositValue.innerText;
  const depositValueAmount = parseFloat(depositValueText);

  depositValue.innerText = depositAmount + depositValueAmount;
  //   add money deposit balance

  const currentBalance = document.getElementById("current-balance");
  const currentBalanceText = currentBalance.innerText;
  const currentTotalAmount = parseFloat(currentBalanceText);
  currentBalance.innerText = currentTotalAmount + depositAmount;

  depositInput.value = "";
});
//   withdraw section
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputText = withdrawInput.value;
  const withdrawInputAmount = parseFloat(withdrawInputText);

  //   add withdraw balance to withdraw board
  const withdrawValue = document.getElementById("withdraw-value");
  const withdrawValueText = withdrawValue.innerText;
  const withdrawValueAmount = parseFloat(withdrawValueText);

  withdrawValue.innerText = withdrawInputAmount + withdrawValueAmount;

  const currentBalance = document.getElementById("current-balance");
  const currentBalanceText = currentBalance.innerText;
  const currentTotalAmount = parseFloat(currentBalanceText);

  currentBalance.innerText = currentTotalAmount - withdrawValueAmount;

  //   clear withdraw input
  withdrawInput.value = "";
});
