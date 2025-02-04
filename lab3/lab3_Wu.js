/**
 * Eldon Wu
 * Feb 4, Loops
 */
console.log("Eldon Wu")
console.log("\n-------- Example 1: For Loops ----------")
//use for loop to print from 0 to 4
for(let n = 0; n <= 4; n ++){
    console.log(`counting = ${n}`)
}

console.log("\n-------- Example 2: For Loop with conditional statement ----------")
//collect initial value from user
//print all even numbers between initial value and 20
let initialValue = parseInt(prompt("Enter a number: "))
for(initialValue; initialValue<=20; initialValue++){
    if(initialValue%2==0){
        console.log(initialValue)//only print even numbers
    }
}

console.log("\n-------- Example 3: For Loops as decrement counter ----------")
//for loop to print print from 9 to 0
for(let n=9;n>=0;n--){
    console.log(n)
}

console.log("\n-------- Example 4: For Loops in an array ----------")
//setup a list of animals
let animals = ["fish","turtle","dog"]
for(let index = 0; index<animals.length;index++){
    console.log(animals[index])
}
//setup a list of numbers
let numbers = [5,-3,10,-9,2]
let counterNegative = 0
for(let index = 0; index <numbers.length;index ++){
    if(numbers[index] < 0){
        counterNegative++;
    }
}
console.log(`There are ${counterNegative} negative bumbers in list 'numbers'`)

console.log("\n-------- Example 5: For Loops in a string ----------")
let username = "Peter Pan of Neverland"
let counter_e = 0;
for(let index = 0;index<username.length;index++){
    //console.log(username[index])
    //find total number of letter 'e' in username
    if(username[index] === 'e'){
        counter_e++;
    }
}
console.log(`There are ${counter_e} letter e in username`)

console.log("\n-------- EXERCISE FOR LOOP ----------")
let num = [-3,10,0,8,-9,5,-2,8,6,-1]
let sumNeg = 0;
let sumPos = 0;
//use for loop to check and add all negative numbers and positive numbers
for(let index = 0;index<num.length;index++){
    if(num[index]<0){
        sumNeg += num[index];
    }else{
        sumPos += num[index];
    }
}
console.log(`Sum of all the negative numbers = ${sumNeg}`)
console.log(`Sum of all the positive numbers = ${sumPos}`)