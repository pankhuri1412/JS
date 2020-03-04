// var name;
// prompt("what is your name?");
// document.write(name+"<br>");
// console.log(name);
// alert(name);
// document.write(document.baseURI+"<br>");
// document.write(document.title+"<br>");

// var pars = document.getElementsByTagName('p');
// document.write(pars + '<br/>');
// document.write(pars.length + '<br/>');

var a=6 , b=7;
console.log("Sum :"+ (a+b));
console.log(a>5 && a<5);
console.log(b>5 || b<5);
console.log(a!==5);
console.log(a === 5);
console.log(a!=5);

var msg = "hello..";
welcomeMsg(msg);
msg = "goodbyeee..";
welcomeMsg(msg);

function valueChange(value){    
document.getElementById("test").innerHTML = value;
console.log("console it!!!!");
}

function welcomeMsg(msg){
    console.log(msg);
}

function message(msg) {
    document.getElementById("output").innerHTML = msg + " event fired";
}

function displayOutput() {
    document.getElementById("demo").innerHTML = Date();
}

function displayOutput1Value(value) {
    document.getElementById("demo").innerHTML = value;
}