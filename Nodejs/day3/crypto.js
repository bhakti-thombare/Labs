const fs = require('fs');
var crypto = require('crypto');

var data = '';
var dataHash = '';
const readable=fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt');
readable.setEncoding('UTF8');

readable.on('data',function(chunk){
    data+=chunk;
   console.log("File Content : ",data);
 

var hash = crypto.createHash('sha512');
dataHash = hash.update(data, 'utf-8');
console.log("Hased Data Is : ")
var generate_hash= dataHash.digest('hex');
console.log(generate_hash);
});




// var crypto = require('crypto');
// //creating hash object 
// var hash = crypto.createHash('sha512');
// //passing the data to be hashed
// data = hash.update('nodejsera', 'utf-8');
// //Creating the hash in the required format
// gen_hash= data.digest('hex');
// //Printing the output on the console
// console.log("hash : " + gen_hash);





