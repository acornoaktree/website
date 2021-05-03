var a = 10, b = 2;

function myAwesomeFunction(){
    a = a + 1;
    b = b + 1;
    
    document.getElementById("change").innerHTML = "This is how much money you have: $" + a;
    document.getElementById("headerChange").innerHTML = "This is how much money you owe: $" + b;
    document.getElementById("result").innerHTML = "This is how much money you have left: $" + (a - b);
}

function myAwesomeFunction2(){
    a = 40;
    b = 50;
}