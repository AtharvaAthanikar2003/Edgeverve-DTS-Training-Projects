// ========================== ASYNC PROGRAMMING ===========================

async function task1(){
    const taskDone=false;
    return new Promise((resolve, reject) =>{
        if(taskDone){
            console.log("Task 1 done");
        } else{
            console.log("Task 1 rejected");
        }
    });
}
async function task2(){
    const taskDone=false;
    return new Promise((resolve, reject) =>{
        if(taskDone){
            console.log("Task 2 done");
        } else{
            console.log("Task 2 rejected");
        }
    });
}
async function task3(){
    const taskDone=false;
    return new Promise((resolve, reject) =>{
        if(taskDone){
            console.log("Task 3 done");
        } else{
            console.log("Task 3 rejected");
        }
    });
}
async function toDos(){
    const task1Res = await task1();
    console.log(task1Res);
    const task2Res = await task2();
    console.log(task2Res);
    const task3Res = await task3();
    console.log(task3Res);
}
toDos();

// ================================== FETCH API ======================================================== 

fetch('https://jsonplaceholder.typicode.com/toDos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

// ========================= EVENT LOOP  =======================

function add(a, b){
    return a+b;
}
console.log('start');
setTimeout(()=>{
    console.log(add(2,3));
},2000);
console.log("end");