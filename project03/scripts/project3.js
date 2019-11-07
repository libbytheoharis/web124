/**
*  project3
*  Libby Wichman
*  2019-09-09
**/

"use strict";

var $ = function(id) {
   return document.getElementById(id);
}



// JavaScript Arrays!!
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//console.log(months);

months[0] = "January";
console.log(months);


months[1] = "February";
document.getElementById("p1").textContent = months[0];
document.getElementById("p2").textContent = months[1];
document.getElementById("p3").textContent = months[2];

var myBirthdayMonth = "January";
document.getElementById("p4").textContent = "My birthday is in the month of " + myBirthdayMonth;
document.getElementById("p5").textContent = "My birthday is in the month of " + months[0];

document.getElementById('p6').textContent = 'My birthday is in the month of ' + myBirthdayMonth;
document.getElementById('p7').textContent = 'My birthday is in the month of ' + months[0];

var myBirthdayMonth = "January";
document.getElementById("p8").innerHTML = "My <em>birthday</em> is in the month of " + myBirthdayMonth + " using the innerHTML property";
document.getElementById("p9").innerHTML = "My <em>birthday</em> is in the month of " + months[0] + " using the innerHTML property";



// Storing Data
var fullName = "Libby Wichman";
console.log(fullName);

var annualSalaray = 80000;
console.log(annualSalaray);

var vetStatus = false;
console.log(vetStatus);

var friends = ["Mark", "Callie", "Otto the dog"];
console.log(friends);

var friendsSalary = [80000, 80000, 0];
console.log(friendsSalary);

var otherFriend = {
   firstName: "Jim",
   lastName: "Stuber",
   salary: 100000
};




window.onload = function (){
   console.log("window loaded");

}
