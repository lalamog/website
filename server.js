const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

// serve static files from the "public" directory
app.use(express.static('public'));

// handle 404 errors by serving the index.html file
app.use((req, res) => {
  fs.readFile('C:/Users/sherw/OneDrive/Desktop/index.html', (err, data) => {
    if (err) {
      // if there is an error, send a 404 error response
      res.status(404).send("404 Not Found");
    } else {
      // if the file is found, set the content type and send the file contents
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

// start the server
server.listen();
