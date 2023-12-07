const prompt = require('prompt-sync')();

// While loops...

let x = prompt("Enter the value of n-: ");
x = Number.parseInt(x);

let i = 1;
while(i <= x){
  console.log(i);
  i++;
}

// Do While loop...

let y = prompt("Enter the value of n-: ");
y = Number.parseInt(y);
let sum = 1;
let z = 1;
do{
  sum = sum * z;
  z++;
  
} while(z<=y);

console.log("The factorial of " + y + " is " + sum);

// while loop practice

let a = prompt("enter the value -: ");
a = Number.parseInt(a);
let sums = 0;
let k = 1;
 while(k <= a){
   sums += k;
   k++;
 }
console.log("The sum of first " + a + " numbers is " +sums);