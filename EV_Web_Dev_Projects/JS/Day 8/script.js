// Combination of 2 arrays
// If these '...' dots are not given before arr, it shows no.of elements present in that array
// Now, it shows no of elements and elements mentioned in the array
var arr1=[1,2,3];
var arr2= [4,5,6];
var combinedArray=[...arr1, ...arr2]
console.log(combinedArray);

function sum (a,b,c,d) {
    return a+b+c+d  // 1+2+3+4=10
}

const nums=[1,2,3,4]
const result = sum(...nums)
console.log(result)

var str="Java"
var array=[...str]
console.log(array) // Prints (4) ['J', 'a', 'v', 'a'] pattern

// Rest Parameter
const num1=[1,2,3,4,5,6]
const [first, second,...rest] = num1
console.log("1st element: ", first)
console.log("2nd element: ", second)
console.log("Remaining elements: ", rest)

let printArray=function(...args){
    console.log(args)
}
printArray(3)
printArray(4,5,6)

function sum (...args) {
    let total=0
    for (const a of args) {
        total+=a
    }
    return total
}   
console.log(sum(1,2,3))
console.log(sum(10,20,30,40))

// Strings- Primitive datatype and immutable
// '', "", `` are template literals, ${variable_name} is used
const title="C Programming"
const author="Dennis Richie"
const string="The Book "+title+" is written by "+author // normal concatenation method
console.log(string)
console.log(`The book ${title} is written by ${author}`) // template literal method
// Line 48 and 50 prints same sentences but have different presentations
console.log(title.toLowerCase)
console.log(title.toUpperCase)
console.log("Javascript".charAt(1)) // print character at 1st index-a
console.log("Javascript".indexOf('a')) // returns 1st occurence of that letter in given string
console.log("Javascript".indexOf('va')) // returns 1st occurence of that substring in given string

let message="hello"
message[0]="H"
console.log(message) //prints hello as strings are immutable

let str1 ="Javascript is a language of web"
let res=str1.endsWith("of web") //prints true
console.log(res) //returns boolean values

var str2="Hello javascript ****"
var expr=str2.startsWith("He")
var expr=str2.startsWith("ja",6) //false
console.log(expr) //prints true

var val=str2.substring(6,10)
console.log(val)

var val2=str2.slice(10,) //prints that given index element till the last element
console.log(val2)

// substring takes 2 arguments which takes - -ve, NaN, 0
// slicing can take 1 also which also takes - -ve, NaN, 0 but in -ve, it counts backward

var val3=str2.split(' ', 2) //2 is taking no.of parameters
console.log(val3)