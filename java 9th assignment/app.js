//                              CHP31-34


// q1;
var today= new Date()
console.log(today)



// q2;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var monthName = months[new Date().getMonth()];
alert(monthName);



// q3;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var todayIndex = new Date().getDay()
var firstThree = days[todayIndex].slice(0, 3)

alert(firstThree);


// q4;
var day = new Date().getDay();
if (day === 0 || day === 6) {
    alert("It's Fun day");
}



// q5;
var date = new Date().getDate();  // gets the current day of the month (1–31)

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}



// q6;

let d = new Date();


minutesSince1970 = d.getTime() / (1000 * 60);
console.log(minutesSince1970);



// q7;
let dd = new Date();
let hour = dd.getHours();

if (hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}




// q8;
let laterDate = new Date(2020, 11, 31);



// q9;

let day = new Date();
let hours = day.getHours();
day.setHours(hours + 1);
document.write(d);



// q10;
let pastDate = new Date();                
pastDate.setFullYear(pastDate.getFullYear() - 100); 
alert(pastDate);                           



// q11;

let age = prompt("Enter your age:");


let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;


document.write("Your birth year is: " + birthYear);
