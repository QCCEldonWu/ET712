let welcome = document.querySelector(".welcome")
let body = document.querySelector(".body")
const bluebtn = document.querySelector(".bluebtn")
const pinkbtn = document.querySelector(".pinkbtn")
const greenbtn = document.querySelector(".greenbtn")
const tombtn = document.querySelector(".tombtn")

bluebtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "deepskyblue"

})
pinkbtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "pink"
})
greenbtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "greenyellow"
})
tombtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "tomato"
})