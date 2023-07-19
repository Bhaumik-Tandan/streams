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
      // Transform the received data to uppercase.
      const transformedData = receivedData.toUpperCase();

      // Send the transformed data back as the response.
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(transformedData);
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
