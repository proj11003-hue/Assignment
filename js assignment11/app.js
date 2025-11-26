                        // CHP38-40



// q1;
function power(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result = result * a;
    }

    return result;
}
let ans=power(2,3)
console.log(ans)




// q2;

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

let a = parseFloat(prompt("Enter side a of the triangle:"));
let b = parseFloat(prompt("Enter side b of the triangle:"));
let c = parseFloat(prompt("Enter side c of the triangle:"));

if (a + b > c && a + c > b && b + c > a) {
    let area = calculateArea(a, b, c);
    alert("Area of the triangle: " + area.toFixed(2));
} else {
    alert("Invalid triangle sides! Please enter valid numbers.");
}



// q3;

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function calculatePercentage(m1, m2, m3, totalMarksPerSubject) {
    let totalMarksObtained = m1 + m2 + m3;
    let totalMarks = totalMarksPerSubject * 3;
    return (totalMarksObtained / totalMarks) * 100;
}
function mainFunction() {
   
    let m1 = parseFloat(prompt("Enter marks for Subject 1:"));

let m2 = parseFloat(prompt("Enter marks for Subject 2:"));
   let m3 = parseFloat(prompt("Enter marks for Subject 3:"));

    let totalMarksPerSubject = parseFloat(prompt("Enter total marks per subject:"));
let avg = calculateAverage(m1, m2, m3);
    let percent = calculatePercentage(m1, m2, m3, totalMarksPerSubject);

    
    alert("Average marks: " + avg.toFixed(2) + "\nPercentage: " + percent.toFixed(2) + "%");
}


mainFunction();



// q4;
function removeVowels(sentence) {
    
    let result = sentence.replace(/[aeiouAEIOU]/g, '');
    return result;
}
let sentence = prompt("Enter a sentence (max 25 characters):");
if (sentence.length > 25) {
    sentence = sentence.slice(0, 25);
}

let noVowels = removeVowels(sentence);
alert("Sentence without vowels: " + noVowels);



// q5;
function calculateOvertime(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12; // Rs. per hour
    let overtimePay = 0;

    if (hoursWorked > regularHours) {
        let overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}

let hours = parseInt(prompt("Enter total hours worked by the employee (no fractions):"));
let pay = calculateOvertime(hours);
alert("Overtime pay of the employee: Rs. " + pay);



// q6;
function calculateNotes(amount) {
    let hundreds = 0, fifties = 0, tens = 0;

    
    hundreds = Math.floor(amount / 100);
    amount = amount % 100;

    
    fifties = Math.floor(amount / 50);
    amount = amount % 50;

    
    tens = Math.floor(amount / 10);
    amount = amount % 10;

    return { hundreds, fifties, tens };
}


let amount = parseInt(prompt("Enter the amount to withdraw (multiple of 10):"));


let notes = calculateNotes(amount);


alert(
    "Currency notes to be given:\n" +
    "100s: " + notes.hundreds + "\n" +
    "50s: " + notes.fifties + "\n" +
    "10s: " + notes.tens
);
