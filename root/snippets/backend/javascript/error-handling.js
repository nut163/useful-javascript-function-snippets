```javascript
// Importing the required module
const express = require('express');
const app = express();

// Middleware for handling errors
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Exporting the app module
module.exports = app;
```