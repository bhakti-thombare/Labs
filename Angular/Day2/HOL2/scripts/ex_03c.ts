function adding(a:number, b:number, ...rest:number[]){
    return a + b + rest.reduce((p,c)=> p + c, 0);
}
let result;
result = adding(1,2,3,4,5);
console.log("Using the rest type,The Result Is: " + result);
