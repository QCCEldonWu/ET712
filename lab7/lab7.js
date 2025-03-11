console.log("Eldon Wu")
let desc = document.querySelector(".description")
console.log(desc)
let titlenode = document.querySelector("#title")
console.log(titlenode)
let par = document.querySelectorAll("p")
console.log(par)
let methods = document.querySelectorAll(".methods")
console.log(methods)
console.log("\n---- Example 2 loop through each elements in a node list")
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

console.log("\n---- Example 3: CLICK EVENT ----")
let btn = document.querySelector(".btnclick")
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n---- Example 4: CLICK EVENT to change text content ----")
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good afternoon <b> Wu </b>"
})

console.log("\n ----- Example 5: Changing shapes mini-app")
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

let event6 = document.querySelector(".event6")
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}
function openalert(){
    alert("CLICK EVEN - EXAMPLE 7")
}
//emample 8
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randcolor = Math.floor(Math.random()*255)
    divexample8.computedStyleMap.backgroundColor = `rgb(${randcolor},${randcolor},${randcolor})`
}

let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")
inputex9.onkeydown = function(){
    ex9paragraph.innerHTML= `a key was pressed`
}

//Exercise
let ps1 = document.querySelector(".ps1")
ps1.onmouseout = function(){
    ps1.innerHTML = "ELDON WU"
}
let ps2 = document.querySelector(".ps2")
ps2.addEventListener("click", function(){
    ps2.computedStyleMap.fontsize = "25px"
    ps2.computedStyleMap.backgroundColor = `olive`
})
let divs2 = document.querySelector(".divs2")
divs2.addEventListener("click", function(){
    div2.computedStyleMap.backgroundColor = `indigo`
})
let divs3 = document.querySelector(".divs3")
divs3.onkeydown = function(){

}
