function Name({title,name,msg}:
    {title: string, name: string, msg: string}){
        return title + name + "\n" + msg
    }
    let result1;
     result1 =  Name({title: 'Dr.', name: 'John', msg: 'Appointment please'});
    console.log(result1);

    let result2;
     result2 =  Name({title: 'Miss', msg: 'Welcome home.', name: 'Suzy'});
    console.log(result2);
    
    
