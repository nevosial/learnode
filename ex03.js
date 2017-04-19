//Ex 3 : do it synchronously
//Read the file synchronously and print the number of newlines it contains.
var fs = require('fs');
var path = process.argv[2]
var op = fs.readFileSync(path, 'utf-8');
var cnt = 0;
var tx = op.split('\n')
cnt = tx.length - 1;
console.log(cnt)

//"C:\Users\mascarne\Desktop\Bayer\Incident Management.txt"
/*
var contents = fs.readFileSync(process.argv[2], 'utf-8');
var lines = contents.split('\n').length - 1;
console.log(lines)
*/
