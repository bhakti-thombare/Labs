const fs = require('fs');
const content = 'Some content!';

fs.writeFile('C:/Users/bhakti.thombare/Desktop/Nodejs/day3/test1.txt',content,err =>{
    if(err){
        console.error(err);
    }
    console.log('File written successfully');
});