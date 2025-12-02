// declare and initialize an empty array
var multiArray = [
    [],
    [],
    []
]
console.log(multiArray);

// Array representing the following matrix
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
 ]
for (var i = 0; i < matrix.length; i++){
    document.write(matrix[i] + "<br>")
}
document.write("<br>")

// print numeric counting from 1 to 10
for (var i =1; i <= 10; i++){
    document.write(i + "<br>")
}
document.write("<br>")
// print multiplication table of any number 
var num = +prompt("Enter a number to show its multiplication table:")
var lenght = +prompt("Enter length for table:")
document.write("Multiplication table of " +  num  + " length " + lenght + "<br>")
for (var i = 1; i <= lenght; i++){
document.write(num + " x " + i + " = " + (num * i) + "<br>")
}
document.write("<br>")
// print items of an array
var friuts = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < friuts.length; i++){
    document.write(friuts[i] + "<br>")
}
document.write("<br>")
document.write("Element at index 0 is " + friuts[0] + "<br>")
document.write("Element at index 1 is " + friuts[1] + "<br>")
document.write("Element at index 2 is " + friuts[2] + "<br>")
document.write("Element at index 3 is " + friuts[3] + "<br>")
document.write("Element at index 4 is " + friuts[4] + "<br>")

// print various series
var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var reverseCounting = [10,9,8,7,6,5,4,3,2,1]
var even = [0,2,4,6,8,10,12,14,16,18,20]
var odd = [1,3,5,7,9,11,13,15,17,19]
var series = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"]
document.write("<h3>Counting : </h3><br>")
for (var i = 0; i < counting.length; i++){
    document.write(counting[i] + " , " )
}
document.write("<h3>Reverse Counting : </h3><br>")
for (var i = 0; i <reverseCounting.length; i++){
    document.write(reverseCounting[i] + " , ")
}
document.write("<h3>Even : </h3><br>")
for (var i = 0; i < even.length; i++){
    document.write(even[i] + " , ")
}
document.write("<h3>Odd : </h3><br>")
for (var i = 0; i < odd.length; i++){
    document.write(odd[i] + " , ")
}
document.write("<h3>Series : </h3><br>")
for (var i = 0; i < series.length; i++){
    document.write(series[i] + " , ")
}
document.write("<br><br>")

// search item in an array
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var found = false;
for (var i = 0; i <A.length; i++){
    if (A[i] === search){
        found = true;
        break;
    }
}
if (found === true){
    document.write(search + " is available at index " + i + " in our bakery.")
} else {
    document.write("We are sorry. " + search + " is not available in our bakery.")
}
document.write("<br><br>")
// find largest number in an array
var arr = [24,53,78,91,12]
var largest = arr[0];
for (var i = 0; i < arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i];
    }
}
document.write("Array items : " + arr + "<br>")
if (largest !== null){
    document.write("The largest number is " + largest + "<br>")
}
document.write("<br><br>")
// find smallest number in an array
var array = [24,53,78,91,12]
var smallest = array[0];
for (var i = 0; i < array.length; i++){
    if (array[i] < smallest){
        smallest = array[i];
    }
}
document.write("Array items : " + array + "<br>")
if (smallest !== null){
    document.write("The smallest number is " + smallest + "<br>")
}
document.write("<br><br>")
// print multiples of 5 ranging 1 to 100
var multiples = [];
var j = 0;
for (var i = 1; i <= 100; i++){
    if (i % 5 === 0){
        document.write(i + " , ")
    }
}