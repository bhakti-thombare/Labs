const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'hr_db',
});

conn.connect(function (err){
    if(err){
        console.log("Connection Error....");
        console.log( err );
    }
    const departments = `UPDATE Departments SET City = ?
      WHERE deptName = ?`;
    // const departments = `SELECT * from departments`;

    conn.query(departments, ['TEXAS','ACCOUNTING'], function (err, result, fields){
        // conn.query(departments, function (err, result, fields){
        if(err){
            console.error(err.message);
        }
        else{
            console.log('Departments Data');
            console.log(result);
        }
    })

    conn.end( (err) => {
        console.error( err );
    })

})