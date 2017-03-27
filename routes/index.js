//Creating a new route to hold index route(main)

var express = require('express');
var router = express.Router();

router.get('/' , function(request, response){
  response.send(`
    <h1>Renowned Speakers</h1>
    <p>We have got together some great speakers from around the world who will help us with understanding the intricacies of the world.</p>
    <p>lorem</p>
    `);
});

module.exports = router;
