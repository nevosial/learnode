//var num = process.argv[2]
var num = 0;
var i = 2;
len = process.argv.length;
//console.log(len)

for(i = 2 ; i<len; i++)
{
  //console.log(Number(process.argv[i]));
  num += Number(process.argv[i]);
}
console.log(num)
