/**
*  review.js
*  Libby Wichman
*  2019-09-25
**/

"use strict";

// Retrieves input value from user.
function getValueAndPopulate() {
   var userInput = parseInt(document.getElementById("num").value);
   console.log(userInput);
   addition(userInput);
   subtraction(userInput);
   multiplication(userInput);
   division(userInput);
};


function addition(numInput) {
   let msg = "addition";
   let result = 0;
   for(let i = 1; i < 11; i++){
      msg += "<br>" + i + " + " + numInput + " = ";
      result = Number(numInput) + Number(i);
      msg += result;
   }
   document.getElementById("addition").innerHTML = msg;
};

function subtraction(numInput) {
   let msg = "subtraction";
   let result = 0;
   let i = 1;
   while(i < 11){
      msg += "<br>" + i + " - " + numInput + " = ";
      result = Number(numInput) - Number(i);
      msg += result;
      i++;
   }
   document.getElementById("subtraction").innerHTML = msg;
};

function multiplication(numInput) {
   let msg = "multiplication";
   let result = 0;
   let i = 1;
   do {
      msg += "<br>" + i + " * " + numInput + " = ";
      result = Number(numInput) * Number(i);
      msg += result;
      i++;
   } while(i < 11)
   document.getElementById("multiplication").innerHTML = msg;
};

function division(numInput) {
   let msg = "division <br>";
   let result = 0;
   for(let i = 1; i < 11; i++){
      msg += i + " / " + numInput + " = ";
      result = i/numInput;
      msg += result.toFixed(2) + "<br>";
   }
   document.getElementById("division").innerHTML = msg;
};


// Event Listeners
document.getElementById("calculate").addEventListener("click", getValueAndPopulate);

window.onload = function (){
   console.log("window loaded");
}
