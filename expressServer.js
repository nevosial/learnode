//Setting up a web server using express.js

var express = require('express');
var app = express();

//local import data from a file
var dataFile = require('./data/data.json');

var myServer = app.listen(3000 , function(){
  console.log('Express web server running at localhost:3000');
});

//In express, we do not need to worry about headers, content-type.
app.get('/' , function(request, response){
  var info = '';
  dataFile.speakers.forEach(function(item){
    //using `template string` supported in ES6.
    info += `
    <li>
    <h2>${item.name}<h2>
    <p>${item.summary}</p>
    </li>
    `;
  });
  response.send(`
    <h1>Renowned Speakers</h1>
    ${info}
    `);
});
