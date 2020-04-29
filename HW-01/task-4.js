"use strict";

let credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let message;

let input = prompt("Pick amount of droids what you wanna buy");

if (input === null) {
  alert(message = "Closed by user!");
} else {
  let amount = Number(input);
  totalPrice = amount * pricePerDroid;
  if (totalPrice > credits) {
    alert(message = "Not enought money on your balance!");
  } else {
    let balance = credits - totalPrice;
    alert(message = `You bought ${amount} of droid, your balance ${balance} credits.`);
  }
}
