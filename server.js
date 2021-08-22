// library includes
const express = require('express');
const path = require('path')
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
//returns to index when a non-existing page is requested
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, './public/index.html'));
})

// start the server listening on PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});