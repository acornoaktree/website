window.onload = function load(){
    document.getElementById("one").addEventListener("click", number)
    document.getElementById("two").addEventListener("click", number)
    document.getElementById("plus").addEventListener("click", plus)
    document.getElementById("calculate").addEventListener("click", calculate)

}
function number(){
    console.log("number")
}
var operator ="none"

function numberInputted(event){
    console.log(event)
    var output = document.getElementById("output")
    output.innerHTML = 9
}


function plus(){
    console.log("plus")
}


function calculate(){
        console.log("calculate")
}


