/**
 * Eldon Wu
 * Feb 11, fuction
 */
console.log("Eldon Wu")
console.log("\n-------------Example 1: function------------")
//create  a function to prompt 'Hello World'
function msg(){
    console.log(`Hello World!`)
}
console.log("\n-------------Example 2: function to print 3, 2, 1------------")
//example 2, function to print 3, 2, 1
function printCount(){
    for(let n=3; n>0;n--){
        console.log(n)
    }
}
console.log("\n-------------Example 3: function with parameters------------")
//pass a name into a function. The fungtion with prompt the name in all uppercase
function greeting(passname){
    passname = passname.toUpperCase()
    console.log(`Welcome to function ${passname}`)
}
//function that takes two numbers and prompt the sum of them
function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
}
console.log("\n-------------Example 4: snake eyes------------")
//function to print 'snake eyes' if 1 and 1 is passed to the function
function snakeEyes(x,y){
    if(x===1 && y===1){
        console.log("SNAKE EYES!")
    }else(
        console.log("Not a snake eyes!")
    )
}
//call snake eyes function
snakeEyes(3,2)

snakeEyes(1.1)
console.log("\n-------------Example 3: function that returns value------------")
//function that returns double the number
function doubleNumber(n){
    n *= 2 //n = n*2
    return n
}
let number = 5
let dbnum = doubleNumber(number)
console.log(`The double of number ${number} is ${dbnum}`)
console.log("\n-------------Example 6: function ------------")
//function that returns true if temperature is greater than 75. Otherwise, it returns false if the temperature is less than or equal to 75
function checkTemp(temperature){
    if(temperature > 75){
        return true
    }else{
        return false
    }
}
//call function
let t = 100
let temp_result = checkTemp(t)
console.log(`Is the the temperature greater than 75? ${temp_result}`)
