// Math Metods
// Q1
var num = prompt("Enter a positive number:");
num = Number(num);
document.write("<b>Math Methods</b>" + "<br>");
document.write("Number : " + num + "<br>");
document.write("Round of value  :" + Math.round(num) + "<br>");
document.write("Floor value : " + Math.floor(num) + "<br>");
document.write("Ceil value : " + Math.ceil(num) + "<br>");
document.write("<br>");

// Q2
var num = prompt("Enter a negative number:");
num = Number(num);
document.write("Number : " + num + "<br>");
document.write("Round of value : " + Math.round(num) + "<br>");
document.write("Floor value : " + Math.floor(num) + "<br>");
document.write("Ceil value : " + Math.ceil(num) + "<br>");
document.write("<br>");

// Q3
var num =prompt("Enter a number to find its absolute value:");
num = Number(num);
document.write("The absolute value of " + num + " is " + Math.abs(num) + "<br>");
document.write("<br>");

// Q4
var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value : " + diceRoll + "<br>");
document.write("<br>");

// Q5
var toss = Math.floor(Math.random() *2) + 1;
if (toss === 0){
    document.write(toss + "<br>" + "Random coin value : heads " + "<br>");
}else{
    document.write(toss + "<br>" + "Random coin value : tails " + "<br>");
}
document.write("<br>");

// Q6
var number = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100 : " + number + "<br>");
document.write("<br>");

// Q7
var userWeight = prompt("Enter your weight in kilograms:");
userWeight = parseFloat(userWeight);
document.write("The weight of user is " + userWeight + " kilograms <br>");
document.write("<br>");

// Q8
var secretNumber = Math.floor(Math.random()* 10) + 1;
var userGuess = prompt("Guess the secret number between 1 and 10:");
userGuess = Number(userGuess);
if (userGuess === secretNumber){
    alert("Conratulations! you guessed the secret number " + secretNumber);
}else{
    alert("Try again !");
}
document.write("<br>");

// Date Methods
// Q1
var date = new Date();
document.write("<b>Date Methods</b>" + "<br>");
document.write(date + "<br>");
document.write("<br>");

// Q2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentMonth = new Date().getMonth();
document.write("Current month : " + months[currentMonth] + "<br>");
document.write("<br>")

// Q3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var today = new Date().getDay();
alert("Today is " + days[today]) 
document.write("<br>")

// Q4
var day = new Date().getDay();
if(day === 0 || day === 6){
    alert("It's Fun day")
}
document.write("<br>")

// Q5
var date = new Date().getDate();
if (date < 16){
    alert("First fifteen days of the month")
}else{
    alert("last days of the month")
}
document.write("<br>")

// Q6
var now = new Date();
var milliSec = now.getTime();
var minutes = milliSec/ (100 * 60)
document.write("Current Date : " + now + "<br>");
document.write("Elapsed Milliseconds since January 1, 1970 : " + milliSec + "<br>");
document.write("Elapsed Minutes since January 1, 1970 : " + minutes + "<br>");
document.write("<br>")

// Q7
var now = new Date();
var hour = now.getHours();
if (now < 12){
    alert("It's AM")
}else{
    alert("It's PM")
}
document.write("<br>")

// Q8
var laterDate = new Date(2020,11,31);
document.write(laterDate)
document.write("<br>")

// Q9
var ramadanStart = new Date(2015,5,18);
var today = new Date();
var diffMilli = today - ramadanStart;
var daysPassed = Math.floor(diffMilli/(1000 * 60 * 60 *24));
alert(daysPassed + " Days passed since 1st Ramadan, 2015")
document.write("<br>")

// Q10
var start2015 = new Date(2015 ,0, 1);
var milisec = start2015.getTime();
var sec = milisec/ 1000;
document.write("On reference date " + start2015 + sec + " seconds had passed since beginning of 2015" )
document.write("<br>")

// Q11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Current date : " + currentDate + currentHours + " hour ago "  +  "<br>")
document.write("<br>")

// Q12
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("Current date : " + currentDate + "100 years back, it was " + currentDate.getFullYear() + "<br>")
document.write("<br>")

// Q13
var age = +prompt("Enter your age")
var currentYear = new Date().getFullYear();
var birthYear =currentYear - age;
document.write("Your birth year is : " + birthYear + "<br>")
document.write("<br>")

// Q14
var name = prompt("Enter customer name ");
let units = parseFloat(prompt("Enter Number of Units:"));
let chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
let lateSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));

let month = new Date().toLocaleString("default", { month: "long" });

let netAmount = (units * chargesPerUnit).toFixed(2);
let grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);
chargesPerUnit = chargesPerUnit.toFixed(2);
lateSurcharge = lateSurcharge.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + name + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount);

