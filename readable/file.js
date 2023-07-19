const fs = require('fs');

const filePath = 'readable/input.txt';

// default chunk size is 64kb
const readableStream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 20 });

readableStream.on('data', (chunk) => {
  console.log("chunk:", chunk);
});

readableStream.on('end', () => {
  console.log('Reading from the file is complete.');
});

readableStream.on('error', (error) => {
  console.error('Error while reading the file:', error);
});
