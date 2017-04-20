//ex07: HTTP Client
var http = require('http');
var client = http.get(process.argv[2], function(response){
  console.log(response.statusCode);
  response.on('data', function(d){
    console.log(d.split('\n'));
  });
});
