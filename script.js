let balanceBtn = document.getElementById('balanceBtn');

const deposits = () =>{
let deposit = document.getElementById('deposit');
let widhdrawal = document.getElementById('widhdrawal');
let showValue = document.getElementsByClassName('showValue')[0];
let form = document.querySelector('form');
let depositNumber = parseInt(deposit.value);
let widhdrawalNumber = parseInt(widhdrawal.value);
// console.log(typeof parseInt(deposit.value));
// console.log(typeof parseInt(widhdrawal.value));
let balance = depositNumber - widhdrawalNumber;
showValue.innerText = balance;
};

balanceBtn.addEventListener('click',deposits);

