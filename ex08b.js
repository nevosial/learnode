//ex08: HTTP collect using the concat-stream node module.
var http = require('http');
var concat = require('concat-stream');

var client = http.get(process.argv[2], function(response){
  //console.log(response.statusCode);
  response.setEncoding('utf-8');
  response.pipe(concat(function(data){
    console.log(data.length)
    console.log(data)

  }))
});
