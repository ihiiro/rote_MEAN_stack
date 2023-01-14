const express = require('express');

const app = express();

// req => middleware(logger) => res
// it's best practice to put middleware in a separate file
const logger = (req, res, next) => {
  console.log(req.method, req.url, new Date());
  next();
};

app.use(logger);

// for multiple middleware functions
// execution order: FIFO(first in first out) so the order in the array matters
// app.use([mw0, mw1, mwN])

// method one: pass middleware explicitly
app.get('/', logger, (req, res) => {
  res.status(200).send('Home');
});

// method two: doing nothing cuz app.use() was used (no pun intended)
app.get('/about', (req, res) => {
  res.status(200).send('About');
});

app.listen(8080, () => {
  console.log('server is listening on port 8080...');
});
