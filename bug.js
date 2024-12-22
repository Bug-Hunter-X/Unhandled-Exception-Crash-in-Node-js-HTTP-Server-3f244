const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // or if there is a large amount of data to send back to the client.
  // It might be caused by a slow database query or a large file upload
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});