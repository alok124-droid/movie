// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//http://www.omdbapi.com/?i=tt3896198&apikey=a18f376f



var arr=JSON.parse(localStorage.getItem("movie"))||[]



let id;

let price=JSON.parse(localStorage.getItem("amount"))
let h=document.getElementById("wallet")
h.innerText=price


async function myFun(){

try{
let input=document.getElementById("search").value;
let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a18f376f&s=${input}`)
let data=await res.json();
console.log(data.Search)
var x=data.Search
return x


}




catch{
console.log(err)
}


}


function collect(data){
   
    document.getElementById("movies").innerHTML=null

data.map(function(elem){

var div=document.createElement("div")

var image=document.createElement("img")
image.src=elem.Poster;
var name=document.createElement("p")
name.innerText=elem.Title
var button=document.createElement("button")
button.setAttribute("class","book_now")
button.innerText="Book now "
button.addEventListener("click",function(){

show(elem)


})





div.append(image,name,button)

document.getElementById("movies").append(div)


})





}

async function main(){

var data=await myFun();

if(data==undefined){
    return false;
}
collect(data)

}


function debounce(fun,tym){

if(id){
    clearTimeout(id)
}

id=setTimeout(function(){

fun()


},tym)




}


function show(elem){

arr.push(elem)
localStorage.setItem("movie",JSON.stringify(arr))

window.location.href="/checkout.html"


}