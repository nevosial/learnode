//Code block ex for Anonymous function in JS.

var a =5;
var b = 7;

var biggest = function(){
  var result;
  a > b ? result = a : result = b;
  console.log(result);
 }
 
 //invocation.
 console.log(biggest());



//With arguments.
var bigMan = function(c, d)
{
  var op;
  c > d ? op = c : op = d;
  console.log(c);
}

//invocation.
console.log(bigMan(5,7));

 
