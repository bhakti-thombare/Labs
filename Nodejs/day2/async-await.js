const one = () => Promise.resolve('Resolved!')
async function myFunction(){
    console.log('In The Function!!');
    const res = await one()
    console.log(res);
}
console.log('Before Function');
myFunction();
console.log('After Function!');