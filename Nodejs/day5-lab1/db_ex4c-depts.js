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
    const departments = `SELECT * from departments WHERE deptName = ?`;

    conn.query(departments, ['RESEARCH'], function (err, result, fields){
        if(err){
            console.error(err.message);
        }
        else{
            console.log('Departments Data');
            // console.log(result);
            result.forEach(row => {
                console.log(row);
            });
        }
    })

    conn.end( (err) => {
        console.error( err );
    })

})