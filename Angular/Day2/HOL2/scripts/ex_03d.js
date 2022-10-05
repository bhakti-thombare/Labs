function Name(_a) {
    var title = _a.title, name = _a.name, msg = _a.msg;
    return title + name + "\n" + msg;
}
var result1;
result1 = Name({ title: 'Dr.', name: 'John', msg: 'Appointment please' });
console.log(result1);
var result2;
result2 = Name({ title: 'Miss', msg: 'Welcome home.', name: 'Suzy' });
console.log(result2);
