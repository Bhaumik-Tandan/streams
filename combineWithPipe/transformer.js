const fs = require('fs');
const { Transform } = require('stream');

// Custom Transform Stream: Transforming data to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert the chunk data to uppercase and push it to the next stream in the pipeline
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Readable Stream: Reading data from a file
const readableStream = fs.createReadStream('combineWithPipe/input.txt', 'utf8');

// Writable Stream: Writing data to a file
const writableStream = fs.createWriteStream('combineWithPipe/output.txt');

// Pipe the data from the readable stream, through the transform stream, to the writable stream
readableStream.pipe(uppercaseTransform).pipe(writableStream);

// Handle events for the writable stream
writableStream.on('finish', () => {
  console.log('Finished writing data.');
});

writableStream.on('error', (err) => {
  console.error('Error writing data:', err);
});
