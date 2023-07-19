const fs = require('fs');

const filePath = 'writable/output.txt'; // Update the file path to your desired output file.

// Create a writable stream to write data to the output file.
const writableStream = fs.createWriteStream(filePath, { encoding: 'utf8', highWaterMark: 20 });

// Function to generate random text.
function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Generate random text and write it to the output file.
const randomText = generateRandomText(100); // Change the length as per your requirement.
writableStream.write(randomText);

// End the writable stream to finish writing data to the file.
writableStream.end();

// Handle the 'finish' event to know when the writable stream has finished writing.
writableStream.on('finish', () => {
  console.log('Writing to the file is complete.');
});

// Handle any errors that may occur during writing.
writableStream.on('error', (error) => {
  console.error('Error while writing to the file:', error);
});
