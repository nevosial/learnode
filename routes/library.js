//Library to handle the processing
var path = require('path');
var fs = require('fs');

module.exports = function(dirname, ext, callback){
  var extension = '.'+ ext;
  fs.readdir(dirname, function(err, list){
    output = [];
    if(err) {
      return callback(err, null);
    }
    else {
    for(var i = 0; i<list.length; i++)
    {
      if(path.extname(list[i]) == extension ){
        //console.log(list[i]);
        output.push(list[i]);
      }
    }
  }
  callback(null, output);
});
}

/*
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/
