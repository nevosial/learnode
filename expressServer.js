//Setting up a web server using express.js

var express = require('express');
var app = express();

//local import data from a file
var dataFile = require('./data/data.json');

//Get the details of the route.
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

//creating the server.
var myServer = app.listen(3000 , function(){
  console.log('Express web server running at localhost:3000');
});
