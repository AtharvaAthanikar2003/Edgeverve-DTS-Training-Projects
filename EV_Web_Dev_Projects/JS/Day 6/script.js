const course=["Java","Python","C++"];
console.log(course);

let engg=new Array("CSE","ECE","Mech","Civil");
console.log(engg);

console.log(course.length);
console.log(course.indexOf("cpap"))

console.log(engg[3])

let lastindex=course.length-1;
console.log(lastindex)
console.log(course[lastindex])

var colorcodes=[
    ["1","red"],
    ["2","red2"],
    ["3","red3"],
    ["4","red4"],
    ["5","red5"],
];

for(let i=0;i<colorcodes.length;i++){
    for(let j=0;j<colorcodes[0].length;j++){
        console.log(colorcodes[i][j]);
    }
    
}
console.log(colorcodes[0]);
colorcodes[0][1]="blue";
console.log(colorcodes[0]);

//arrays methods
const color=["red","green","pink"];
color.forEach(color=> console.log(color))

color.push("cyan")
console.log(color)

console.log(color.pop())

//splicing
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

const color2=["red","green","pink","white","black"];
console.log(color2.splice(3,2));
console.log(color2)

const numbers=[2,3,5,7,11,13,17]
let newnum=numbers.slice(3,5);
console.log(newnum)
// console.log(numbers(0,-1));
var col = ["red","pink","red","red"];
console.log(col.splice(0,2));
console.log(col); 


//shift
var col = ["red","pink","red","red"];
console.log(col.shift())

//concat
var col = ["red","pink","red","red"];
let col2=[1,2,3,3];
console.log(col.concat(col2))

//map,filter, reduce
//find

let nos=[1,2,3,4,5,6]
console.log(nos.find(n=>n%2==0))