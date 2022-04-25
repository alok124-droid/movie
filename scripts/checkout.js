// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var arr=[]
let price=JSON.parse(localStorage.getItem("amount"))
let movies=JSON.parse(localStorage.getItem("movie"))
let h=document.getElementById("wallet")
h.innerText=price;




movies.map(function(elem){

let div=document.createElement("div")
var image=document.createElement("img")
image.src=elem.Poster
let name=document.createElement("h2")
name.innerText=elem.Title;


div.append(name,image)
document.getElementById("movie").append(div)
})



function myFun(){

let input=Number(document.getElementById("number_of_seats").value)


if((input*100)>price){
    alert("insufficient wallet balance")
}

else{
    alert("Booking successful!")
}

let total=price-(input*100)
console.log(total)
localStorage.setItem("amount",JSON.stringify(total))
window.location.reload()
}