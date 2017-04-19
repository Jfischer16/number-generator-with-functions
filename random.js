var num1  = parseInt(prompt("Enter the 1st Number"));
var num2 = parseInt(prompt("Enter the 2nd Number"));

function randomNumber(a, b)
{

  if(a > b)
  {
    var randomNum = Math.floor(Math.random() * (a - b + 1)) + b;  
    alert(randomNum);
  }

  else
  {
    var randomNum = Math.floor(Math.random() * (b - a + 1)) + a;  
    alert(randomNum);
  }

}
var numArgument = randomNumber(num1, num2);