// var $ = function (id) {
//     return document.getElementById(id);
//    };

   window.onload = function () {
   console.log("Start..");
   document.querySelector("#callback-btn").addEventListener("click", myFunction);
     console.log("before function....");
    function myFunction() {
    console.log("Inside function.....");
    console.log("End..");
   }
//    console.log("End.."); 
   };
  


//    setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000)
// document.queryselector("#callback-btn").addEventListener("click", function() { 
//    console.log("User has clicked on the button!");
// });
// ================================
// const message = function(){
//     console.log("this msg shown after 3 sec");
// }

// setTimeout(() => {
//     console.log("The msg shown after 2 sec");
// },2000)

// window.onload = function(){
    
    
// document.querySelector("#callback-btn").addEventListener("click", function() { 
//     console.log("User has clicked on the button!");
// });}