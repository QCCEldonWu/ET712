let welcome = document.querySelector(".welcome")
const bluebtn = document.querySelector(".bluebtn")
const pinkbtn = document.querySelector(".pinkbtn")
const greenbtn = document.querySelector(".greenbtn")
const tombtn = document.querySelector(".tombtn")

bluebtn.addEventListener("click",function(){
    welcome.style.backgroundColor = "deepskyblue"
})
pinkbtn.addEventListener("click",function(){
    welcome.style.backgroundColor = "pink"
})
greenbtn.addEventListener("click",function(){
    welcome.style.backgroundColor = "greenyellow"
})
tombtn.addEventListener("click",function(){
    welcome.style.backgroundColor = "tomato"
})