console.log("Before Queueing Microtask");
queueMicrotask(() =>{ 
console.log("The Microtask is Running")});
console.log("After Queueing Microtask");