                        // CHP:35-38
//  q1;                       
function showDateTime() {
    var now = new Date();
    document.write(now);
}
showDateTime();




// q2;
function greetUser() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "!");
}
greetUser();



// q3;
function addNumbers() {
  let num1 = +prompt("Enter first number:");
  let num2 = +prompt("Enter second number:");
  
  let sum = num1 + num2;
  return sum;
}

let result = addNumbers();
document.write("The sum is: " + result);





// q4;
function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid operator!";
    }

    document.write("Result: " + result);
    return result;
}

// ----- Taking user input -----
let n1 = +prompt("Enter first number:");
let n2 = +prompt("Enter second number:");
let op = prompt("Enter operator (+, -, *, /):");


calculator(n1, n2, op);





// q5;
function square(num) {
  return num * num;
}




// q6;
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;  
    }
    return result;
}



// q7;
function showCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
let startNum = +prompt("Enter start number:");
let endNum = +prompt("Enter end number:");
showCounting(startNum, endNum);



// q8;
function areaRectangle(width, height) {
    return width * height;
}
let result1 = areaRectangle(5, 10);
document.write("Area (values): " + result1 + "<br>");




function areaRectangle(width, height) {
    return width * height;
}
let w = 7;
let h = 12;
let result2 = areaRectangle(w, h);
document.write("Area (variables): " + result2);




// q9;
function capitalizeWords(str) {
    
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
let text = "the quick brown fox";
let resultt = capitalizeWords(text);
document.write(result);
