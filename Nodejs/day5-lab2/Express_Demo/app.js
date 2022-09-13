const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req,res){
    res.send(`<h1>Hello From Express!!!!</h1>
    <h3>Fast, Unopinionated, Minimalist Web Framework</h3>`)
})

app.listen(port, function(){
    console.log(`Express App Lisstening at Port ${port}....`);
})




