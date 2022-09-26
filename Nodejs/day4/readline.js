var readline = require('readline');

var r1 = readline.createInterface(process.stdin, process.stdout);


r1.question('What is Employee First Name? ', (fname) => {
    console.log('Employee FirstName is: ' + fname);
    // r1.close();
    r1.question('What is Employee Last Name? ', (lname) => {
        console.log('Employee LastName is: ' + lname);

        r1.question('What is Employee Gender? ', (gender) => {
            console.log('Employee Gender is: ' + gender);

            r1.question('What is Employee Age? ', (gender) => {
                console.log('Employee Age is: ' + gender);

                // r1.question('What is Employee Age next Year? ', (result) => {
                    var result = +gender + (1)
                    console.log('Employee Age Next Year is: ' + (result));

                    r1.close();
                // });
            });
        });
    });
});