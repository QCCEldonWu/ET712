/*
console.log("\n-----Example 1: console messaging------")
console.warn("This is a warning message!")
console.error("ERROR")

console.log("\n-----Example 2: global object of JS------")
setTimeout(()=>{
    console.log('Welcome to nodejs')
}, 3000)

let count = 0
const timer = setInterval(()=>{
    count += 2
    console.log(`counting = ${count} times`)
    if (count == 10){
        clearInterval(timer)
    }
}, 2000)
*/
console.log("\n-----Example 3: modules------")
const name = require("./mod")
console.log(name.helper("peter"))
console.log(name.id(12345))
console.log(name.email("uwu@qcc.edu"))

console.log("\n-----Example 4: creating a server------")
const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) =>{
    response.writeHead(200,{'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname + '/index.html')

    readstream.pipe(response)
})
server.listen((3000), function(){
    console.log("Server is running")
})