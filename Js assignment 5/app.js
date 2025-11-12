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
// q9;

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];


var selectedCities = cities.slice(0, 3); 
document.write("Cities Array: " + cities.join(", ") + "<br>");
document.write("Selected Cities Array: " + selectedCities.join(", "));



// q10;
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
document.write(singleString);
