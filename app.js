// Chapter 1
// Q1
alert ("My name is M.Ahmed");
alert ("My last name is Irfan");
alert ("My email is ahmed2006irfan@gamil.com");
alert ("My number is 0311-6548934");
alert ("My password is ******");
// Q2
alert ("You're learning JavaScript!");
// Q3
alert ("That's my 6th Assignment");


// Chapter 2
// Q1
var VariableName = "example";
// Q2
var Q2Variable;
Q2Variable = "Hello, world!";
// Q3
var teamName = "Web Development Team";
alert("Our team name is: " + teamName);
// Q4
var bestMan = "Charlie";
bestMan = "Tom";


// Chapter 3
// Q1
var caseQty;
// Q2
var caseQty;
caseQty = 144;
// Q3
var num = 9;
// Q4
var sum;
sum = 5 + 3;
// Q5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// value of ordertotal will be 110
console.log(orderTotal)
// Q6
var num = 5;
num = num + 3;


// Chapter 4
// Q1
var productCost = 3.45;
// Q2
var nameOfBand;
// Q3
var myNumber = 42;
// Q4
var johnDoe = "John Doe";
// Q5
// legal variables
var $price;
var firstName;
var num123;
// illegal variables
var 123num; 
var my-variable;
var Math;


// Chapter 5
// Q1
Modulus (%)
// Q2
var num = 20 % 6;
num = "2"
// Q3
var largeNum = 1000 * 2000;
// Q4
var variable1 = 10;
var variable2 = 5;
var result = variable1 - variable2;
// Q5
var Remainder = 17 % 4;
// Q6
var num1 = 5;
var num2 = 7;
var total = num1 * num2;
alert("The total of multiplication is: " + total);


// Chapter 6
// Q1
x += 1;
// Q2
var x = 100;
var y = --x;
// Q3
var x = 50;
var y = x++;
// value of y will be (50)
// Q4
var y = 50;
var z = --y; 
// value of z will be (49)
// Q5
var newNum = --num;
// Q6
var originalValue = num++;
// Q7
var myNum = 5;
myNum++;
alert("The new value is: " + myNum);


// Chapter 7
// Q1
var calculatedNum = 2 + (2 * 6);
// value of calculatedNum is (14)
// Q2
var calculatedNum = (2 + 2) * 6;
// value of calculatedNum is (24)
// Q3
var calculatedNum = (2 + 2) * (4 + 2);
// value of calculatedNum is (24)
// Q4
var calculatedNum = ((2 + 2) * 4) + 2;
// value of calculatedNum is (18)
// Q5
var cost = (2 + (2 * 4) + 10);
// Q6
var units = ((2 + 2) * 4) + 10;
// Q7
var pressure = (4 / 2) * 4;


// Chapter 8
// Q1
var num = "2" + "2";
// value of num will be ("22")
// Q2
var message = ("Hello," + "Dolly");
alert(message);
// value of message will be ("Hello,Dolly")
// Q3
alert("33" + 3);
// message displayed in alert box will be ("333")
// Q4
var p1 = "Pakistan";
var p2 = "Zindabad";
var message = p1 + " " + p2;
alert(message);
// Q5
var value = "The number is: " + 42;
// Q6
var firstName = "Ahmed";
var lastName = "Irfan";
var fullName = firstName + " " + lastName;


// Chapter 9
// Q1
var firstName = prompt("Enter first name");
// Q2
var country = prompt("Country?", "China");
// Q3
var yourName = prompt("Enter Your Name");
// Q4
var color = prompt("Please enter your favorite color", "BLack");
// Q5
var message = "Enter your favorite color";
var defaultResponse = "Black";
var userResponse = prompt(message, defaultResponse);
// Q6
var message = "Please enter your name:";
var defaultResponse = "Ahmed Irfan";
var userResponse = prompt(message, defaultResponse);
alert("Your response: " + userResponse);


// Chapter 10
// Q1
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City Of Lights");
}
// Q2
if (x === y) {
    var z = prompt("Please enter the value of z:");
}
// Q3
if (ZipCode === "10010") {
    alert("Karachi");
  } else {
    alert("Please write correct city");
}
// Q4
var x = 1;
if (x === 1) {
  x = 2;
}
console.log(x);