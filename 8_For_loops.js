const prompt = require('prompt-sync')();

// For loops... 
// Program to add first n natural numbers...

let x = prompt("enter the value-: ");
x = Number.parseInt(x);
let i = 0;
sum = 0;
for(let i = 1; i <= x; i++)
  {
    sum = sum+i;
  }
console.log("Sum of first " + x + " natural numbers is " + sum);

// Program to find factorial of a number...


let f = prompt("enter the value-: ");
f = Number.parseInt(f);
pro = 1;
for(let j = 1; j <= f; j++)
  {
    pro = pro * j;
  }
console.log("Factorial of first " + f + "  numbers is " + pro);



// For in loop example...  

let roll27 = {
  "Maths": 88,
  "Java": 46,
  "Graphics": 79,
  "Python": 98,
  "C++": 78
}
for(let a in roll27){
  console.log("Marks of roll number 27 in " + a + " = " + roll27[a] + '.')
}



//For of loop...

for(let b of 'Python'){
  console.log(b)
}