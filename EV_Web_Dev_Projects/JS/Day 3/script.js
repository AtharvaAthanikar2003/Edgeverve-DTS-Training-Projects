console.log(1==1)
console.log('hello'=='hello')
console.log('1'==1) //true
console.log(0==false)
console.log(5*'world') //NaN (Not a number) for /, -, ^ signs
console.log(5+'world') //5world for % sign
console.log(5^'world') //5 as ^ is exor operator
console.log('1'===1) //false as it do strict checking
console.log('hello'==='hello') //true
console.log(0===false) //false
/* === is used for strict equality/comparison, so for diff value, it gives false, otherwise it gives true
/ use cases -
== - used in html form
=== - used in API's geolocation, YT api, FB
*/

const b=5;
const c=3;
console.log(b&c)

/* 
ternary operator - 3 operands
given by - ?: -> a>b?a>c?a:c:b
if (a>b) {
    if (a>c) {
        a
    else {
        c 
    }
        b 
    }   
}
*/

let a1=3, b1=4, c1=8
let res = a1>b1?a1>c1?a1:b1:c1
console.log(res)

const x=123n;
const y=456n;
z=x+y;
console.log(z)
console.log('1'+'2'*3) // 1+'6'=16
console.log(1+2**3/2-1) //4
console.log('1'==0+'1') //false as 1==01 is not true

/**
for, while, do-while loops
for (initialization; condition;incr/decr)
while (condition) {
    statements;
}
    incr/decr
do {
statements;
}  while (condition);
*/

let n = 5;
let p="";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        p+="*";
    }
    console.log(p)
}