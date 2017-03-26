//Setting up a web server using express.js

var express = require('express');
var app = express();

var myServer = app.listen(3000 , function(){
  console.log('Express web server running at localhost:3000');
});

//In express, we do not need to worry about headers, content-type.
app.get('/' , function(request, response){
  response.send("<h1>Hello World</h2>");
});
