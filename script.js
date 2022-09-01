`use strict`

window.addEventListener("DOMContentLoaded", start);

// all const


// all variables
let queueSize = getNumberOfCustomers();

function start() {

}

function getNumberOfCustomers() {
    // FAKE : goves a completely random number since no access to real queue data
    return Math.floor(Math.random()*32);
}