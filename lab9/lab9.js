console.log("Eldon Wu")
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click",function(){
    window.scrollBy(100,0)
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

let topcontainer = document.querySelector(".topcontainer")
window.addEventListener("scroll", function(){
    let pxTop = this.window.scrollY
    if(pxTop>80){
        topcontainer.style.display = "block"
    }
})