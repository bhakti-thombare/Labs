const fs = require('fs');

var data = '';
const readerStream = fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', function(chunk){
    data += chunk;
    
})

readerStream.on('end', () =>{
    console.log(data);
    console.log("File Reading End");

})


readerStream.on('err', () =>{
    console.error(err)
})



