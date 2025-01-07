const EventEmitter = require('events');
let eventemitter = new EventEmitter();
eventemitter.on('abc', (msg) => {
    console.log(msg)
})
eventemitter.emit('abc', 'def')
// eventEmitter.removeListener(event, listener)
// eventEmitter.removeAllListeners([event])