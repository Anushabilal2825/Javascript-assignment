
// Chapter 8 : Concatenating text Strings
// Q1:
var first = "John";
var last = "Doe";
var full = first + " " + last;
alert("Full Name: " + full);
// Q2:
var msg = "Hello, from "
var city = "Karachi";
alert(msg + city);
// Q3:
var greeting = " Welcome to ";
var user = prompt("Enter your name:");
var site = "JavaScript World";
alert("Hello " + user + greeting + site);

// Chapter 9 : Prompts
// Q1:
var color = prompt("Enter your favorite color:");
alert("Your favorite color is " + color);
// Q2:
var age = prompt("Enter your age:");
alert("your ae is " + age);
// Q3:
var fruit = prompt("Enter your favorite fruit:");
alert("You like " + fruit);

// Chapter 10 : If statements
// Q1:
var num = 10;
if (num > 5){
    alert(num + " is greater than 5");
}
// Q2:
var marks = 75;
if (marks >= 50){
    alert("Pass");
}
// Q3:
var age = 20;
if (age >= 18){
    alert("Minor")
}

// Chapter 11 : Comparison Operators
// Q1:
var x = 15;
var y = 9;
if (x > y){
    alert(x + " is greater than " + y);
}
// Q2:
var a = 7;
var b = 12;
if (a == b){
    alert("Numbers are not equal.")
}
// Q3:
var p = 20;
var q = 25;
if (p <= q){
    alert(p + " is less than or equal to " + q);
}

// Chapter 12 : If…Else & Else If Statements
// Q1:
var marks = 85;
if (marks >= 90){
    alert("Grade A");
}else if (marks >= 70){
    alert("Grade B");
}else {
    alert("Grade C");
}
// Q2:
var age = 21;
if (age < 12){
    alert("Child");
}else if (age < 18){
    alert("Teen");
}else{
    alert("Adult");
}
// Q3:
var temp = 40;
if (temp > 30) {
    alert("It's too hot outside.");
}else if (temp > 20){
    alert("The wheather is warm.");
}else{
    alert("It's cold outside.");
}

// Chapter 13 : Testing Sets of Conditions
// Q1:
var num = 18;
if (num > 0 && num % 2 == 0){
    alert(num + " is positive and even.");
}
// Q2:
var marks = 77;
if (marks >= 50 && marks <= 100){
    alert("Valid marks.")
}
// Q3:
var num = 30;
if (num % 3 == 0 || num % 5 == 0){
    alert("Divisible by 3 or 5.");
}

// Chapter 14 : If Statements Nested
// Q1:
var age = 25;
var hasID = true;
if (age >= 18){
    if (hasID){
    alert("Allowed");
    
}else if (!hasID){
    alert("Not allowed");
}
}
// Q2:
var num = 6;
if (num > 0){
    if (num % 2 == 0){
        alert("Even")
    }
}
// Q3:
var marks = 85;
var extraCredit = true;
if ( marks >= 50){
    if (extraCredit){
        alert("Pass with extra credit")
}
}

// chapter 15 : Array
// Q1:
var fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
alert("Fruits: " + fruits);
// Q2:
var numbers = [1, 2, 3, 4, 5];
alert(numbers[0] + " & " + numbers[numbers.length - 1]);
// Q3:
var colors = ["Red", "Green", "Blue"];
alert(colors.join(", "));

// CHapter 16 :Array: Adding & Removing Elements
// Q1:
var fruits=["Apple","Banana","Orange"];
fruits.push("Mango");
alert(fruits);
// Q2:
var array = [1, 2, 3, 4, 5];
array.pop();
alert(array);
// Q3:
var colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");
colors.shift();
alert(colors);

// Chapter 17 : Array: Removing, Adding, & Extracting Elements
// Q1:
var arr = [1,2,3,4,5];
arr.splice(1,0,7);
alert(arr);
// Q2:
var arr = [1,2,3,4,5];
arr.splice(2,1);
alert(arr);
// Q3:
var arr = [1,2,3,4,5];
arr.slice(1,4);
alert(arr);

// Chapter 18 : For Loop
// Q1:
for (var i = 1; i <= 5; i++){
    alert("Number: " + i);
}
// Q2:
var aArr=["a","b","c"];
for(var j=0;j<aArr.length;j++)
     alert(aArr[j]);
// Q3:
for(var k=1;k<=10;k++)
     if(k%2!==0) alert(k);

// chap 19 : for loops: flags,boolans and break
// Q1:
var ax=[2,4,-1,5];
for(var i1=0;i1<ax.length;i1++){
     if(ax[i1]<0){
         alert("neg");
          break; 
} 
}
// Q2:
var a2=[1,2,3];
var flag=false;
for(var i2=0;i2<a2.length;i2++){
     if(a2[i2]%2==0)
     flag=true;
} 
alert(flag);
// Q3:
var a3=[10,40,60];
for(var i3=0;i3<a3.length;i3++){
 if(a3[i3]>50){
    alert("over 50");
    break;
 } 
}

// chap 20 : for loops nested
// Q1:
for(var a1=1;a1<=3;a1++){
 for(var b1=1;b1<=5;b1++){
     alert(a1*b1);
    } 
}
// Q2:
var two=[[1,2],[3,4]];
for(var r=0;r<two.length;r++){
 for(var c1=0;c1<two[r].length;c1++){
     alert(two[r][c1]);
 } 
}
// Q3:
var A=[1,2],B=[3,4];
for(var i4=0;i4<A.length;i4++){
for(var j4=0;j4<B.length;j4++){
     alert(A[i4]+B[j4]);
    } 
}

// chap 21 : Changing case 
// Q1:
var s="hello";
alert(s.toUpperCase());
// Q2:
alert(s.toLowerCase());
// Q3:
alert(s.charAt(0).toUpperCase()+s.slice(1));

// chap 22: Strings: measuring length and extracting parts
// Q1:
var ss="javascript";
alert(ss.length);
// Q2:
alert(ss.slice(0,3));
// Q3:
alert(ss.slice(-3));

// chap 23: Finding segments of strings
// Q1:
var tx="this is test";
alert(tx.indexOf("test"));
// Q2:
alert(tx.lastIndexOf("t"));
// Q3:
alert(tx.includes("is"));

// chap 24: finding a character at a location
// Q1:
var t2="coding";
alert(t2.charAt(2));
// Q2:
alert(t2[t2.length-1]);
// Q3:
alert(t2.charAt(Math.floor(t2.length/2)));

// chap 25: replacing characters
// Q1:
var line="i love coding";
alert(line.replace("coding","javascript"));
// Q2:
alert(line.replaceAll("o","*"));
// Q3:
alert(line.replace("o","0"));