const express = require('express');
const app = express();

// Basic GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Basic POST request
app.post('/', (req, res) => {
  res.send('POST request received');
});

// Basic PUT request
app.put('/', (req, res) => {
  res.send('PUT request received');
});

// Basic DELETE request
app.delete('/', (req, res) => {
  res.send('DELETE request received');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});