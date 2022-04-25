// Store the wallet amount to your local storage with key "amount"
var amount=document.getElementById("wallet")
amount.innerText=JSON.parse(localStorage.getItem("amount"))

function myFun()
{

var input=Number(document.getElementById("amount").value);




localStorage.setItem("amount",JSON.stringify(input))
window.location.reload()


}