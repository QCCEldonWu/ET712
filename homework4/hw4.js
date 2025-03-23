const myform = document.querySelector("#myform")
const btnsubmit = document.querySelector(".btnsubmit")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const errormsg1 = document.querySelector(".errormsg1")
const errormsg2 = document.querySelector(".errormsg2")

window.addEventListener("load",function(){
    btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()
    
    let username = document.querySelector("#username")
    let usernamevalue = username.value
    
    usernamevalue = usernamevalue.trim()
    
    if(usernamevalue===""){
        alert("Please enter ur name")
        return;
    }
    
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"
    username.value = ""
})

email.addEventListener("input", function(){
    let emailvalue = email.value
  
    emailvalue = emailvalue.trim()

    if(emailvalue.split("@") !== 2 && emailvalue[emailvalue.length - 3] !== '.'){
        btnsubmit.disabled = true
    }else{
        errormsg1.style.display  = "none"
        btnsubmit.disabled = false
    }
})

password.addEventListener("input", function(){
    let passwordvalue = password.value
  
    passwordvalue = passwordvalue.trim()

    for(let i = 0; i <= passwordvalue.length; i++){
        if(passwordvalue[i] == '#' || passwordvalue[i] == '$' || passwordvalue[i] == '%'){
            if (passwordvalue.length < 5){
                btnsubmit.disabled = true
            }else{
                errormsg2.style.display  = "none"
                btnsubmit.disabled = false
            }
        }else{
            errormsg2.style.display  = "none"
            btnsubmit.disabled = false
        }
    }
})

let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pexels,
        behavior:"smooth"
    })
}

btnright.addEventListener("click", function(){
    scrollgallery(500)
})
btnleft.addEventListener("click", function(){
    scrollgallery(-500)
})