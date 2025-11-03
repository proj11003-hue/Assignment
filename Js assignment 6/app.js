// chp 17-20




// q1;
var multiArray = [[], [], []];


// q2;
var multiArray = [
  [0,1,2,3],
  [1,0,1,2],
  [2,1,0,1]
];



// q3;
for (var i=1;i<=10;i++){
    console.log(i)
}


// q4;

var tableNumber = +prompt("Enter a number to print its multiplication table:");


var tableLength = +prompt("Enter the length of the table:");


for (var i = 1; i <= tableLength; i++) {
    document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}


// q5;
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


for (var i = 0; i < fruits.length; i++) {
    document.writeln(fruits[i] + "<br>");
}

document.writeln("<br>"); 

for (var i = 0; i < fruits.length; i++) {
    document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");
}


