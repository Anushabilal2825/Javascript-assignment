// Literal notation
var studentNames = [];
console.log(studentNames);

// object notation
var studentNames = new Array();
console.log(studentNames);

// Declare and initialize strings array
var stringsArray = ["Purple","Blue","Green"];
console.log(stringsArray);

// Declare and initialize numbers array
var numbersArray = [3,7,10,8,6];
console.log(numbersArray);

// Declare and initialize boolean array
var booleanArray = [true,false,true,false];
console.log(booleanArray);

// Declare and initialize mixed array
var mixedArray = ["Hello",9,true,6.5,"Apple"];
console.log(mixedArray);

// Qualification in Pakistan
 var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
 console.log(qualification);
 
 document.write("<h2>Qualifications in Pakistan</h2>");
 document.write("1)" + qualification[0] + "<br>");
 document.write("2)" + qualification[1] + "<br>");
 document.write("3)" + qualification[2] + "<br>");
 document.write("4)" + qualification[3] + "<br>");
 document.write("5)" + qualification[4] + "<br>");
 document.write("6)" + qualification[5] + "<br>");
 document.write("7)" + qualification[6] + "<br>");
 document.write("8)" + qualification[7] + "<br>");

// Students score
var studentNames = ["Micheal","John","Tony"];
console.log(studentNames);

var studentScores = [320,230,480];
console.log(studentScores);

var totalMarks = 500;
document.write("<h2>Student Scores and Percentages</h2>");

document.write("Score of " + studentNames[0] + " is " + studentScores[0] + ". Percentage : " + (studentScores[0]/totalMarks*100) + "%<br>");
document.write("Score of " + studentNames[1] + " is " + studentScores[1] + ". Percentage : " + (studentScores[1]/totalMarks*100) + "%<br>");
document.write("Score of " + studentNames[2] + " is " + studentScores[2] + ". Percentage : " + (studentScores[2]/totalMarks*100) + "%<br>");

// Colors array
document.write("<h3>Colors Array</h3><br>");
var Colors = ["red","green","blue","yellow"];
console.log(Colors);
document.write(Colors + "<br>");
// Add color in the beginning
var addColor = prompt("Which color you want to add in the beginning?");
Colors.unshift(addColor);
console.log(Colors);
document.write("After adding in the beginning : " + Colors + "<br>");
// Add color in the end
var addColorEnd = prompt("Which color you want to add in the end?");
Colors.push(addColorEnd);
console.log(Colors);
document.write("After adding in the end : " + Colors + "<br>");
// Add two more colors in the beginning
Colors.unshift("pink,purple");
console.log(Colors);
document.write("After adding two more colors in the beginning : " + Colors + "<br>")
// Delete the first color in the array
Colors.shift();
document.write("After deleting first color : " + Colors + "<br>");
console.log(Colors);
// Delete the last color in the array
Colors.pop()
document.write("After deleting last color : " + Colors + "<br>");
console.log(Colors);
// Add color at specific index
var indexAdd = prompt("At which index do you want add a color ?");
var colorName = prompt("Which color do you want ?");
Colors.splice(indexAdd, 5,colorName);
document.write("After adding color at specific index : " + indexAdd + Colors + "<br><br>")
console.log(Colors);
// Delete color from specific index
var indexDel = prompt("At which index do you want to remove color(s)?");
var howMany = prompt("How many colors do you want to remove ?");
Colors.splice(indexDel,howMany);
document.write("After removing colors from specific index : " + indexDel + Colors + "<br><br>")
console.log(Colors);

// Scores in Ascending order
var scoreOfStudents = [320,230,480,120];
var orderedScore = [120,230,320,480];
document.write("<h3>Array's sort method</h3>")
document.write("Score of students : " + "<br>" + scoreOfStudents + "<br>")
document.write("Ordered Score of students : " + "<br>" + orderedScore + "<br>")
console.log(orderedScore);

// Cities
var cities = ["Karachi","Quetta","Islamabad","Lahore","Multan"];
var selectedCities = [];
selectedCities =cities.slice(1,3);
document.write("Cities list : " + "<br>" + cities + "<br>");
document.write("Selected Cities : " + "<br>" + selectedCities + "<br>")
console.log(cities);

// create a single string
var arr = ["This","is","my","cat"]
document.write("Array : " + "<br>" + arr + "<br>")
var singleString = arr.join("")
document.write("String : " + "<br>" + singleString + "<br>")
console.log(arr);

// FIFO
document.write("<h3>FIFO</h3>")
var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");
document.write("<h3>Devices</h3>" + "<br>" + "Keyboard," + " Mouse," + " Printer," + " Monitor" + "<br>")
document.write("Out : " + "<br>" + queue.shift() + "<br>");
document.write("Out : " + "<br>" + queue.shift() + "<br>");
document.write("Out : " + "<br>" + queue.shift() + "<br>");
document.write("Out : " + "<br>" + queue.shift() + "<br>");


// LIFO
document.write("<h3>LIFO</h3>")
var stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");
document.write("<h3>Devices</h3>" + "<br>" + "Keyboard," + " Mouse," + " Printer ," + " Monitor" + "<br>")
document.write("Out : " + "<br>" + stack.pop() + "<br>")
document.write("Out : " + "<br>" + stack.pop() + "<br>")
document.write("Out : " + "<br>" + stack.pop() + "<br>")
document.write("Out : " + "<br>" + stack.pop() + "<br>")

// Dropdown
var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.write("<select>" + 
    "<option>" + manufacturers[0] + "</option>" +
    "<option>" + manufacturers[1] + "</option>" +
    "<option>" + manufacturers[2] + "</option>" +
    "<option>" + manufacturers[3] + "</option>" +
    "<option>" + manufacturers[4] + "</option>" +
    "<option>" + manufacturers[5] + "</option>" +
    "</select>"
    )
