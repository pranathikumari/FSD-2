"use strict";
function greet(name) {
    return `Namaste,${name}!`;
}
function getLocation(city = "Hyderabad") {
    return `Location:${city};`;
}
function sendAlert(phNumber, message) {
    console.log(`Sending SMS to ${phNumber}...`);
    if (message) {
        console.log(`Content:${message}`);
    }
}
function calculateTotalScores(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(greet("Prabhas"));
console.log(getLocation());
console.log(getLocation("Vijayavada"));
sendAlert(123456789, "Movie starts now!");
const total = calculateTotalScores(10, 20, 30, 40);
console.log(`Total Score:${total}`);
