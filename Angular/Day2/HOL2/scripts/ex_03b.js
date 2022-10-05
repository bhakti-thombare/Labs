var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//with start, stop, step variable
var range = function (start, stop, step) {
    return __spreadArray([], Array(Math.floor((stop - start) / step) + 1), true).map(function (_, i) { return start + i * step; });
};
console.log(range(1, 10, 2));
//with start, stop variable
// const range = (start, stop) =>
//   [...Array(Math.floor((stop - start)) + 1)].map((_, i) => start + i);
// console.log(range(1,5));
