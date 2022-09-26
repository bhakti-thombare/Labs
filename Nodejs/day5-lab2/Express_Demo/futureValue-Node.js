const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static('./public'));
app.get('/', function (req,res){
   
    res.sendFile(path.resolve(__dirname,'./future_value/index.html'))
})

app.listen(port, function() {
    console.log(`Express App Lisstening at Port ${port}....`);
})

