const btn = document.getElementById("btn");
btn.addEventListener("click",function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display ="none";
    const transectionArea = document.getElementById(`transection-area`);
    transectionArea.style.display = "block";

})
const deposit = document.getElementById(`deposit`);
deposit.addEventListener("click",function () {
    const depositAmount = document.getElementById(`deposit-amount`).value;
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit = document.getElementById(`current-deposit`).innerText;
    const currentDepositBalance = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositBalance;
    document.getElementById(`current-deposit`).innerText = totalDeposit;
    const currentBalance = document.getElementById(`current-balance`).innerText;
    const balance = parseFloat(currentBalance);
    const totalBalance = depositNumber + balance;
    document.getElementById(`current-balance`).innerText = totalBalance;
    document.getElementById(`deposit-amount`).value = "";
});
const withdraw = document.getElementById(`withdraw`);
withdraw.addEventListener("click",function () {
    const withdrawAmount = document.getElementById(`withdraw-amount`).value;
    const withdrawNumber = parseInt(withdrawAmount);
    const currentWithdraw = document.getElementById(`current-withdraw`).innerText;
    const currentWithdrawBalance = parseInt (currentWithdraw);
    const totalWithdraw =currentWithdrawBalance - withdrawNumber;
    document.getElementById(`current-withdraw`).innerText = totalWithdraw;
    const currentBalance = document.getElementById(`current-balance`).innerText;
    const balance = parseFloat(currentBalance);
    const totalBalance = balance - withdrawNumber;
    document.getElementById(`current-balance`).innerText = totalBalance;
    document.getElementById(`withdraw-amount`).value = "";
});