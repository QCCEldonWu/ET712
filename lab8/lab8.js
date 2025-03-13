console.log("eldon wu")
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME"){
        e.target.textContent = "Button was Pressed."
    }else{
        e.target.textContent = "PRESS ME"
    }
    e.target.classList.toggle("bthactive")
})

let fruitlist = document.querySelector("#fruitlist")
fruitlist.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() === 'li'){
        event.target.remove()
    }else{
        console.log(event.target)
    }
})
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is down")
})

let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let close = document.querySelector(".close")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display="block"
})
close.addEventListener("click",function(){
    modalwindow.style.display = "none"
})