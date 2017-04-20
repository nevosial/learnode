//ex08: HTTP collect using the 'data' and 'end' events from http response.

var http = require('http');
var client = http.get(process.argv[2], function(response){
  //console.log(response.statusCode);
  response.setEncoding('utf-8');
  var fulltext = '';
  response.on('data', function(d){
    fulltext += d;
  });
  response.on('end', function(d){
    console.log(fulltext.length)
    console.log(fulltext)
  });
});

//This can also be achieved using modules like bl or concat-stream
