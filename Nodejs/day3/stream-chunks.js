const fs = require('fs');

var data = '';



const readerStream = fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt');
readerStream.setEncoding('utf-8');


readerStream.on('readable', function() {
    while( (chunk = readerStream.read(1)) != null){




        data += chunk;
        console.log(chunk);
      
    }   
})

readerStream.on('end', () =>{
    console.log(data);
    
})

readerStream.on('err', () =>{
    console.error(err)
})

