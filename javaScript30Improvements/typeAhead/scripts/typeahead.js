/**
*  typeahead.js
*  Libby Wichman
*  2019-09-15
**/
// Adapted from Ajax Type Ahead on JavaScript30.com by Wes Bos.
/*
   Added a function that send the total number of matching records to the paragraph above the search box.
*/

"use strict";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

//
// let countingMatches = (
//   while(regex.exec(cities) !== null) {
//      ++count;
//   }
//
// )
/// This is where I started. I didn't really know what to do yet.
// I then tried to write out or describe what I wanted to do on a piece of paper.


function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    //console.log(place.city.match(regex).length + place.state.match(regex).length); This didn't work, but it wasn't showing undefined or null
    //console.log(place.city.match(regex).length); // This errors.
    // Moving to the location that calls find Matches to see if I can get the number out of there.
    return place.city.match(regex) || place.state.match(regex)
});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray.length); // THIS WORKS!! The return of the findMatches is an array. You know how to check the length of an array.
  // In order to get the number of matches each time, I need to capture the number here.
  const matchCount = matchArray.length;
  displayNumberOfMatches(matchCount); // pass the number of results found to the displayNumberOfMatches function.
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;

}


// This is the function I added for displaying the number of matches in the <p> element.
function displayNumberOfMatches(numberFound){
   document.getElementById("numberOfSearchResults").textContent = "Results located: " + numberFound +" of 1000";
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
