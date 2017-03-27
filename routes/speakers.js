//This is a new route holding speakers data.
var express = require('express');
var router = express.Router();

var dataFile = require('../data/data.json');

//Adding a new route to the speakers page of the app
router.get('/speakers' , function(request, response){
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
router.get('/speakers/:speakerid' , function(request , response){
  var spk = dataFile.speakers[request.params.speakerid];
  response.send(`
    <h2>${spk.name}</h2>
    <p>${spk.title}</p>
    <p>${spk.summary}</p>
    `);
});

module.exports = router;
