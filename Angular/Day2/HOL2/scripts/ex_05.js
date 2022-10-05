var Slopes = /** @class */ (function () {
    function Slopes(x, y) {
        this.x_cord = x;
        this.y_cord = y;
    }
    return Slopes;
}());
var point1 = new Slopes(10, 20);
var point2 = new Slopes(40, 40);
console.log("Slope Of the line Is " + (point2.y_cord - point1.y_cord) / (point2.x_cord - point1.x_cord));
// class Slopes{
//     x1 : number;
//     y1 : number;
//     x2 : number;
//     y2 : number;
//     constructor(x1,y1,x2,y2){
//         this.x1 = x1;
//         this.y1 = y1;
//         this.x2 = x2;
//         this.y2 = y2;
//     }
//     Slope(x1,y1,x2,y2)  {
//         console.log("Value of x1 is : " +this.x1);
//         console.log("Value of y1 is : " +this.y1);
//         console.log("Value of x2 is : " +this.x2);
//         console.log("Value of y2 is : " +this.y2);
//         if (x2 - x1 != 0)
//     {
//         return (y2 - y1) / (x2 - x1);
//     }
//     return Number.MAX_VALUE;
//     }
// }
// const sl = new Slopes(4,2,2,5);
// console.log("Slope is " + sl.Slope(4,2,2,5));
