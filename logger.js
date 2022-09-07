const eventEmmiter = require("node:events");
const uuid = require("uuid");

class Logger extends eventEmmiter {
  log(msg) {
    //call event
    this.emit("msg", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger

const logger = new Logger()

logger.on('msg', (data)=>{
    console.log('called listener: ',data)
})

logger.log('Hello World')