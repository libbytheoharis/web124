/**
*  project06.js
*  Libby Wichman
*  2019-10-15
**/

"use strict";

// STEP 1

function  whichImg(e) {
   var message, element;
   var target = e.target; // get target of event.
   message = target.getAttribute("alt");
   element = document.getElementById("imageDescription");
   element.textContent = message;
}


// STEP 2 and STEP 3

function nodeListByQuerySelectorAll() {
   //console.log("getting a list of elements by query selector all.");
   let nodeListOfElements = document.querySelectorAll("img");
   if (nodeListOfElements.length >= 1) {
      //console.log("in the if statement");
      nodeListOfElements.forEach(function(element){addEventListener("click", whichImg, false)});
   }
   //console.log("I can get here");
}


window.onload = function (){
   console.log("window loaded");
   nodeListByQuerySelectorAll();
}
