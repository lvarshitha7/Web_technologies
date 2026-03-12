const express = require('express');
const route = express.Router(); // Create a router instance

route.get('/', (req, res) => {
    res.status(200); // Set response status to 200 (OK)
    res.send('Hello, World! In GET'); // Send response
});

route.post('/', (req, res) => {
    res.status(201); // Set response status to 201 (Created)
    res.send('Hello, World! In POST'); // Send response
});

module.exports = route; 
