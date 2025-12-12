// Chapter 1 :Alerts
// Q1: 
alert("Welcome to JavaScript!")
// Q2:
let userName = prompt("Enter your Username:")
alert("Hello " + userName + ", welcome to JavaScript!")
// Q3:
let favColor = prompt("Enter your Fvaorite color:")
alert("Your favorite color is " + favColor)

// Chapter 2 : Variables for Strings
// Q1:
let firstName = "Jenny";
let lastName = "furnandez";
let fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");
// Q2:
var city = "New york";
alert("I live in " + city);
// Q3:
var hobby = "painting";
alert("My hobby is " + hobby);

// Chapter 3 : Variables for Numbers
// Q1:
var num1 = 4;
var num2 = 5;
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);
// Q2:
var marks = 84;
if ( marks >= 50)
{
    alert("Pass");
}else{
    alert("Fail");
}
// Q3:
var age = 23;
if (age < 18){

alert("I am " + age + " years old.");

}

// Chapter 4 : Variable Names: Legal & Illegal
// Q1:
var name1 = "John";
var $name = "Marry";
var _name = "Alice";
alert("Legal variable names: " + name1 + " , " + $name + " , " + _name);
// Q2:
// var 1name = "Invalid";
// var my-name = "Invalid";
// @name = "Invalid";
alert("Illegal variable names cannot be used in Javscript.");
// Q3:
var arr = ["name", "age", "city", "country", "hobby"];
alert("some examples of variable names: " + arr);

// Chapter 5 : Math Expressions: familiar Operators
// Q1:
var a = 10;
var b = 4;
var sum = a + b;
var difference = a - b;
alert("Sum: " + sum + ", Difference: " + difference);
// Q2:
var p = 5;
var d = 3;
var product = p * d;
var qoutient = p / d;
var remainder = p % d;
alert("Prodect: " + product + ", Qoutient: " + qoutient + ", Remainder: " + remainder);
// Q3:
var num = 8;
num++;
alert("After increment: " + num);

// Chapter 6 : Math Expressions: Unfamiliar Operators
// Q1:
var a = 10;
a++;
a--;
alert("Value: " + a);
// Q2:
var c = 5;
c += 3;
c -= 2;
alert("Value: " + c);
// Q3:
var h = 4;
h *= 2;
h /= 2;
alert("Value: " + h);

// Chapter 7 : Math Expressions: Eliminating Ambiguity
// Q1:
var a = 2;
var b = 3;
var c = 4;
var result = a + b * c;
alert("Result: " + result);
// Q2:
var x = (a + b * c -(a));
alert("Result: " + x);
// Q3:
var y = (((a+b)-c)*a (b));
alert("Result: " + y);
