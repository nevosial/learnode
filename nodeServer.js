//We will build a node server using the http module.

var http = require('http');

var myServer = http.createServer(function(request, response){
  response.writeHeader(200 , {'content-type':'text/html'});
  response.write("<h1>Hello World</h1>");
  response.end();

});
myServer.listen(3000);
console.log("Server started at localhost:3000");
