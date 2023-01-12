// path modules from node.js standard library
const path = require('path');

// basename method outputs the file's name instead of the full path
// also `` is called a template string and allows for inserting variables
console.log(`${path.basename(__filename)} has just been executed from app.js`);
