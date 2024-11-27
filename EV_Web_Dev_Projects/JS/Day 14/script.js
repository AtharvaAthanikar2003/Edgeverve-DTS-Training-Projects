/* 
Asynchronous functions in JS
main () {
    printf()
}
callback is a function that is passed as an arg to another function
fun1 (fun2) {
    fun2()    
}
Types- callback, promise, async/await, setTimeout, setInterval, web apis, event listeners
*/ 

function sayhello(name, callback) {
    console.log("Hi"+' '+name)
    callback()
}
function callme(){
    console.log("Hi, I'm from callback function")
}
sayhello("John", callme)

// Asynchronous callback
console.log("/////")
function sayhello(callback) {
    console.log("Welcome to JS")
}
function callme(name){
    console.log("Hello, "+ name)
}
setTimeout(sayhello, 600)
callme("John")

const fun1=setTimeout(function () {
    console.log("This function is called after 5 seconds")
}, 600)

/* 
callstack- Lifo
main -> printf() -> pow()
frame -> popped
return addresses
local var/arg
handle recursion
mem.allocation and deallocation
*/

console.log("/////")
function firstfun(callback){
    setTimeout(()=> {
        console.log("Fun1 is called")
        callback()
    }, 1000)
}
function secondfun(callback){
    setTimeout(()=> {
        console.log("Fun2 is called")
        callback()
    }, 1000)
}
function thirdfun(callback){
    setTimeout(()=> {
        console.log("Fun3 is called")
        callback()
    }, 1000)
}
firstfun(function(){
    secondfun(function(){
        thirdfun(function(){
            console.log("All funcs are executed")
        })
    })
})

/*
solutions to avoid nested functions - promises, async/await
ES6 - avoid callback hell
Has 3 states -
pending- initial state, operation is not completed
fulfilled- operation is completed
rejected- operation failed
promise constructor
Syntax- new Promise((resolve, reject)=>{})
resolve- operation successfull
reject- operation failed
*/

let objPromise=new Promise((resolve,reject)=>{
    let success=true
    if (success) {
        resolve("Promise fulfilled")
    } else {
        reject("Promise not fulfilled")
    }
})
console.log(objPromise)  //It's a object, not function