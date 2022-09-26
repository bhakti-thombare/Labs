var $ = function(id){
    return document.getElementById(id);
}

 window.onload = function () {
  $("click_div").addEventListener("click", myFunction);
 console.log("Start...2..before function....");
function myFunction() {
  $("click_div").innerHTML = "Go";
  setTimeout(() => {
 $("click_div").style.borderRadius = "100px";
setTimeout(() => {
$("click_div").style.background = "red";
setTimeout(() => {
 $("click_div").style.borderRadius = "0px";
setTimeout(() => {
$("click_div").style.background = "green";
setTimeout(() => {
    $("click_div").style.background = "white";
},500);
}, 500);
}, 1000);
}, 500);
 }, 1000);
 }
};

