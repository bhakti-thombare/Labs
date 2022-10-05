class Slopes_3D{
    x_cord:number;
    y_cord:number;
    z_cord:number;
    constructor(x:number,y:number,z:number)
    {
        this.x_cord=x;
        this.y_cord=y;
        this.z_cord=z;
    }
    display():void{
        console.log("X coordinate = "+this.x_cord);
        console.log("Y coordinate = "+this.y_cord);
        console.log("Z coordinate = "+this.z_cord);
    }
}
var point= new Slopes_3D(10,20,30);
console.log(point.display());




// class Slopes{
//     x1 : number;
//     y1 : number;
//     x2 : number;
//     y2 : number;
//     z  : number;

//     constructor(x1,y1,x2,y2,z){
//         this.x1 = x1;
//         this.y1 = y1;
//         this.x2 = x2;
//         this.y2 = y2;
//         this.z = z;

//     }

//     Slope(x1,y1,x2,y2,z)  {
//         console.log("Value of x1 is : " +this.x1);
//         console.log("Value of y1 is : " +this.y1);
//         console.log("Value of x2 is : " +this.x2);
//         console.log("Value of y2 is : " +this.y2);
//         console.log("Value of z is : " +this.z);
//         if (x2 - x1 != 0)
//     {
//         return (y2 - y1) / (x2 - x1) / z;
//     }
//     return Number.MAX_VALUE;
//     }
// }

// const slo = new Slopes(4,2,2,5,9);
// console.log("Slope is " + slo.Slope(4,2,2,5,9));
