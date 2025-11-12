//                           CHP 12-13
// q1


let char = prompt("Enter a character:");

let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log("The input is a number.");
} 
else if (ascii >= 65 && ascii <= 90) {
  console.log("The input is an uppercase letter.");
} 
else if (ascii >= 97 && ascii <= 122) {
  console.log("The input is a lowercase letter.");
} 
else {
  console.log("The input is not a number or letter.");
}



// q2
let num1 = +prompt("Enter first integer:");
let num2 = +prompt("Enter second integer:");

if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} 
else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
} 
else {
  console.log("Both numbers are equal.");
}



// q3;
let num =prompt("Enter a number")
if (num>0) {console.log("value is positive")}
else if (num<0) {console.log("Value is negative")}
else  {console.log("Value is zero")}


// q4;
let chara = prompt("Enter a single character:");

chara = chara.toLowerCase();  

if (chara === "a" || chara === "e" || chara === "i" || chara === "o" || chara === "u") {
  console.log(true);
} else {
  console.log(false);

}



// q5;
let pass=("Haseeb")
let userpass=prompt("Enter your password")
if (userpass=("Haseeb")) {console.log("Password is correct")}
else {console.log("Password in incorrect")}



// q6;
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);


// q7;
var time = +prompt("Enter time in 24-hour format (e.g., 19:00 for 7 PM):");

if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid time format! Please enter between 0000 and 2359.");
}




                            //  CHP 14-16


// q1;  
var studentNamesArr = [];


// q2;
var studentNamesArr = new Array();


// q3;
var stringsArray = ["Ali", "Ahmed", "Sara"];


// q4;
var numbersArray = [10, 20, 30, 40];



// q5;
var booleanArray = [true, false, true, false];



// q6;
var mixedArray = ["Ali", 25, true, 89.5];



// q7;
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.writeln("<h1>Qualifications in Pakistan</h1>");
document.writeln("1) " + educationQualifications[0] + "<br>");
document.writeln("2) " + educationQualifications[1] + "<br>");
document.writeln("3) " + educationQualifications[2] + "<br>");
document.writeln("4) " + educationQualifications[3] + "<br>");
document.writeln("5) " + educationQualifications[4] + "<br>");
document.writeln("6) " + educationQualifications[5] + "<br>");
document.writeln("7) " + educationQualifications[6] + "<br>");
document.writeln("8) " + educationQualifications[7] + "<br>");


// q8;
// Array to store student names
var studentNames = ["Michael", "John", "Tony"];

// Array to store student scores
var studentScores = [320, 400, 350];

// Total marks for each student
var totalMarks = 500;

// Student 1
var percentage1 = (studentScores[0] / totalMarks) * 100;
document.writeln(
  "Score of " + studentNames[0] + " is " + studentScores[0] + 
  ". Percentage: " + percentage1 + "%<br>"
);

// Student 2
var percentage2 = (studentScores[1] / totalMarks) * 100;
document.writeln(
  "Score of " + studentNames[1] + " is " + studentScores[1] + 
  ". Percentage: " + percentage2 + "%<br>"
);

// Student 3
var percentage3 = (studentScores[2] / totalMarks) * 100;
document.writeln(
  "Score of " + studentNames[2] + " is " + studentScores[2] + 
  ". Percentage: " + percentage3 + "%<br>"
);
