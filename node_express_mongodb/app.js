const event_emitter = require('events');

const custom_emitter = new event_emitter();

// setup event output
custom_emitter.on('response', () => {
  console.log("Event \"response\" has been emitted");
});

// multiple callbacks for the same event
custom_emitter.on('response', () => {
  console.log("Event \"response\" has been EMITTED");
});

// callback with parameters
custom_emitter.on('response', (username) => {
  console.log(`Hi ${username}!`);
});

// trigger event
custom_emitter.emit('response', "Yassir");
