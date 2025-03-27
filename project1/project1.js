let welcome = document.querySelector(".welcome")
let body = document.querySelector(".body")
const bluebtn = document.querySelector(".bluebtn")
const pinkbtn = document.querySelector(".pinkbtn")
const greenbtn = document.querySelector(".greenbtn")
const tombtn = document.querySelector(".tombtn")
const shapes = document.querySelector(".shapes")

bluebtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "deepskyblue"
    document.body.style.color = "white"
    shapes.style.display = "inline"
})
pinkbtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "pink"
    document.body.style.color = "white"
    shapes.style.display = "inline"
})
greenbtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "greenyellow"
    document.body.style.color = "darkorange"
    shapes.style.display = "inline"
})
tombtn.addEventListener("click",function(){
    welcome.style.display = "none"
    document.body.style.backgroundColor = "tomato"
    document.body.style.color = "white"
    shapes.style.display = "inline"
})

//Shapes
let circle = document.querySelector(".circle")
let square = document.querySelector(".square")
let oval = document.querySelector(".oval")
let rectangle = document.querySelector(".rectangle")
circle.addEventListener("click",function(){
    circle.className = "oval"
    circle.innerHTML = "Oval"
})
square.addEventListener("click",function(){
    square.className = "rectangle"
    square.innerHTML = "Rectangle"
})