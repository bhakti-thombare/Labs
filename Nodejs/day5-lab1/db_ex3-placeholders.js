const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'hr_db2',
});

conn.connect(function (err){
    if(err){
        return console.error("Error: " + err.message);
    }

    // const departments =   `CREATE TABLE IF NOT EXISTS Departments(
    //     deptID      INT PRIMARY KEY AUTO_INCREMENT,
    //     deptName    VARCHAR(15) NOT NULL,
    //     city        VARCHAR(10) NOT NULL
    // )`;
    const departments =   `INSERT INTO Departments(deptID,deptName,city)
                        VALUES(?,?,?)`;
                        
    const depts = [1,'ACCOUNTING ','NEW YORK'];
    // const depts = [2,'RESEARCH ','DALLAS'];
    // const depts = [3,'SALES ','CHICAGO'];
    // const depts = [4,'OPERATIONS ','BOSTON'];
    // const depts = [5,'R&D ','PUNE'];
     

    conn.query(departments, depts, function(err, result,fields){
        // conn.query(departments, function(err, result,fields){
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