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
  response.send(`
    <h1>Renowned Speakers</h1>
    <p>We have got together some great speakers from around the world who will help us with understanding the intricacies of the world.</p>
    <p>lorem</p>
    `);
});

//Adding a new route to the speakers page of the app
app.get('/speakers' , function(request, response){
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

//Adding a new route to get data from one speaker.
app.get('/speakers/:speakerid' , function(request , response){
  var spk = dataFile.speakers[request.params.speakerid];
  response.send(`
    <h2>${spk.name}</h2>
    <p>${spk.title}</p>
    <p>${spk.summary}</p>
    `);
});
