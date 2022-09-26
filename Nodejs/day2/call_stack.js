const first = () => console.log("First");
const second = () => console.log("Second");

const third = () => {
    console.log("Third");
    first();
    second();
    
}

third()