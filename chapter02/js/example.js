// Create variables for the welcome message.
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three variables above to creat the welcome message
var welcome = greeting + name + message;

// Create varabiles to hold details about the sign.
var sign = 'Montague House';
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandTotal = subtotal + shipping;

// Get the element that has an id of greeting.
var el = document.getElementById('greeting');
// Replace the conent of that element with the personalized welcome message.
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents.
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of titles then update its contents.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotla then update its context.
var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$'+ subtotal;

// Get the element that has an id of shipping then update its contents.
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an idea of their grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
