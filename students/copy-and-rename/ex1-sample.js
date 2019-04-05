
1.	Write a JavaScript program that accept two integers and display the larger.

var num1, num2;
num1 = 5;
num2 = 1;                                         
if(parseInt(num1) > parseInt(num2)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values " + num1 + " and " + num2 + " are equal.");
  }
 }

2.	Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
Sample numbers : 3, -7, 2 
Output : The sign is - 

function integer (a,b,c){
  const multiplicationOfProducts = a * b * c;
if (multiplicationOfProducts < 0) {
 console.log('The sign is ', multiplicationOfProducts);
} else {
  console.log('The sign is +.');
}
}
integer(3, -7, 2)

3.	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 

var points = [0, -1, 4];
points.sort(function(a, b){return b-a}); 
alert(points);

4.	Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 

var maxValue = Math.max(-5, -2, -6, 0, -1);
alert(maxValue);

5.	Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even"


for (var x=0; x<=15; x++) {
  if (x === 0) {
          console.log(x +  " is even");
  }
  else if (x % 2 === 0) {
          console.log(x + " is even");  
  }
  else {
          console.log(x + " is odd");
  }
  alert(for);
}