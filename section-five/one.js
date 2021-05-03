const now = new Date()

document.write("<h2><u>Text<u><h2>")

document.write(now)

function hi() { 
    document.write("You have been Called")
}

function changeParagraph() {
    counter = counter + 1 
    document.getElementById("change").innerHTML= names;
    document.getElementById("headerChange").innerHTML= number * otherNumber * counter;

}

var number = 10;
var names = "Darragh";
var onOff = true;
var otherNumber = 12;
var counter = 0;
var x, y, z;
var a = 1, b = 2, c = 3, d = 4;
var car, speed = 100, name = "Awesome", color = "red";
var truck, speed = 80, name = "Truckersaurus", color = "orange";

function changeNumbers() {
    document.getElementById("changeNumbers").innerHTML= a + b;
}

