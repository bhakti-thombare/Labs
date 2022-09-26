const path = require('path');
const fileName = "C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt";

dname = path.dirname(fileName);
bname = path.basename(fileName);
exname = path.extname(fileName);

console.log(`Directory : ${dname}` );
console.log(`Filename : ${bname}` );
console.log(`Extension : ${exname}` );