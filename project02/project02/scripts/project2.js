/**
*  project2
*  Libby Wichman
*  2019-09-03
**/

"use strict";

let $ = function(id) {
   return document.getElementById(id);
}

let myName = "Libby Wichman";

let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 34;
let n2 = 2;
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

let myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

let ageCompare = 33 < numberMult;
document.getElementById("p6").textContent = ageCompare;



// Event Listener to trigger all code OR individual events
window.onload = function (){
   console.log("window loaded");

}
