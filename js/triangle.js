alert("Please read through the instructions carefully to avoid errors");
var sideOne=parseFloat(prompt("please enter length 1"));
var sideTwo=parseFloat(prompt("please enter length 2"));
var sideThree=parseFloat(prompt("please enter length 3"));
var lengthOne=[];
var lengthUno=lengthOne.concat(sideOne);
var lengthTwo=[];
var lengthDue=lengthTwo.concat(sideTwo);
var lengthThree=[];
var lengthTre=lengthThree.concat(sideThree)
if ((lengthUno==lengthDue) && (lengthUno==lengthTre) && (lengthDue==lengthTre));{
alert("Equilateral: All sides are equal");
}
else if((lengthUno==lengthDue) || (lengthDue==lengthTre)||(lengthTre==lengthUno));{
  alert("Isosceles: Exactly 2 sides are equal");
}
else if((lengthUno==lengthDue) || (lengthDue==lengthTre) || (lengthTre==lengthUno));{
  alert("Isosceles: Exactly 2 sides are equal");
}
else if ((lengthUno !=lengthDue) && (lengthUno!=lengthTre) && (lengthDue!=lengthTre));{
  alert("Scalene: No sides are equal");
}
else if(((lengthUno+lengthDue) <=lengthTre) || ((lengthDue+lengthTre) <=lengthUno) || ((lengthTre+lengthUno) <=lengthDue));{
  alert("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
}
else if ((lengthUno<=0) || (lengthDue<=0) || (lengthTre<=0));{
  alert("error:please enter values that are greater than zero");
}
else {
  alert("error:please read re-enter your values");
}
