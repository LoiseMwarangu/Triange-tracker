alert("Please read through the instructions carefully to avoid errors");
var sideOne=parseFloat(prompt("please enter length 1"));
var sideTwo=parseFloat(prompt("please enter length 2"));
var sideThree=parseFloat(prompt("please enter length 3"));
var lengthOne=[];
var lengthUno=lengthOne.push(sideOne);
var lengthTwo=[];
var lengthDue=lengthTwo.push(sideTwo);
var lengthThree=[];
var lengthTre=lengthThree.push(sideThree)
if ((lengthUno==lengthDue) && (lengthUno==lengthTre)){
alert("Equilateral: All sides are equal");
}
else if((lengthUno==lengthDue) || (lengthDue==lengthTre)|| (lengthTre==lengthUno)){
  alert("Isosceles: Exactly 2 sides are equal");
}
else if ((lengthUno !=lengthDue) && (lengthUno!=lengthTre) && (lengthDue!=lengthTre)){
  alert("Scalene: No sides are equal");
}
else if(((lengthUno+lengthDue) <=lengthTre) || ((lengthDue+lengthTre) <=lengthUno) || ((lengthTre+lengthUno) <=lengthDue)){
alert("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
}
 else {
alert("error:please re-enter your values");
}
