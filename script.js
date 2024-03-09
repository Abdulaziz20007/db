// Check if the script is running in a Node.js environment
if (typeof window === 'undefined') {
  const fs = require('fs');

  // Data to be written to the JSON file
  const dataToWrite = {
    key1: 'value1',
    key2: 'value2',
  };

  // Convert data to JSON format
  const jsonData = JSON.stringify(dataToWrite, null, 2);

  // Specify the file path
  const filePath = 'output.json';

  // Write to the JSON file
  fs.writeFileSync(filePath, jsonData);

  console.log('Data written to', filePath);
} else {
  // Data to be written to the JSON file
  const dataToWrite = {
    key1: 'value1',
    key2: 'value2',
  };

  // Convert data to JSON format
  const jsonData = JSON.stringify(dataToWrite, null, 2);

  // Create a Blob containing the JSON data
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Create a download link and trigger the download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'output.json';
  link.click();
}
