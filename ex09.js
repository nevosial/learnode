//ex09: Juggling Async
/***
INPUT :  3 URLs as the first three command-line arguments.
OUTPUT : Print the response(from each url) out in the same order as the URLs are provided to you as
         command-line arguments..
***/

var http = require('http');
//console.log(process.argv[2]);
//console.log(process.argv[3]);
//console.log(process.argv[4]);

//for(var i = 2; i <= 4; i++){
  //console.log(process.argv[i]);
//}

var i = 2;
var url = [];
while(i <= 4){
  //console.log(process.argv[i]);
  //url.push(process.argv[i]);
  http.get(process.argv[i], function(response){
    response.setEncoding('utf-8');
    var fulltext = '';
    response.on('data', function(d){
      fulltext += d;
      //console.log(fulltext);
  });

  response.on('end', function(d){
    //console.log(fulltext.length)
    console.log(fulltext)
  });
});
i++;
}
//console.log(url);
