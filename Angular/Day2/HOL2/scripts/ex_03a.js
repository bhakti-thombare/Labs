//p -> Principle amount, t -> Time period in years and r -> Rate of interest
function calculateSimpleInterest(p, t, r) {
    if (r === void 0) { r = 10; }
    return p * t / 100;
}
console.log("Simple Interest: " + 100 * 5 / 100);
