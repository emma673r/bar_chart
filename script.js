"use strict";

window.addEventListener("DOMContentLoaded", init);

const model = [];
const barArray = document.querySelectorAll(".bar");

let timeoutSpeed = 500;

function init() {
  console.log("init");
  loop();
}

// Controller
function loop() {
  arrUpdate();
  displayData();
  setTimeout(loop, timeoutSpeed);
}

// Model
function arrUpdate() {
  if (model.length < 40) {
    model.unshift(getNumberOfCustomers());
  } else {
    model.length = 39;
    model.unshift(getNumberOfCustomers());
  }
  console.log(model);
}

// View
function displayData() {
  for (let i = 0; i < 40; i++) {
    barArray.textContent = model[i];
    barArray[i].style.height = `${model[i]}px`;
    if (model[i] < 15) {
      barArray[i].style.backgroundColor = `yellowgreen`;
    } else if (model[i] < 25) {
      barArray[i].style.backgroundColor = `yellow`;
    } else if (model[i] < 35) {
      barArray[i].style.backgroundColor = `orange`;
    } else {
      barArray[i].style.backgroundColor = `red`;
    }
  }
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
