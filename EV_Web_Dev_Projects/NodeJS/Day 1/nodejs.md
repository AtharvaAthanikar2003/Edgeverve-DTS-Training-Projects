Day 1- 24/12/2024

Introduction - 
Node.js = Runtime Environment + Javascript Library

Data types - 
1. Boolean
2. Number - a. Integer
                1. Decimal
                2. Binary
                3. Octal
                4. Hexadecimal
            b. Floating Values
3. String

------------------------------------------------------------------------

Day 2- 26/12/2024

Package.json - Contains the essential dependencies required for the execution of the NodeJS application. Automatically brings or installs the required modules

Types of dependencies -
1. PeerDependencies - Check compatibility of npm version

2. PeerDependenciesMeta - Used to perform inter communications
between packages

3. OptionalDependencies - 
Avoid build failures when the dependency can't be found or fails to install.

4. BundledDependencies - 
Useful when special packages needs to be preserved locally

5. Engines - Specify node/npm version, the project/application which works on it

6. OS - Specifies all supporting OS for your modules 

7. CPU - Specifies the status of the processes

Synchronous Code Execution - Blocking I/O model

Asynchronous Code Execution - Non-blocking I/O model

Event Loops -
Phases of event loops -
1. Timer: setTimeout(), setInterval()
2. Pending Callback: setImmediate() - This phase processes any callbacks that have been added to the message queue by asynchronous functions

promise=function abc()=>(res,rej) {
    res() {

    }
    rej() {

    }
    .then() {

    }
    .catch() {

    }
}

Chaining of promises...

lets declare promise1
promiseexample {
    ...
}

lets declare promise2
promiseexample {
    ...
}

lets declare promise3
promiseexample {
    ...
}

promise1
.then {(promise2
    .then{(promise3
        .then{()}
        .catch{()}
        )}
    .catch{()})}
.catch{()}    

Event Driven Programming - 
Events, Listeners, Event Handlers
    module="Events"
    eventEmitter class
    emit()
Syntax:
    const EventEmitter=require('events)
    var eventEmitter=new()
    emit()
    registers..
    on()
    listener()

------------------------------------------------------------------------

Day 3 - 27/12/2024

File Operations - 
1. Open
2. Read
3. Write
4. Seek
5. Update
6. Close

fs (file system) - core module in nodejs

Operations to our directories -
mkdir, rmdir

File System in module - 
const fs=require("fs)

Key Features -
1. Supports async and sync methods
2. Error handling mechanism
3. Directory management

Open file syntax -
fs.open(path, mode, flag, callback)

------------------------------------------------------------------------

# ================= 31/12/24 ======================

# STREAMS : Collection of data just like arrays of Strings

# Stream Advantages :
    1. Memory eff ::  data comes in smaller chunks 

    2. Fast :: system will not have to wait for complete data processing

    3. Composable data :: data piping

    4. Buffer free

# Streams Types : 
    1.Readable : Read/receive data in ordered fashion
    2.Writable : Write/send data in ordered fashion
    3.Duplex : Both Read & Write data in ordered fashion
    4.Transform : Modify and send the data