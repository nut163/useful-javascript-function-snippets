const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('Welcome to the about page!');
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

module.exports = app;