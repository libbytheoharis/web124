/**
*  review.js
*  Libby Wichman
*  2019-09-16
**/

"use strict";

var myIIFE = (function() {

var friend = {
   firstName: "Callie",
   lastName: "Funk",
   birthDate: new Date("1985-01-16T03:24:00"),
   desiredAnnualSalary: 180000,
   educationLevel: 16,
   calculateSalary: function() {
      var likelyAnnualSalary = this.desiredAnnualSalary/2 + (this.educationLevel * 100);
      return likelyAnnualSalary;
   }
};

function dateHelp(datePassed) {
   return (datePassed.getMonth() + 1) + "/" + datePassed.getDate() + "/" + datePassed.getFullYear();
}


document.getElementById("p1").textContent = "First name: " + friend.firstName;
document.getElementById("p2").textContent = "Last name: " + friend.lastName;
document.getElementById("p3").textContent = "Birthdate: " + dateHelp(friend.birthDate);
document.getElementById("p4").textContent = "Desired annual salary: $" + friend.desiredAnnualSalary.toLocaleString();
document.getElementById("p5").textContent = "Education level: " + friend.educationLevel;
document.getElementById("p6").textContent = "Likely annual salary: $" + friend.calculateSalary().toLocaleString();


//console.log(friend);   // used for testing
//console.log(friend.firstName + friend.lastName); // used for testing
console.log(friend.birthDate); // used for testing
//console.log(friend.calculateSalary().toLocaleString()); // used for testing

} ()); // end immediately invoked function.
