const http = require('http');
const { Transform } = require('stream');
// Custom Transform Stream: Transforming data to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert the chunk data to uppercase and push it to the next stream in the pipeline
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const server = http.createServer((req, res) => {
  // Readable Stream: Reading data from the request
  const readableReq = req;

  // Writable Stream: Writing data to the response
  const writableRes = res;

  // Piping the request directly to the response
  readableReq.pipe(uppercaseTransform).pipe(writableRes);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000.');
});