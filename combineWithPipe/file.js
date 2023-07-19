const fs = require('fs');

// Readable Stream: Reading data from a file
const readableStream = fs.createReadStream('combineWithPipe/input.txt', 'utf8');

// Writable Stream: Writing data to a file
const writableStream = fs.createWriteStream('combineWithPipe/output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events for the writable stream
writableStream.on('finish', () => {
  console.log('Finished writing data.');
});

writableStream.on('error', (err) => {
  console.error('Error writing data:', err);
});
