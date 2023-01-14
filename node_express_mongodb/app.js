const express = require('express');
const os = require('os');
const path = require('path');

const users = require('./users.js');

const app = express();

// provide static files directory
app.use(express.static('./static'));

app.get('/', (req, res) => {
  res.status(200).send(`SERVER UPTIME: ~${Math.round(os.uptime()/3600)} hours <br><br> SERVER TYPE: ${os.type()}`);
});

app.get('/uptime', (req, res) => {
  res.status(200).send(`SERVER UPTIME: ~${Math.round(os.uptime()/3600)} hours`);
});

app.get('/type', (req, res) => {
  res.status(200).send(`SERVER TYPE: ${os.type()}`);
});

// send file
app.get('/htmlfile', (req, res) => {
  //
  res.status(200).sendFile(path.resolve(__dirname, './html_file.html'));
});

// send json
app.get('/apis/json', (req, res) => {
  res.status(200).json([{name:'yassir'}, {age: 20}]);
});
app.get('/apis/users', (req, res) => {
  res.status(200).json(users);
});

// error page for when accessing invalid resources
app.all('*', (req, res) => {
  res.status(404).send('invalid url.');
});

app.listen(8080, () => {
  console.log('server is listening on port 8080...');
});
