const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
    fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt'),
    zlib.createGzip(),
    fs.createWriteStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.gz'),
    (err) =>{
        if(err){
            console.error('Pipeline failed', err);
        }else{
            console.log('Pipeline succeeded !');
        }
    }
);