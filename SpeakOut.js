//import the required
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);

//create the object to store info.
var Person = {
	name: '',
	sayings: []
};


rl.question("What is your name ? ", function(answer) {

	Person.name = answer;

	rl.setPrompt(`What would ${Person.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		Person.sayings.push(saying.trim());

		if (saying.toLowerCase().trim() === 'exit') {
        var st = JSON.stringify(Person);
        fs.writeFileSync("./rant.txt" , st , "UTF-8" ,  function(err){
        if(err) throw err;
          console.log("File has been saved.")
                });
			rl.close();
		} else {
			rl.setPrompt(`What else would ${Person.name} say? ('exit' to leave) `);
		    rl.prompt();
        }
	});//end the on eventListener

});//end of question


rl.on('close', function() {
	console.log("%s is a real person that says %j", Person.name, Person.sayings);
  /**
  fs.writeFile('./rant.txt' , 'Hello', 'UTF-8', function(err){
    if(err) throw err;
    console.log("File is saved");
  });
  **/
	process.exit();

});
