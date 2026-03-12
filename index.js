const express = require('express');

// import module to parse JSON data
const bodyParser = require('body-parser');
const app = express();

// middleware to parse JSON
app.use(bodyParser.json());

// import router
const router = require('./route/bookRoute');

// use router for /books endpoint
app.use('/books', router);

// start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});