const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'hr_db',
});

conn.connect(function (err){
    if(err){
        console.log("Connection Error....!");
        console.error( err );
    }
    else{
        console.log("Successfully Connected....");
    }
})

conn.end(function (err){
    if(err){
        console.error(err);
    }
})