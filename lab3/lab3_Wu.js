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

console.log("\n-------- Example 6: While Loops ----------")
//use a while loop to display number from 0 to 4
let y = 0;
while(y<=4){
    console.log(y);
    y++;
}
console.log("\n-------- Example 7: While Loop application ----------")
// use while loop to check if the user number matches the secret number
const SECRET = 8;
//collect number from user
let usernumber = parseInt(prompt("Enter a number: "))
let guesscounter = 0;
//run a while loop to recollect the user number if the number doesn't match the secret number
while(usernumber !== SECRET ){
    guesscounter ++;
    usernumber = parseInt(prompt("Wrong guess! Enter another number: "))
}
console.log(`${usernumber} is right! Total attempts: ${guesscounter}`)

console.log("\n-------- Example 8: Break in a While Loop ----------")
//create an app to sum all even numbers. The app cotinuesly collect a positive numbers and stop if a negative number is entered
let sumeven = 0;
let collectnumber;
while(true){
    collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber <0){
        break;
    }else{
        if(collectnumber%2 === 0){
            sumeven = sumeven + collectnumber;
        }
    }
}
console.log(`The sum of all even numbers is ${sumeven}`)

console.log("\n-------- Example 9: continue in a for loop ----------")
//print number from -5 to 5
for(let n = -5;n<=5;n++){
    if(n%2===0){
        continue
    }
    console.log(n)
}

console.log("\n-------- EXERCISE B ----------")
let attempts = 0;
let pin = 0;
while(pin !== 1111){
    if(attempts>2){
        break;
    }
    pin = parseInt(prompt("Enter your PIN: "))
    attempts++;
}
console.log("Account is locked!")