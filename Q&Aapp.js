//Explaining STD process.
var questions = [
  "Please enter your first name:",
  "Please enter your last name:",
  "Please enter your age:",
  "Please enter your hobby:",
  "Please enter your favorite language:"
];

//storing the answers.
var answers = [];

//using process.stdout.write() to display onscreen.
function ask(i){
  process.stdout.write(`\n\n\n ${questions[i]}`);   //ES6 template string.
  process.stdout.write(" >> ");      //padding.
}


//using process.stdin on to capture data.
process.stdin.on('data' , function(data) {
  //save the input onto the answers array.
  answers.push(data.toString().trim());

  //logic to keep asking questions.
  if(answers.length < questions.length){
    ask(answers.length);
  } else {
    process.exit();   //exits the application process.
  }
});

//using a listerner when the process exits and then display answers to the user.
process.on('exit' , function() {
  process.stdout.write('\n\n\n\n');
  process.stdout.write(`\n\n\n Hey ${answers[0]} Thank you very much and have a good day! \n\n\n`);
})

//invocation.
ask(0);
