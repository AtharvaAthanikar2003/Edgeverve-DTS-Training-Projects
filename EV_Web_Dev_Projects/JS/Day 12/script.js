const data = {
    "name":"John",
    "age":22,
    "hobby": {
        "reading":true,
        "gaming":false,
        "sports":"cricket"
    },
}
console.log(data.name)
console.log(data.age)
console.log(data.hobby.sports)
console.log(data["age"])

//Convert JS into JSON
const jsObj={course: "JS", duration: "4 weeks"}
const jsonObj=JSON.stringify(jsObj)
console.log(jsonObj)

//Reverse the string
const revObj=jsonObj.split('').reverse().join('')
console.log(revObj)

//Parse- Constructs the JS values
const jsonString='{"name" : "AA", "age":25, "isEmp":false }'
const obj1=JSON.parse(jsonString)
console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.isEmp)

//Object destructuring
const Employee={
    firstName:'Jack',
    lastName:'Smith',
    salary:60000
}
console.log(Employee)
// O/P- {firstName: 'Jack', lastName: 'Smith', salary: 60000}

// Other format to give o/p - {Propertyname : rename}
let {firstName, lastName, salary} = Employee
console.log(firstName)
console.log(lastName)
console.log(salary)

const UserProfile = {
    id:101,
    desc:"User is an admin",
    dept:"Sales"
}
console.log(UserProfile)

let {id: UserId, desc,...rest} = UserProfile
console.log(UserId)
console.log(desc)
console.log(rest)

//Regular expressions -> 2 ways -> literal notation - /../, RegExp constructor
const exp1=/hello/
const exp2=new RegExp("world")
console.log(exp1.source)
console.log(exp2.source)

//if else
function getColor(color) {
    if (color==="R") {
        return 'Red'
    } else if (color==='G') {
        return 'Green'
    } else if (color==="B") {
        return 'Blue'
    } else {
        return 'No color'
    }
}
console.log(getColor)

/* Other Methods
//Pattern matching
function getColor(color) {
    switch (color) {
        case "R":
            return 'Red';
        case "G":
            return 'Green';
        case "B":
            return 'Blue';
        default:
            return 'No color';
    }
}
console.log(getColor)

//Pattern Matching-like with Object Lookup
function getColor(color) {
    const colorMap = {
        "R": "Red",
        "G": "Green",
        "B": "Blue"
    };
    return colorMap[color] || 'No color';
}
console.log(getColor)
*/

//test
var regex=/hello/
var str="hello world"
var res=regex.test(str)
console.log(res)

//exec
var regex=/hello/
var str="hello world"
var res=regex.exec(str)
console.log(res)

var regex1=/[bt]ear/ //set of char are in [] bracket
console.log(regex1.test('tear'))
console.log(regex1.test('rear'))