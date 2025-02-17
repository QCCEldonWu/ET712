/*

Eldon Wu

Homework 2 - functions, loops, and conditional statement

*/
console.log("------------Exercise 1: name_counting() function------------")
let names =["Ann","Peter","Patricia","Sam","Katerina"]
function name_counting(length) {
    let count = 0
    for(let index = 0; index <= length-1; index++) {
        if(names[index].length < 5){
            count++
        }
    }
    return count
}
name_counting(5)

console.log("------------Exercise 2: checkNum() function------------")
function checkNum() {
    let userinput = parseInt(prompt("Enter a number: "))
    if(isNaN(userinput)) {
        checkNum()
    }else {
        return (userinput % 2 === 0)
    }
}