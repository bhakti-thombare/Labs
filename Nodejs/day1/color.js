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
console.log("\x1b[33m Checking color.... \x1b[0m");
measureDoSomething();
console.log("\x1b[31m This is Error Message.... \x1b[0m");
console.log("\x1b[33m This is Warning Message.... \x1b[0m");
console.log("\x1b[32m This is Success Message.... \x1b[0m");
console.log('\x1b[36m %s \x1b[0m','Hello!')
