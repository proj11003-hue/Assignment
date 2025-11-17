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
let nuuum = Number(str);

document.write("Value: " + str + "<br>");
document.write("Type: string <br><br>");

document.write("Value: " + nuuum + "<br>");
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

var username = prompt("Enter your username:");

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);

   
    if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
        alert("Please enter a valid username (no @ . , ! allowed).");
        break;
    }
}






// q11;

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


// q12;
var password = prompt("Enter your password:");

var hasLetter = false;
var hasNumber = false;


if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
}


else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password should not start with a number.");
}


else {

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasLetter = true;
        }

        
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }

    if (hasLetter && hasNumber) {
        alert("Password is valid!");
    } else {
        alert("Password must contain both letters and numbers.");
    }
}



// q13;
var university = "University of Karachi";
var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}



// q14;
var userInput = prompt("Enter something:");
var lastChar = userInput[userInput.length - 1];

document.write("Last character: " + lastChar);



                        //  CHP26-30

// q1;

var nuum = parseFloat(prompt("Enter a positive number:"));


document.write("Number: " + nuum + "<br>");


document.write("Round off value: " + Math.round(nuum) + "<br>");
document.write("Floor value: " + Math.floor(nuum) + "<br>");
document.write("Ceil value: " + Math.ceil(nuum) + "<br>");



// q2;

var num = parseFloat(prompt("Enter a negative floating-point number:"));


if (isNaN(num) || num >= 0) {
    alert("Please enter a valid negative number!");
} else { document.write("Number: " + num + "<br>"); 
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
}



// q3;

var nuum = parseFloat(prompt("Enter a number:"));
document.write("The absolute value of " + nuum + " is " + Math.abs(nuum));


// q4;

var dice = Math.floor(Math.random() * 6) + 1;
document.write("You rolled a dice and got: " + dice);



// q5;
var coin = Math.floor(Math.random() * 2);

var result;


if (coin === 0) {
    result = "Heads";
} else {
    result = "Tails";
}
document.write("The coin shows: " + result);
// q6;

var randomNumber = Math.floor(Math.random() * 100) + 1;


document.write("Random number between 1 and 100: " + randomNumber);



// q7;

var randomNumber = Math.floor(Math.random() * 100) + 1;


document.write("Random number between 1 and 100: " + randomNumber);



// q8;
let answer = 7;
let userans = Number(prompt("Guess the correct number between 1-10"));



if (answer === userans) {
  console.log("Bilkul sahi jawab!");
} else if (userans==answer- 1) {
  console.log("Ik step or");
} else if (userans==answer + 1) {
  console.log("Ik step aage chale gae!");
}else if (userans==answer +2 ||userans==answer-2){
    console.log("Kuch or try karo")
} else if(userans==answer +3 ){
    console.log("aage nikal gaya!!")}
    else if(userans==answer -3 ){
    console.log( "Buhat peche!!")}
    else if(userans==answer -6 ){
    console.log("bohat low guess hai!!")}
 else {
  console.log("Wrong answer!");
}
