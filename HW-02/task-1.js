"use strict";

const logItems = function (stuffs) {
  for (let i = 0; i < stuffs.length; i += 1) {
    console.log(`${i + 1} - `, stuffs[i]);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


