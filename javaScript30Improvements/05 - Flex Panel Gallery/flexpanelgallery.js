/* Libby Wichman - JavaScript30 2 of 5 */
/* 2019-09-04 - flexpanelgallery.css */

/* Adapted from https://javascript30.com */
/* Flex Panel Gallery */

/*
   Things I did:
   Added the charChanging var to get the paragraphs that will change it's text from WEB124 to "Let's Take It All In!!".
   It only appears at the beginning, so you might need to reload it to see it.
*/

const panels = document.querySelectorAll('.panel');
const charChanging = document.querySelectorAll('changingWords');
let $ = function(id) {
   return document.getElementById(id);
}


function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
  toggleChar(); // added the function to be called here. 
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }

}

function toggleChar() {
   console.log("Toggle Char working");
   $("char1").textContent = "Let's";
   $("char2").textContent = "Take";
   $("char3").textContent = "It";
   $("char4").textContent = "All";
   $("char5").textContent = "In";
   $("char6").textContent = "!!";
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
