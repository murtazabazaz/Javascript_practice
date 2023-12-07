const prompt = require('prompt-sync')();

//check using logical operators wether age of a person lies b/w 10 & 20...

let age =  prompt("enter your age? ");
age = Number.parseInt(age)
if(age>=10 && age<=20){
  console.log("you are eligible as your age is " + age);
}
else{
  console.log("you are not eligible, because your age is " + age);
}

//Demonstrate the use of switch case statements in javascript...

let product = prompt("Enter product name-: ");
switch(product){
  case "mobile":{
    console.log(product + " range from Rs. 9999-149999.")
    break;
  }
  case "tablet": {
    console.log(product + " range from Rs. 20000-89000.")
    break;
  }
  case "laptop": {
    console.log(product + " range from Rs. 200000-500000.")
    break;
  }
    default: {
      console.log("Sorry," + product + " is not a product, we have.")
}
}

// Check wether a number is divisble by 2 & 3..

let num1 = prompt("Enter the number -: ");
num1 = Number.parseInt(num1);

if(num1%2==0 && num1%3==0)
{
  console.log("The number is divisible by 2 & 3.")
}
else{
  console.log("The number is not divisible by 2 & 3.")
}

// Check wether a number is divisble by 2 or 3..

let num = prompt("Enter the number -: ");
num = Number.parseInt(num);

if(num%2==0 || num%3==0)
{
  console.log("The number is divisible by 2 or 3.")
}
else{
  console.log("The number is not divisible by 2 or 3.")
}

//Using ternary operator check if the student has failed or passed the exam..

let marks = prompt("Enter your marks-: ");
marks = Number.parseInt(marks);
console.log(marks>=33? "you passed":"you failed");