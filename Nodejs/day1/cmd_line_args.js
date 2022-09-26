console.log("Command Line Arguments Example");

process.argv.forEach((index,value)=>{
    console.log(`${index} : ${value}`);
});

console.log(`Number of command line arguments: ${process.argv.length}`);
console.log("End of Program!");