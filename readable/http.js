const http = require('http');

const server = http.createServer((req, res) => {
  // Check if it's a POST request and the URL matches the desired endpoint.
  if (req.method === 'POST' && req.url === '/data') {
    let receivedData = '';

    // Handle the 'data' event to receive data from the request stream.
    req.on('data', (chunk) => {
      // Concatenate the received data chunks.
      receivedData += chunk;
    });

    // Handle the 'end' event, which is emitted when the entire request body has been received.
    req.on('end', () => {
      // Process the received data as needed.
      console.log('Received data:', receivedData);

      // Respond to the client with a success message (optional).
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Data received successfully!');
    });
  } else {
    // For other routes or request methods, respond with a 404 status.
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});     

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
