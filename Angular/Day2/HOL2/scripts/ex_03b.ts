//with start, stop, step variable
const range = (start, stop, step) =>
  [...Array(Math.floor((stop - start) / step) + 1)].map((_, i) => start + i * step);
  console.log(range(1,10,2));
  
// =========================================================================

//with start, stop variable
// const range = (start, stop) =>
//   [...Array(Math.floor((stop - start)) + 1)].map((_, i) => start + i);

// console.log(range(1,5));

