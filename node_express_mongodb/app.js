const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // shorthand for res.write(...) => res.end()
    res.end("<h1>Homepage</h1>");
  } else {
    // message to show when someone connects to server
    res.end("<h1>Page not found</h1>");
  }

});

server.listen(8080);
