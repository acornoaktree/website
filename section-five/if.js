function myAwesomeFunction()
{
    if (a = "mars")
    {
        document.getElementById('p').innerHTML = "paragraph CHANGED!";
    }
    else if ((a === 1) && (b == 2))
    {
        document.getElementById('p').innerHTML = "Pineapple";
    }
    else
    {
        document.getElementById('p').innerHTML = "Hahaha banana";
    }

}
var c = 3;
var b = 3;
var a = "mars";

var apple = new Object(); 
  apple.weight = 1;
  apple.color = "green"
  apple.taste = 90;
  apple.size = 60;

var ball = new Object();
  ball.weight = 1;
  ball.color = "orange";
  ball.bounce = 60;
  ball.size = 40;
  
  function myAwesomeFunction()
  {
      document.getElementById('p1').innerHTML = apple.weight;
      document.getElementById('p2').innerHTML = apple.color;
      document.getElementById('p3').innerHTML = apple.taste;
      document.getElementById('p4').innerHTML = apple.size;

      document.getElementById('p5').innerHTML = ball.weight;
      document.getElementById('p6').innerHTML = ball.color;
      document.getElementById('p7').innerHTML = ball.bounce;
      document.getElementById('p8').innerHTML = ball.size;


  }