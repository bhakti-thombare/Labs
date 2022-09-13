const doSomething = () => {
    for(let i=1; i <=10; i++) {
         console.log('Testing..');
    }
}

const measureDoSomething = () =>{
    console.time('doSomething');
    doSomething();
    console.timeEnd('doSomething');
}
// console.log("Checking Time Spent...");
console.log("\x1b[33m Checking The color.... \x1b[0m");
measureDoSomething();

