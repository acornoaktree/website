var income =  12
var bankAccount = 0
var debt = 5

function myAwesomeFunction(){
    bankAccount = bankAccount + income;

    document.getElementById("headerChange").innerHTML = "This is how much money you owe: $" + debt
    document.getElementById("result").innerHTML = "This is how much money you have left: $" + (bankAccount - debt)
    bankAccount = bankAccount - debt;
    document.getElementById("change").innerHTML = "Bank account: $" + bankAccount
}

function myAwesomeFunction2(){
    document.getElementById("income").innerHTML = "This is your total income: $" + income
}

