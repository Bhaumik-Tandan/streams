const fs = require('fs');

const inputFilePath = 'combineWithoutPipe/input.txt';
const outputFilePath = 'combineWithoutPipe/output.txt';

// Create a readable stream from the input file.
const readableStream = fs.createReadStream(inputFilePath, { encoding: 'utf8', highWaterMark: 20 });

// Create a writable stream to write data to the output file.
const writableStream = fs.createWriteStream(outputFilePath, { encoding: 'utf8' });

// Handle the 'data' event to receive data from the readable stream.
readableStream.on('data', (chunk) => {
  // Capitalize the data and write it to the writable stream (output file).
  const capitalizedData = chunk.toUpperCase();
  writableStream.write(capitalizedData);
});

// Handle the 'end' event, which is emitted when the entire data has been read from the input file.
readableStream.on('end', () => {
  // End the writable stream to finish writing data to the output file.
  writableStream.end();
});

// Handle errors that may occur during reading.
readableStream.on('error', (error) => {
  console.error('Error while reading the input file:', error);
});

// Handle errors that may occur during writing.
writableStream.on('error', (error) => {
  console.error('Error while writing to the output file:', error);
});
