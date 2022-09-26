const fs = require('fs');
const {pipeline} = require('stream');
const zlib = require('zlib');

pipeline(
    fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\file1.txt', ),
    zlib.createGzip(),
    fs.createWriteStream('file1.gz'),
    (err) =>{
        if(err){
            console.error('Compression got a issue',err);

        }
        else{
            console.log("Compressed Successfully!!");

        }
    }
);
