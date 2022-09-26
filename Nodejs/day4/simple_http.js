const http = require('http');

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Hello HTTP Server</h1>");
});

server.listen(8000, () =>{
    console.log("Server Running at port 8000...");
});