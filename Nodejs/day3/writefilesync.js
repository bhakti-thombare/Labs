const fs = require('fs');
const content = 'Some content!';
try{
    fs.writeFileSync('C:/Users/bhakti.thombare/Desktop/day3/test2.txt',content);
    //file written successfully
}catch (err){
    console.error(err);
}
console.log('File written successfully');