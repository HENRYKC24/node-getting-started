const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const emitEvent = new EventEmitter();

emitEvent.emit('automatic-event');
emitEvent.on('automatic-event', () => console.log('Automatic event emitted...'));
// the above code can not log anything to the console because the event fired before the listener
// this can be corrected by wrapping the event fire with the 
// setImmediate call
// e.g setImmediate(() => {
//  emitEvent.emit('automatic-event');
//})

// You can also invert line 8 and 9 as a second alternative