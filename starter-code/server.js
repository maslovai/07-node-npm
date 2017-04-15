'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file
//check - Paula and Iryna
// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;



// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static(__dirname + '/public'));
//
app.get('*', function(request, response) {
  // TODO: Using the response object, send the index.html file back to the user
  response.sendFile(__dirname + './index.html');
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log('Server is running on port: ' + PORT);
});
