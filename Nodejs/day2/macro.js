console.log('Script Is Started');
setTimeout(function() {
  console.log('Timeout');
}, 0);
Promise.resolve().then(function() {
  console.log('Promise1');
}).then(function() {
  console.log('Promise2');
});
console.log('Script Is Ended');