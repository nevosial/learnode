//Using setTimeout, setInterval, clearInterval,

console.log("Setting time delay of 5 seconds");

//setTimeout() causes the application to delay for a set interval and then fire callback function.
//setInterval()  fires callback function at the set interval.
//clearInterval() is used to stop any intervals that are running.


var waitTime = 5000;
var waitInterval = 500;
var currentTime = 0;
var percentWaited = 0;

function writeWaitingPercent(p){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p} %`);
}

var interval = setInterval(function() {
  currentTime +=waitInterval
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercent(percentWaited);
}, waitInterval);


setTimeout(function() {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\n \n Finished!\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
