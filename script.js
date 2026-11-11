// 1.Smart Profile & Birth Year Calculator
let userName = prompt("Please enter your name:");
let currentAge = Number(prompt("Please enter your current age:"));
let currentYear = Number(prompt("Please enter the current year (e.g., 2026):"));

// Calculate exact birth year
let birthYear = currentYear - currentAge;

// Friendly output
alert(`Hello ${userName}, your birth year is ${birthYear}!`);
console.log(`User: ${userName}, Age: ${currentAge}, Calculated Birth Year: ${birthYear}`);

// 2.Interactive CLI Calculator
let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter a mathematical operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero is not allowed!";
    }
} else {
    result = "Error: Invalid operator selected!";
}

alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);

// 3.Dynamic Movie Wishlist Manager
let wishlist = ["Inception", "Interstellar", "The Dark Knight"];
console.log("Initial Wishlist:", wishlist);

let action = prompt("Choose an action: \n1. Add item \n2. Remove item \n3. Modify with splice").toLowerCase();

if (action === "1" || action.includes("add")) {
    let newItem = prompt("Enter the movie/item name to add:");
    let position = prompt("Do you want to add it to the (start) or (end)?").toLowerCase();
    
    if (position === "start") {
        wishlist.unshift(newItem);
    } else {
        wishlist.push(newItem);
    }
    alert("Updated Wishlist:\n" + wishlist.join(", "));

} else if (action === "2" || action.includes("remove")) {
    let position = prompt("Do you want to remove from the (start) or (end)?").toLowerCase();
    
    if (position === "start") {
        wishlist.shift();
    } else {
        wishlist.pop();
    }
    alert("Updated Wishlist:\n" + wishlist.join(", "));

} else if (action === "3" || action.includes("splice")) {
    let index = parseInt(prompt(`Enter index to modify (0 to ${wishlist.length - 1}):`));
    let deleteCount = parseInt(prompt("How many items to delete?"));
    let newItem = prompt("Enter new item name (leave blank if deleting only):");
    
    if (newItem) {
        wishlist.splice(index, deleteCount, newItem);
    } else {
        wishlist.splice(index, deleteCount);
    }
    alert("Updated Wishlist:\n" + wishlist.join(", "));
} else {
    alert("Invalid option selected.");
}

console.log("Final Wishlist:", wishlist);

// 4.City Finder & Search Engine
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
let searchCity = prompt("Enter a city name to search:");
let matchFound = false;

for (let i = 0; i < cities.length; i++) {
    // Case-insensitive comparison
    if (cities[i].toLowerCase() === searchCity.toLowerCase()) {
        matchFound = true;
        break; // Exit loop immediately once found
    }
}

if (matchFound) {
    alert(`City found! "${searchCity}" is present in the list.`);
    console.log(`Success: ${searchCity} was found.`);
} else {
    alert(`City not found! "${searchCity}" is not in the list.`);
    console.log(`Failure: ${searchCity} was not found.`);
}

// 5.Smart Supermarket Bill Splitter
let item1 = parseFloat(prompt("Enter price of item 1:")) || 0;
let item2 = parseFloat(prompt("Enter price of item 2:")) || 0;
let item3 = parseFloat(prompt("Enter price of item 3:")) || 0;

let totalBill = item1 + item2 + item3;
let familyMembers = parseInt(prompt("Enter total family members to split the bill with:")) || 1;

let perPersonShare = totalBill / familyMembers;

alert(`--- Bill Summary ---\nTotal Bill: $${totalBill.toFixed(2)}\nFamily Members: ${familyMembers}\nPer-Person Share: $${perPersonShare.toFixed(2)}`);
console.log(`Total: ${totalBill}, Share per person: ${perPersonShare}`);

// 6.Time-Based Greeting & Schedule Checker
let currentHour = parseInt(prompt("Enter current hour (24-hour format, e.g., 14 for 2 PM):"));
let message = "";

if (currentHour >= 5 && currentHour < 12) {
    message = "Good Morning!";
} else if (currentHour >= 12 && currentHour < 17) {
    message = "Good Afternoon!";
} else if ((currentHour >= 17 && currentHour <= 23) || (currentHour >= 0 && currentHour < 5)) {
    message = "Good Evening / Good Night!";
} else {
    message = "Invalid hour entered! Please enter a number between 0 and 23.";
}

alert(message);
console.log(`Hour: ${currentHour} -> ${message}`);

// 7.Custom Multiplication Table Generator
let num = parseInt(prompt("Enter a number for the multiplication table:"));
let range = parseInt(prompt("Enter the range (e.g., up to what number):"));

let tableResult = `Multiplication Table for ${num} (up to ${range}):\n`;

for (let i = 1; i <= range; i++) {
    tableResult += `${num} x ${i} = ${num * i}\n`;
}

console.log(tableResult);
alert(tableResult);

// 8.Nested Loop Star Pattern Generator (Right-Angle Triangle)
let totalRows = parseInt(prompt("Enter number of rows for the star pattern:"));
let starPattern = "";

for (let i = 1; i <= totalRows; i++) {
    let rowString = "";
    for (let j = 1; j <= i; j++) {
        rowString += "* ";
    }
    starPattern += rowString + "\n";
}

console.log(starPattern);
alert("Star Pattern Generated!\n(Check console for clean layout or view below):\n\n" + starPattern);

// 9.Movie Ticket Discount & VIP Pass System
let age = parseInt(prompt("Enter your age:")) || 0;
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase() === "yes";
let promoCode = prompt("Enter a promo code (if any, e.g., VIP123):");

let basePrice = 100;
let finalPrice = basePrice;
let vipPass = false;

// Age and student discounts
if (age < 12) {
    finalPrice = 50; // Kids special price
    alert("Kid's special price applied!");
} else if (isStudent) {
    finalPrice = basePrice * 0.8; // 20% discount for students
    alert("Student 20% discount applied!");
}

// Nested if for VIP backstage pass via promo code
if (promoCode === "VIP123") {
    vipPass = true;
    alert("Special promo code accepted! You have unlocked a VIP Backstage Pass.");
}

let summary = `--- Ticket Summary ---\nAge: ${age}\nStudent Status: ${isStudent}\nFinal Ticket Price: $${finalPrice.toFixed(2)}\nVIP Backstage Pass: ${vipPass ? "Yes" : "No"}`;
alert(summary);
console.log(summary);

// 10.Interactive Quiz & Grade System
let score = 0;

// Question 1
let q1 = prompt("Q1: What is the capital of France?\n(a) London\n(b) Paris\n(c) Berlin").toLowerCase();
if (q1 === "b" || q1 === "paris") {
    score++;
}

// Question 2
let q2 = prompt("Q2: Which language runs natively in a web browser?\n(a) Python\n(b) Java\n(c) JavaScript").toLowerCase();
if (q2 === "c" || q2 === "javascript") {
    score++;
}

// Question 3
let q3 = prompt("Q3: What does CSS stand for?\n(a) Cascading Style Sheets\n(b) Creative Style System\n(c) Computer Style Sheets").toLowerCase();
if (q3 === "a" || q3 === "cascading style sheets") {
    score++;
}

// Conditional Grading
let grade = "";
if (score === 3) {
    grade = "Grade A (Excellent!)";
} else if (score === 2) {
    grade = "Grade B (Good Job!)";
} else if (score === 1) {
    grade = "Grade C (Pass)";
} else {
    grade = "Fail (Keep Practicing!)";
}

let resultMessage = `--- Quiz Results ---\nYour Score: ${score} / 3\nResult: ${grade}`;
alert(resultMessage);
console.log(resultMessage);