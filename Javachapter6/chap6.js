// Arithematic Expressions
var a = 10;
document.write("Results:<br>");
document.writeln("Value of a " + "is :" + a + ".<br>"); // 10
document.write("<br>");
++a;
document.writeln("Value of ++a " + "is :" + a + ".<br>"); // 11
document.write("Now the value of a is :" + a + ".<br>"); // 11
document.write("<br>");
document.writeln("Value of a++ " + "is :" + a + ".<br>"); // 11
a++;
document.write("Now the value of a is :" + a + ".<br>");
document.write("<br>");
document.writeln("Value of --a " + "is :" + --a + ".<br>"); // 12
document.write("Now the value of a is :" + a + ".<br>"); // 11
document.write("<br>");
document.writeln("Value of a-- " + "is :" + a-- + ".<br>"); // 11
document.write("Now the value of a is :" + a + ".<br>"); // 10
document.write("<br>");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
// --a = 1
// --b = 0
// --a - --b = 1-0 = 1
// ++b = 1
// b-- = 1
// result = 1 + 1 + 1 = 3
document.write("a is :" + a + ".<br>"); // 1
document.write("b is :" + b + ".<br>"); // 0
document.write("result is :" + result + ".<br>"); // 3

// User Input and Output
var userName = prompt("Enter Your Name:");
alert("Welcome " + userName + "!");
document.write("<br>");

// Multiplication Table
var num = prompt("Enter a number for multiplication table:", 5);
document.write("Multiplication Table of " + num + ":<br>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
document.write("<br>");

// Subject Marks and Percentage Calculation

// (a) Take 3 subject names


var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");
var subject1 = "English";
var subject2 = "Maths";
var subject3 = "Urdu";

// (b) Total marks for each subject
var totalMarksPerSubject = 100;

// (c & d) Take obtained marks for all subjects
var obtained1 = 54 +prompt("Enter obtained marks for " + subject1 + ":");
var obtained2 = 54 +prompt("Enter obtained marks for " + subject2 + ":");
var obtained3 = 40 +prompt("Enter obtained marks for " + subject3 + ":");

// (e) Calculate totals and percentage
var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalMarks) * 100;

// Display result in browser as a clean table (no border)
document.write("<h2>Marks Sheet</h2>");
document.write("<table style='border-collapse: collapse;'>");

document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained1 + "</td><td>" + ((obtained1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained2 + "</td><td>" + ((obtained2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained3 + "</td><td>" + ((obtained3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");

