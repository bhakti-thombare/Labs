const fs = require('fs');

try{
    // if test.txt is there then it will success and show  file data
    const data =  fs.readFileSync('C:/Users/bhakti.thombare/Desktop/Nodejs/day3/test.txt', 'utf-8');
    
    // if text.txt is there then it will give error as text.txt is not present
    // const data =  fs.readFileSync('C:/Users/bhakti.thombare/Desktop/day3/text.txt', 'utf-8');
    console.log(data);
}catch(err){
   
console.error("Some Error!!");
// process.exit(121);
}

