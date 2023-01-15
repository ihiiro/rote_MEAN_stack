const express = require('express');

const app = express();

app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }));

// middleware to check form validity
const checkForm = (req, res, next) => {
  if (req.body.username && req.body.message) {
    next();
  } else {
    res.status(400).send('ERROR: INVALID FORM BODY');
  }
};

app.post('/message', checkForm, (req, res) => {
  res.status(200).send(`<h3 style="font-family: monospace;">${req.body.username} says ${req.body.message}</h3>`);
});

app.listen(8080, () => {
  console.log('server listening on port 8080...');
});
