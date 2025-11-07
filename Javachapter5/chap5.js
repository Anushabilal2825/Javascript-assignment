document.write("<h1>JavaScript Chapter 5 Exercises</h1><br>");

// Addition , Multiplication, Division, Subtraction & Modulus
document.write("<h2>Addition,Multiplication,Division,Subtraction & Modulus</h2><br>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + ".<br>");

var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.write("The subtraction of " + num1 + " and " + num2 + " is " + sub + ".<br>");
document.write("The multiplication of " + num1 + " and " + num2 + " is " + mul + ".<br>");
document.write("The division of " + num1 + " and " + num2 + " is " + div + ".<br>");
document.write("The modulus of " + num1 + " and " + num2 + " is " + mod + ".<br>");
 
// Js Mathematical Expressions
document.write("<h2>Js Mathematical Expressions</h2><br>");
var number;
document.write("Value after variable declaration is : " + number + ".<br>");
number = 5;
document.write("Initial value :" + number + ".<br>");
number++;
document.write("Value after increment is :" + number + ".<br>");
number += 7;
document.write("Value after addition is :" + number + ".<br>");
number--;
document.write("Value after decrement is :" + number + ".<br>");
var remainder = number % 3;
document.write("The remainder is :" + remainder + ".<br>");

// Cost of movie tickets
document.write("<h2>Cost of Movie Tickets</h2><br>");
var tickectPrice = 600;
var numberOfTickects = 5;
var totalCost = numberOfTickects * tickectPrice;
document.write("Total cost to buy " + numberOfTickects + " tickets to a movie is " + totalCost + " PKR.<br>");
 
// Multiplication table of 4
document.write("<h2>Multiplication Table of 4</h2><br>");
var tableNumber = 4;
document.write("Multiplication table of " + tableNumber + ":<br>");
for (var i = 1; i <= 10; i++) {
    var result = tableNumber * i;
    document.write(tableNumber + " x " + i + " = " + result + "<br>");
}

// Temperature conversion
 document.write("<h2>Temperature Conversion</h2><br>");
var celsius = 25;
var fahrenhiet = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenhiet + "°F.<br>");

var fahr = 70;
var cels = (fahr - 32) * 5/9;
document.write(fahr + "°F is " + cels + "°C.<br>");

// Shopping cart
var priceItem1 = 650;
var priceitem2 = 100;
var ordererdQuantityItem1 = 3;
var ordererdQuantityItem2 = 7;
var shippingCharges = 100;
var totalCostItem1 = priceItem1 * ordererdQuantityItem1;
var totalCostItem2 = priceitem2 * ordererdQuantityItem2;
var totalBill = totalCostItem1 + totalCostItem2 + shippingCharges;
document.write("<h2>Shopping Cart</h2><br>");
document.write("Price of item 1 is " + priceItem1 + ".<br>");
document.write("Quantity of item 1 is " + ordererdQuantityItem1 + ".<br>");
document.write("Price of item 2 is " + priceitem2 + ".<br>");
document.write("Quantity of item 2 is " + ordererdQuantityItem2 + ".<br>");
document.write("Shipping Charges " + shippingCharges + ".<br>");
document.write("Total cost of your order is " + totalBill + ".<br>");

// Percentage calculation

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Marksheet</h2><br>");
document.write("Total Marks: " + totalMarks + ".<br>");
document.write("Marks Obtained: " + marksObtained + ".<br>");
document.write("Percentage: " + percentage + "%.<br>");

// Currency conversion

var usd = 10;
var sar = 25;
var totalInPKR = (usd * 104.80) + (sar * 28);
document.write("<h2>Currency in PKR</h2><br>");
document.write("Total Currency in PKR: " + totalInPKR + ".<br>");

// Arithmetic operations
var num = 10;
var result = ((num + 5) * 10) /2;
document.write("<h2>Arithmetic Operations</h2><br>");
document.write("The result of the arithematic operations is " + result + ".<br>");

// Age calculator
var currentYear = 2024;
var birthYear = 2001;
var age = currentYear - birthYear;
document.write("<h2>Age Calculator</h2><br>");
document.write("Current Year : " + currentYear + ".<br>");
document.write("Birth Year : " + birthYear + ".<br>");
document.write("Your Age is : " + age + ".<br>");

// the Geometrizer
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<h2>The Geometrizer</h2><br>");
document.write("Radius of a circle : " + radius + ".<br>");
document.write("The circumference is : " + circumference + ".<br>");
document.write("The area is : " + area + ".<br>");

// The Lifetime Supply Calculator
var favSnack = "Chocolate Chip";
var currentAge = 23;
var maxAge = 65;
var estAmountPerDay = 3;
var totalNeeded = (maxAge - currentAge) * estAmountPerDay * 365;
document.write("<h2>The Lifetime Supply Calculator</h2><br>");
document.write("Favourite Snack : " + favSnack + ".<br>");
document.write("Current Age : " + currentAge + ".<br>");
document.write("Estimated Maximum Age : " + maxAge + ".<br>");
document.write("Amount of snacks per day : " + estAmountPerDay + ".<br>");
document.write("You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge + ".<br>");