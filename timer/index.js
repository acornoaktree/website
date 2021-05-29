var startTime 
var intervalId
var running = false
function start(){
    if (running === false ){
      startTime = new Date()
      intervalId = setInterval(updateTimer, 100)
      running = true
    }
    }



function stop(){
    clearInterval(intervalId)
    running = false
}

function updateTimer(){
    var timer = document.getElementById("timer")
    var now = new Date()
    var millisecondsPast = now.getTime() - startTime.getTime()
    timer.innerHTML = millisecondsPast / 1000
}
