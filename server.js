// library includes
const express = require('express');
// set port and express instance
const PORT = process.env.PORT || 3001;
const app = express();
// use parsing middleware for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sets up middleware for /api and root directory requests and includes the routes files
const api = require('./routes/api');
const html = require('./routes/html');
app.use('/api', api);
app.use('/', html);


// serve the /public directory
app.use(express.static('public'))

// start the server listening on PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});