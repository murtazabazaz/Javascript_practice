const prompt = require('prompt-sync')();
// Functions..
//Using functions give average of two numbers..

function avgOfTwo(x, y) {
  return console.log("the average of two numbers is = ", +(x + y) / 2);
}

var a = prompt("Enter the first number: ");
a = Number.parseInt(a);
var b = prompt("Enter the second number: ");
b = Number.parseInt(b);

avgOfTwo(a, b);

// Functions practice...

function OnePlusAvg(a, b) {
  return (1 + (a + b) / 2);

}

var c = 20;
var d = 23;
var e = 12;

console.log("One plus average of a and d = ", +OnePlusAvg(c, d));
console.log("One plus average of d and e  = ", +OnePlusAvg(d, e));
console.log("One plus average of c and e = ", +OnePlusAvg(c, e));


// Arrow Function =>...

const sum = (y, z) => {
  return y + z;

}
console.log("Sum of these two numbers = ", +sum(21, 22));

// Arrow Function practice...
const avg = (l, k) => {
  return (l + k) / 2;
}
console.log("The average of these two = ", + avg(21, 22));

const hello = () => {
  console.log("hello how are you ? ");
  return "hi...";
}
hello();
let response = hello();
console.log(response);

//practice 2 Calculating Percentage of a Student ...

const percentage = (a, b, c, d, e) => {
  return ((a + b + c + d + e) / 500) * 100;
}

let a1 = prompt("Enter your marks for maths = ");
let b1 = prompt("Enter your marks for C++ = ");
var c = prompt("Enter your marks for Python = ");
var d = prompt("Enter your marks for Java = ");
var e = prompt("Enter your marks for Graphics = ");
a = Number.parseInt(a1);
b = Number.parseInt(b1);
c = Number.parseInt(c);
d = Number.parseInt(d);
e = Number.parseInt(e);
console.log("Your percentage is = ", +percentage(a1, b1, c, d, e) + "%.");

if (percentage(a1, b1, c, d, e) >= 40) {
  console.log("\n You passed the exam ...");

}
else {
  console.log("You failed the exam!");
}