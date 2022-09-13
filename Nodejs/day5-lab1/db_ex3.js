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
    
    const departments =   `INSERT INTO Departments(deptID,deptName,city)
                        VALUES(1,'ACCOUNTING','NEW YORK')`;
     
    // const departments =   `INSERT INTO Departments(deptID,deptName,city)
    //                     VALUES(2,'RESEARCH','DALLAS')`;

    // const departments =   `INSERT INTO Departments(deptID,deptName,city)
    //                     VALUES(3,'SALES','CHICAGO')`;

    // const departments =   `INSERT INTO Departments(deptID,deptName,city)
    //                     VALUES(4,'OPERATIONS','BOSTON')`;   
    
    // const departments =   `INSERT INTO Departments(deptID,deptName,city)
    //                     VALUES(5,'R&D','PUNE')`;

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