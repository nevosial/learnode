//NS ex05: Print list of files in a given directory, filtered by the extension.
//Inputs : process.argv[2]: path ; process.argv[3]: file extension.
//Output : Name of the files with the particular type.

var fs = require('fs');
var path = require('path');
//console.log(process.argv[2]);
//console.log(process.argv[3]);

var listfiles = fs.readdir(process.argv[2] , function(err, list){
  if (err) console.log('Sorry: '+err);
  var extension = '.'+ process.argv[3];
  //console.log(list);
  //console.log(extension);
  for(var i = 0; i<list.length; i++)
  {
    if(path.extname(list[i]) == extension ){
      console.log(list[i]);
    }
  }
});

/***
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
******/
