const fs = require('fs');

/* synchronous */

// reading
console.log(fs.readFileSync('../cli.txt', 'utf8'));
console.log(fs.readFileSync('../notes.txt', 'utf8'));

// writing
// flag: 'a' is for appending
fs.writeFileSync('../new_file.txt', 'there ya go!'/*, { flag: 'a' }*/);


/* asynchronous */

fs.readFile('../new_file.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
});

fs.writeFile('../new_file1.txt', 'another file, howdy!', /*{flag:'a'},*/ (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
});
