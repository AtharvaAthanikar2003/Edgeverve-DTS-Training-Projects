// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const ct=new Date();
console.log(ct);

const timeval=new Date(0);
console.log(timeval);
const timeval2=new Date(1000000000000);
console.log(timeval2);

const date=new Date("2024-11-13")
console.log(date)

const date2=new Date("2023-07")
console.log(date2)

const date3=new Date("02")
console.log(date3)

//t and z
const date4=new Date("2021-08-01 T 12:00:00 Z")
console.log(date4)

console.log(new Date().getFullYear());      // Logs the current year
console.log(new Date().getMonth()+1);       // Logs the current month (0-based index)
console.log(new Date().getDay());           // Logs the current day of the week (0 = Sunday, 6 = Saturday)
console.log(new Date().getDate());          // Logs the current date of the month
console.log(new Date().getTime());          // Logs the current time of the month

const timevalue= new Date();
const dateval=timevalue.getDate();
const event=new Date('Feb 20,2024 23:15:30')
timevalue.setDate(15)
console.log(timevalue)

const currentDate=new Date();
const date5=currentDate.getDate()
const month=currentDate.getMonth()
const year= currentDate.getFullYear();

let monthDateYear= (month+1)+'/'+date5+'/'+year;
console.log(monthDateYear)

const currentDate2 = new Date();
const startDate = new Date('2024-01-01');
const timeDifference = currentDate2 - startDate;

// Print no of days completed from jan 2024 till now
console.log(Math.floor((new Date() - new Date('2024-01-01')) / (1000 * 60 * 60 * 24)));