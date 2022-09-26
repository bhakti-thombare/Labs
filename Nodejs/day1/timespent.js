const doSomething = () => console.log('Testing..');
const measureDoSomething = () =>{
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething()');
};
measureDoSomething();
