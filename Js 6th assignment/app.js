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


// q6;
// a. Counting
let counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
console.log("Counting: " + counting.join(", "));

// b. Reverse counting
let reverse = [];
for (let i = 10; i >= 1; i--) {
  reverse.push(i);
}
console.log("Reverse counting: " + reverse.join(", "));

// c. Even numbers
let even = [];
for (let i = 0; i <= 20; i += 2) {
  even.push(i);
}
console.log("Even: " + even.join(", "));

// d. Odd numbers
let odd = [];
for (let i = 1; i < 20; i += 2) {
  odd.push(i);
}
console.log("Odd: " + odd.join(", "));

// e. Series (with 'k')
let series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
console.log("Series: " + series.join(", "));



// q7;
let numbers = [24, 53, 78, 91, 12];
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Array items: " + numbers);
console.log("The largest number is " + largest);



// q8;
let numberss = [24, 53, 78, 91, 12];
let smallest = numbers[0]; 

for (let i = 1; i < numberss.length; i++) {
  if (numberss[i] < smallest) {
    smallest = numberss[i];
  }
}

console.log("Array items: " + numberss);
console.log("The smallest number is " + smallest);

