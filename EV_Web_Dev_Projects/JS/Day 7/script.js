//Average of nos
var avg = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    var result = sum / arguments.length;
    return result;
}
console.log(avg(3, 4, 5)); 

//Average of nos using array
const avgArray = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0; 
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const result = sum / arr.length;
    return result;
}
console.log(avgArray([6, 8, 10])); 

//Print nos given in array using anonymous function
let numbers=[1,2,3,4,5]
var sum=0
numbers.forEach(function(number) {
    sum+=number
    console.log("Elements in array: "+number)
})
console.log("Sum of elements in array: "+sum)

/*Arrow function
()=>{}
function funname(){}
this, arguments -> Java, C++
*/
let myFunc=()=>{
    console.log("Hello, this is an application of arrow function")
}
myFunc()

//Add 2 no.s
let sum1=(a,b)=>{
    console.log(a+b)
}
sum1(5,10)

let func1=(a1,a2,a3)=>{
    console.log(a1*a2*a3)
}
func1(3,4,2)

//toUpperCase
let toUpper=(str)=>{
    return str.toUpperCase()
}
console.log(toUpper("js sessions"))

let words = ["hello", "welcome", "to", "js", "sessions"];

// Convert each word to uppercase
let upperCaseWords = words.map(function(word) {
    return word.toUpperCase();
});
console.log(upperCaseWords.join(", "));