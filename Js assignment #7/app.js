//                                 CHP21-25
//  q1;                               
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");


// q2
let mobileModel = prompt("Enter your favorite mobile phone model:");

let length = mobileModel.length;

document.write("My favorite phone is: " + mobileModel + "<br>");
document.write("Length of string: " + length);



// q3;
let word = "Pakistani";
let index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);



// q4;
let firsstName = prompt("Enter your first name:");
let lasstName = prompt("Enter your last name:");

let fulllName = firsstName.concat(" ", lasstName);

alert("Hello, ".concat(fulllName, "! Welcome!"));



// q5;
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);



// q6;
let message = "Ali and Sami are best friends. They play cricket and football together.";

let newMessage = message.replace(/and/g, "&");

document.write("Message: " + message + "<br>");
document.write("After replacement: " + newMessage);



// q7;
let str = "472";
let num = Number(str);

document.write("Value: " + str + "<br>");
document.write("Type: string <br><br>");

document.write("Value: " + num + "<br>");
document.write("Type: number");



// q8;

var userInput = prompt("Enter some text:");


var upperCaseInput = userInput.toUpperCase();


alert("Your input in capital letters: " + upperCaseInput);





// q9;
var numm = 35.36;


var numStr = numm.toString();


var result = numStr.replace(".", "");


document.write("Result: " + result);




// q10;

var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var userInput = prompt("Enter the item you want to search:");


var searchItem = userInput.toLowerCase();

var found = false;


for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        alert(searchItem + " is available at index " + i);
        found = true;
        break; 
    }
}


if (!found) {
    alert(searchItem + " is not available in the list");
}
