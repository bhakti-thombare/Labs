const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'hr_db',
});

conn.connect(function (err){
    if(err){
        return console.error("Error: " + err.message);
    }
    
    const departments =   `CREATE TABLE IF NOT EXISTS Departments(
        deptID      INT PRIMARY KEY AUTO_INCREMENT,
        deptName    VARCHAR(15) NOT NULL,
        city        VARCHAR(10) NOT NULL
    )`;

    conn.query(departments, function(err, result,fields){
        if(err){
            console.log(err.message);
        }
    });


conn.end(function (err){
    if(err){
        console.log(err.message);
        console.error(err);
    }
});
});