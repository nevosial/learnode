console.log(process.argv);

function grab(flag){
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting){
  console.log('There is not input !');
}else{
  console.log(`Welcome to Node process.argv object ${user} I say to you ${greeting}`);  //ES 6 template string.
}
