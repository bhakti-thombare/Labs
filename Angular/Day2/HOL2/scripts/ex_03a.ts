//p -> Principle amount, t -> Time period in years and r -> Rate of interest
function calculateSimpleInterest(p:number, t:number,r:number=10): number{
    return p * t  / 100
}

console.log("Simple Interest: "+ 100*5/100);
