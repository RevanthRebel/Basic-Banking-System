let btnEl = document.querySelector('.buton');
let senderEl = document.getElementById('senderName');
let recipientEl = document.getElementById('recipientName');
let tableEl_1 = document.getElementById('amount03');
let tableEl_2 = document.getElementById('amount05');
let formEl = document.getElementById('myform');
let amountEl = document.getElementById('transferAmount');

let amount = null;

let a_1 = parseInt(tableEl_1.textContent);
let a_2 = parseInt(tableEl_2.textContent);

// console.log(tableEl_1.textContent);
// console.log(tableEl_2.textContent);

formEl.addEventListener("submit",function(e){
    e.preventDefault();
})

amountEl.addEventListener("blur",function(e){
    amount = e.target.value;
})

btnEl.onclick = function(){ 
    if (senderEl.value === ""){
    alert('Enter sender Name!!!');
    }
else if(recipientEl.value === ""){
    alert('Enter recipient Name');
    }
else{     
     a_1 -= amount;
     a_2 += parseInt(amount); 
     tableEl_1.textContent = a_1;
     tableEl_2.textContent = a_2;
    alert('Transaction Successful');
}
}