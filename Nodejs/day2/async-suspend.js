function function1() {
    console.log('Welcome to Function1');
}

function function2(ms) {
    console.log('Welcome to Function2');
    return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
}

function1();

setTimeout(function2, 2000);