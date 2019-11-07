/**
*  finalproject.js
*  Libby Wichman
*  2019-10-22
**/

"use strict";

// OBJECTIVE 1
function objective1() {
   // Changes the explanation paragraphs' text to blue.
   // Uses a node list to change the style color of each paragraph.
   let nodeExplanationList = document.getElementsByClassName("explanation");
   if (nodeExplanationList.length >= 1){
      for(let i = 0; i < nodeExplanationList.length; i++) {
         var element = nodeExplanationList[i];
         element.style.color = 'blue';
      }
   }
};
document.getElementById("obj1button").addEventListener("click", objective1);



// OBJECTIVE 2
function objective2() {
   // adding a paragraph element to the second list item.
   var newParaElement = document.createElement("p");
   var newText = document.createTextNode("Hello! I'm a new paragraph!");
   newParaElement.appendChild(newText);
   var position = document.getElementsByTagName("li")[1];
   position.appendChild(newParaElement);
};
document.getElementById("obj2button").addEventListener("click", objective2);


// OBJECTIVE 3
function objective3() {
   // The size of the users screen will show when the objective 3 button is pressed.
   var intViewportHeight = window.innerHeight;
   var intViewportWidth = window.innerWidth;
   var textToShowScreenDim = "Your screen is " + intViewportHeight + " by " + intViewportWidth + ".";
   document.getElementById("obj3explaination").textContent = textToShowScreenDim;
};
document.getElementById("obj3button").addEventListener("click", objective3);


// OBJECTIVE 4
function objective4() {
   // do some custom form validation
//   <p class="explaination" id="obj4explaination">Enter a word below then click the objective 4 button. If there are any numbers within the text box, it will ask you to reeneter the word.</p>
   var userInputWord = document.getElementById("inputForm").value;
   let hasNum = false;
   //console.log(userInputWord);
   if(userInputWord.length >= 1){
      var searchForDigit= /\d/;
      hasNum = searchForDigit.exec(userInputWord);
      if(hasNum){
         document.getElementById("response").textContent = "Please enter a word that does not contain numbers.";
      }
      else {
         document.getElementById("response").textContent = "No numbers were found! Yay!"
      }
   }
};
document.getElementById("obj4button").addEventListener("click", objective4);


// OBJECTIVE 5
function objective5() {
   // create and use some Date, Numbwre or Math objects
   // Make a little calculator
   var firstValue = parseInt(document.getElementById("number1").value);
   console.log(firstValue);
   var secondValue = parseInt(document.getElementById("number2").value);
   console.log(secondValue);
   document.getElementById("result").textContent = firstValue + secondValue;
};
document.getElementById("obj5button").addEventListener("click", objective5);


// OBJECTIVE 6
function objective6() {
   // user inputs a word and then display it backwards.
   var userWord = document.getElementById("objective6Input").value;
   console.log(userWord);
   console.log(userWord.length);
   if(userWord.length >= 1){
      var response;
      for(let i = userWord.length; i >= 0; i--) {
         response += userWord[i];
      }
      document.getElementById("objective6Result").textContent = response;
   }
};
document.getElementById("obj6button").addEventListener("click", objective6);


// OBJECTIVE 7
function objective7() {
   // use the console log to debug????
   //Press objective 7 button to get a message.
   console.log("Hello user!!");
   console.log("Using this we can debug a lot of code.");
   let aVariable = "some value";
   console.log(aVariable);
   aVariable = "changed value...can you see me on the console?";
   console.log(aVariable);
};
document.getElementById("obj7button").addEventListener("click", objective7);


// OBJECTIVE 8
function objective8() {
   // write code to store state information
   // query strings, hidden form fields.
   var listOfSecurityMeasures = [
      "Do not use innerHTML in your JavaScript.",
      "Always validated user input to ensure there is not malicious code.",
      "Validated input before it gets to the server.",
      "Do not create DOM fragments containing HTML from unknown sources."
   ]
   listOfSecurityMeasures.forEach(function(element){
      console.log(element)
   });
};
document.getElementById("obj8button").addEventListener("click", objective8);



window.onload = function (){
   console.log("window loaded");
}
