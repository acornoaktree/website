var income =  3500
var bankAccount = 2000
var debt = 0
var rent = 800
var car = 200
var food = 300
var entertainment = 200

debt = rent + car + food + entertainment;

function myAwesomeFunction(){
    bankAccount = bankAccount + income;

    document.getElementById("rent").innerHTML = "Rent per month = $" + rent + " Total rent $" + rent;
    document.getElementById("car").innerHTML = "Total car: $" + car;
    document.getElementById("food").innerHTML = "Total food: $" + food;
    document.getElementById("entertainment").innerHTML = "Total entertainment: $" + entertainment;
    document.getElementById("result").innerHTML = "This is how much money you have left: $" + (bankAccount - debt)
    bankAccount = bankAccount - debt;
    document.getElementById("change").innerHTML = "Bank account: $" + bankAccount
    rent = rent + 800;
    car = car + 200;
    food = food + 300;
    entertainment = entertainment + 200;
}

function myAwesomeFunction2(){
    bankAccount = bankAccount + 10;
    document.getElementById("headerChange").innerHTML = "This is how much money you owe: $" + debt
    document.getElementById("income").innerHTML = "This is your total income: $" + income
}

