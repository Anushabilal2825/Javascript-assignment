function getValue(value){
var input = document.getElementById("inputfield");
    input.value += value;
}

function clearAll(){
    var input = document.getElementById("inputfield");
    input.value = "";
}
function backSpace(){
    var input = document.getElementById("inputfield");
    input.value = input.value.slice(0,-1);
}

function equal(){
    var input = document.getElementById("inputfield");

    if(!input.value){
        input.value ="Syntax Error ";
    }else{
        input.value = eval(input.value);
    }
}
function exp (){
    var input = document.getElementById("inputfield");
    input.value = Math.exp(input.value);
}
function sqrt(){
    var input = document.getElementById("inputfield");
    input.value = Math.sqrt(input.value);
}
function ln(){
    var input = document.getElementById("inputfield");
    input.value = Math.log(input.value);
}
function sq(){
    var input = document.getElementById("inputfield");
    input.value = Math.pow(input.value,2);
}
function sin(){
    var input = document.getElementById("inputfield");
    input.value = Math.sin(input.value);
}
function cos(){
    var input = document.getElementById("inputfield");
    input.value = Math.cos(input.value);
}
function tan(){
    var input = document.getElementById("inputfield");
    input.value = Math.tan(input.value);
}
function plusMinus(){
    var input = document.getElementById("inputfield");
    input.value = input.value * -1;
}
