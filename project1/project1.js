let welcome = document.querySelector(".welcome")
let body = document.querySelector(".body")
const bluebtn = document.querySelector(".bluebtn")
const pinkbtn = document.querySelector(".pinkbtn")
const greenbtn = document.querySelector(".greenbtn")
const tombtn = document.querySelector(".tombtn")
let chellgne = document.querySelector(".chellgne")
let favColor = document.getElementById('favColor')
let schapes = document.querySelector(".schapes")
let animaals = document.querySelector(".animaals")
let numbahz = document.querySelector(".numbahz")
const btnsubmit = document.querySelector(".btnsubmit")

/*COLORS*/
bluebtn.addEventListener("click",function(){
    const favcol = "deepskyblue"
    welcome.style.display = "none"
    document.body.style.backgroundColor = "deepskyblue"
    chellgne.style.display = "block"
    document.getElementById('favColor').innerHTML = "Blue is the best!"
    schapes.style.display = "block"
})
pinkbtn.addEventListener("click",function(){
    const favcol = "pink"
    welcome.style.display = "none"
    document.body.style.backgroundColor = "pink"
    chellgne.style.display = "inline-block"
    document.getElementById('favColor').innerHTML = "Good for you!"
    schapes.style.display = "block"
})
greenbtn.addEventListener("click",function(){
    const favcol = "greenyellow"
    welcome.style.display = "none"
    document.body.style.backgroundColor = "greenyellow"
    document.body.style.color = "black"
    chellgne.style.display = "inline-block"
    document.getElementById('favColor').innerHTML = "Green or yellow is my favorite color too!"
    schapes.style.display = "block"
})
tombtn.addEventListener("click",function(){
    const favcol = "totmato"
    welcome.style.display = "none"
    document.body.style.backgroundColor = "tomato"
    chellgne.style.display = "inline-block"
    document.getElementById('favColor').innerHTML = "Tomato is not a color!"
    schapes.style.display = "block"
})
/*SHAPES*/
const shapes = document.querySelectorAll('.shape');
const dropZones = document.querySelectorAll('.drop-zone');
shapes.forEach(shape => {
    shape.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('shape', event.target.id);
    });
});
let num = 0;
dropZones.forEach(zone => {
    zone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    zone.addEventListener('drop', (event) => {
        event.preventDefault();
        const shapeId = event.dataTransfer.getData('shape');
        const draggedShape = document.getElementById(shapeId);
        if (zone.getAttribute('data-shape') === shapeId){
            zone.appendChild(draggedShape);
            draggedShape.draggable = false;
            zone.style.backgroundColor = 'lightgreen';
            num++;
        }else{
            alert('Wrong shape! Try again.');
        }
    });
});
/*Animals*/
const nxtbtn = document.querySelector(".nxtbtn")
let challenge = document.getElementById('challenge')
nxtbtn.addEventListener("click",function(){
    if(num === 3){
        schapes.style.display = "none"
        animaals.style.display = "inline-block"
        document.getElementById('favColor').innerHTML = "Well Done!"
        document.getElementById('challenge').innerHTML = "Zebras are members of the horse family known for their distinctive black and white stripes. Can you correctly identify which of these four images depicts a zebra?"
    }else{
        document.getElementById('favColor').innerHTML = "INCOMPLETE"
        alert('Not Finished!');
    }
})
let quagga = document.getElementById('quagga')
let dog = document.getElementById('dog')
let okapi = document.getElementById('okapi')
let zebra = document.getElementById('zebra')
quagga.addEventListener("click",function(){
    this.style.display = "none"
    alert('Wrong! Try again.');
})
dog.addEventListener("click",function(){
    this.style.display = "none"
    alert('Wrong! Try again.');
})
okapi.addEventListener("click",function(){
    this.style.display = "none"
    alert('Wrong! Try again.');
})
zebra.addEventListener("click",function(){
    alert('Correct!');
    animaals.style.display = "none"
    numbahz.style.display = "inline-block"
    document.getElementById('challenge').innerHTML = "Now solve the following math equation for x."
})
/*Numbers*/

let equation = document.getElementById('equation')
function generateEquation(){
    let a = Math.floor(Math.random() * 10) + 1; // Ensures 'a' is not zero
    let b = Math.floor(Math.random() * 20) - 10; // Between -10 and 10
    let c = Math.floor(Math.random() * 10) + 1; // Ensures 'c' is not zero
    let d = Math.floor(Math.random() * 20) - 10; // Between -10 and 10
    document.getElementById('equation').innerHTML = `${a}x + ${b} = ${c}x + ${d}`
    console.log((d - b) / (a - c))
}
let question = generateEquation()
btnsubmit.addEventListener("click", function(event){
    event.preventDefault()
    let answer = document.querySelector("#answer")
    let ansvalue = answer.value
    ansvalue = ansvalue.trim()
    if(ansvalue != question.toString()){
        generateEquation()
    }
})