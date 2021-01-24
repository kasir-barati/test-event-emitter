const EventEmitter = require("events");

const eventA = new EventEmitter();
const eventB = new EventEmitter();

eventA.on("A", console.log);
eventB.on("B", console.log);

eventA.emit("B", "Hi this is eventA instance");
eventB.emit("A", "Hi this is eventB instance");
