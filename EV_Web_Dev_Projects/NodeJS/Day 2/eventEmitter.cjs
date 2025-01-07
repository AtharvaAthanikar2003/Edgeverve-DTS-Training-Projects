const events=require("events")
const eventEmitter=new events.EventEmitter()
const connectHandler=function connected() {
    console.log("Connection Successful")
    eventEmitter.emit("data_received")
}
eventEmitter.on("connection",connectHandler)
eventEmitter.on("data_received",function(){
    console.log("Data Transferred Successfully")
})
eventEmitter.emit("connection")
console.log("Finish")