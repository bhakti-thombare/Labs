const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    const text = fs.readFileSync('F:\\Module3-Nodejs\\Nodejs\\day4\\bigfile.txt','utf-8');
    res.end(text);
})

server.listen(5000, () =>{
    console.log("Server is listening at port 5000");
})


