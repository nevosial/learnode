//Using setTimeout, setInterval, clearInterval,

console.log("Setting time delay of 5 seconds");

//setTimeout() causes the application to delay for a set interval and then fire callback function.
//setInterval()  fires callback function at the set interval.
//clearInterval() is used to stop any intervals that are running.


var waitTime = 5000;
var waitInterval = 500;
var currentTime = 0;

var interval = setInterval(function() {
  currentTime +=waitInterval;
  console.log(`waiting ${currentTime/1000} seconds...`);  //ES6 template string.
}, waitInterval);


setTimeout(function() {
  clearInterval(interval);
  console.log("I finished waiting for 5 seconds.");
}, waitTime);
