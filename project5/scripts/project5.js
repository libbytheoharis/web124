/**
*  project5.js
*  Libby Wichman
*  2019-10-08
**/

"use strict";

// Group 1 Button Functions
function gettingElementById() {
   // console.log("getting element by id has been reached.")
   document.getElementById("computers").style.color = 'blue';
};

function querySelectorFunction() {
   //console.log("getting element by id has been reached.");
   document.querySelector("li.favorite").style.color = 'red';
}

function nodeListClass() {
   //console.log("getting a list of elements by class name.");
   let nodeListOfElements = document.getElementsByClassName("favorite");
   if (nodeListOfElements.length >= 1){
      for(let i = 0; i < nodeListOfElements.length; i++) {
         var element = nodeListOfElements[i];
         element.style.color = 'green';
      }
   }
}

function nodeListByTagName() {
   //console.log("getting a list of elements by tag name.");
   let nodeListOfElements = document.getElementsByTagName("h2");
   if (nodeListOfElements.length >= 1 ) {
      for(let i = 0; i < nodeListOfElements.length; i++) {
         var element = nodeListOfElements[i];
         element.style.background = 'green';
      }
   }
}

function nodeListByQuerySelectorAll() {
   //console.log("getting a list of elements by query selector all.");
   let nodeListOfElements = document.querySelectorAll("li.favorite");
   if (nodeListOfElements.length >= 1) {
      for(let i = 0; i < nodeListOfElements.length; i++) {
         var element = nodeListOfElements[i];
         element.style.color = '#0ff';
      }
   }
}

// Group 2 Button Functions
function textChangeParentNode() {
   //console.log("changing the textContent property of the parent element.");
   var parToNetNode = document.getElementById("networking").parentNode;
   let newTextValue = parToNetNode.textContent;
   //console.log(newTextValue);
   newTextValue = "Show me the money!";
   parToNetNode.parentNode.textContent = newTextValue;
   // I don't think this is correct.
   // It think this is partially the issue of how I constructed the <ul>
   // in the html.
   // The instructions said to make and unordered list, which then contains
   // another <ul> group. This "replaces" all of the three li items.
}

function innerToPrevSib() {
   //console.log("changing the innerHTML property of the previous sibling of the element with the id of 'web'");
   var prevSibToWebId = document.getElementById("web").previousSibling;
   let newInnerHTML = "<p>&#9733; &#9733; &#9733; Information Technology &#9733; &#9733; &#9733;</p>";
   prevSibToWebId.previousSibling.innerHTML = newInnerHTML;
}

function textChangeToNextSib() {
   //console.log("changing the textContent of the next sibling of the web element");
   var nextSibToWeb = document.getElementById("web").nextSibling;
   let newTextValue = "Data Science";
   //console.log(newTextValue);
   nextSibToWeb.textContent = newTextValue;
}

function changeClassName() {
   //console.log("change the className property of element id='data' to favorite.");
   document.getElementById("data").className = "favorite";
}

// Group 3 Button Functions

function creatingElements() {
   //console.log("adding and element");
   var newElement = document.createElement("li");
   var newText = document.createTextNode("Science");
   newElement.appendChild(newText);
   var position = document.getElementsByTagName("ul")[1];
   position.appendChild(newElement);
}

function removingChildren() {
   //console.log("add the id of autolist to the opening unordered list tag in the AutoTech area.");
   var removeElement = document.getElementsByTagName("li")[11];
   var containerElement = removeElement.parentNode;
   containerElement.removeChild(removeElement);
}

function hasAttAndRemove() {
   console.log("select the second li element. if it's a favorite, remove the attribute.");
   var elementToTest = document.getElementsByTagName("li")[1];
   if (elementToTest.hasAttribute("favorite")) {
      elementToTest.removeAttribute("favorite");
   }
   console.log(elementToTest.hasAttribute("favorite"));
}

// Event Listeners - Group 1
document.getElementById("getElementById").addEventListener("click", gettingElementById);
document.getElementById("querySelector").addEventListener("click", querySelectorFunction);
document.getElementById("getElementByClassName").addEventListener("click", nodeListClass);
document.getElementById("getElementsByTagName").addEventListener("click", nodeListByTagName);
document.getElementById("querySelectorAll").addEventListener("click", nodeListByQuerySelectorAll);

// Event Listeners - Group 2
document.getElementById("parentNode").addEventListener("click", textChangeParentNode);
document.getElementById("previousSibling").addEventListener("click", innerToPrevSib);
document.getElementById("nextSibling").addEventListener("click", textChangeToNextSib);
document.getElementById("className").addEventListener("click", changeClassName);

// Event Listeners - Group 3
document.getElementById("create").addEventListener("click", creatingElements);
document.getElementById("removeChild").addEventListener("click", removingChildren);
document.getElementById("hasAttributeAndRemove").addEventListener("click", hasAttAndRemove);


// window.onload = function (){
//    console.log("window loaded");
// }
