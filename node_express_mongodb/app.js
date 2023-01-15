const express = require('express');
const apis = require('./routes/apis');

const app = express();

app.use('/apis', apis);


app.listen(8080, () => {
  console.log('server is listening on port 8080...');
});
