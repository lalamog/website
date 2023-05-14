const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path'); // add this line

const app = express();
const server = http.createServer(app);

// serve static files from the "public" directory
app.use(express.static('website'));

// serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

// handle 404 errors by serving the index.html file
app.use((req, res) => {
  fs.readFile('index.html', (err, data) => {
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
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
