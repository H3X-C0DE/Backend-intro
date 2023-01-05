const logEvents = require("./logEvents");
const EventEmitter = require("events");

class TheEmitter extends EventEmitter {}
const emitter = new TheEmitter();
emitter.on("log", (msg) => logEvents(msg));
