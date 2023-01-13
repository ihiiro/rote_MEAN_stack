const os = require('os');

console.log(os.userInfo());

console.log("\n");

// number of seconds the computer has been running
// the expression gets time in hours
console.log(`The computer has been running for ~${Math.round(os.uptime()/3600)}hours.`);

console.log("\n");

const os_info = {
  type: os.type(),
  release: os.release(),
  totalmem: `~${Math.round(os.totalmem()/1073741824)}GB`,
  freemem: `~${Math.round(os.freemem()/1073741824)}GB`,
};

console.log(os_info);
