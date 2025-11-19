console.log("js running")
let ramadanDate = new Date("2026-02-18");
let today = new Date();
let diff = ramadanDate - today;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let weeks = Math.floor(days / 7);
let months = (days / 30.44).toFixed(1);
console.log("Days remaining: " + days);
console.log("Weeks remaining: " + weeks);
console.log("Months remaining: " + months);
