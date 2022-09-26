const EventEmitter = require("events");
const myEmitter = new EventEmitter();

function f1() {
   console.log('Step1: Start a Car!');
}
function f2() {
   console.log('Step2: Select Your Gear');
}
function f3() {
   console.log('Step3: Release the Parking Brake');
}
function f4() {
   console.log('Step4: Set a Car in Motion');
}
function f5() {
   console.log('Step5: Use the Neutral Gear');
}
function f6() {
   console.log('Step6: Using Lower Gears.');
}
function f7() {
   console.log('Step7: Stop a Car');
}
function f8() {
   console.log('Step8: Drive in Reverse Gear');
   console.log("Happy Driving !!");
}

myEmitter.on('eventOne', f1); 
myEmitter.on('eventOne', f2);
myEmitter.on('eventOne', f3); 
myEmitter.on('eventOne', f4); 
myEmitter.on('eventOne', f5); 
myEmitter.on('eventOne', f6); 
myEmitter.on('eventOne', f7); 
myEmitter.on('eventOne', f8); 
myEmitter.emit('eventOne');
