const fs = require('fs');

fs.readFile('C:/Users/bhakti.thombare/Desktop/Nodejs/day3/test.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    else{
    console.log(data);
    }
})