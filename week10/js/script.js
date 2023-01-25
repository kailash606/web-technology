// document.getElementsById("p1").innerHTML="hey this is week 10";
// document.getElementsById("p1").style.background="plum";
// document.getElementsByClassName("p1")[1].innerHTML="HEY THUS US WEEK 10";
document.getElementsByTagName("h1")[i].innerHTML="getElementsByTagName";
var select=document.getElementsByClassName("p1");
for(var i=0;i<=select.length;i++){
    select[i].innerHTML="hey this is week 10";
    select[i].style.cssText="background-color:plum; color:white; font-size:30px;";
}