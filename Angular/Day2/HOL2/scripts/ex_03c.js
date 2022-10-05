function adding(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
var result;
result = adding(1, 2, 3, 4, 5);
console.log("Using the rest type,The Result Is: " + result);
