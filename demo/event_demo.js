const EventEmitter = require('node:events');

//create class
class MyEmitter extends EventEmitter{}

//init object
const myEmitter = new MyEmitter()

//event listener
myEmitter.on('event', ()=>{
    console.log('event fired')
})

//event Emitter
myEmitter.emit('event')