const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate a potential error
    // In real applications, this could be a database query, file I/O, or other operation
    // that could throw an error
    // const result = someLongRunningOperation();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});