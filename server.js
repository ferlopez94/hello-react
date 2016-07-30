// Access to Express API
var express = require('express');

// Create our app
var app = express();

// Add functionality to our app (specify a folder name we want to expose to our web server)
app.use(express.static('public'));

// Start server
app.listen(3000, function () {
   console.log('Express server is up on port 3000');
});