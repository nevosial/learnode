//ex07: HTTP Client
var http = require('http');
var client = http.get(process.argv[2], function(response){
  //console.log(response.statusCode);
  response.setEncoding('utf-8');
  response.on('data', function(d){
    console.log(d);
  });
});


/*
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
