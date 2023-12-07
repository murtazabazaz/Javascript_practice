
const prompt = require('prompt-sync')(); //declare this on top of code

let a = prompt("your age?")
console.log(typeof a)
a = Number.parseInt(a) //coverting string into number..
console.log(typeof a)

console.log("Welcome");

if(a<0){
  console.log("invalid age for the driving test");
}
  else if(a<18 && a>=16){
    console.log("you are  eligible for the Learner liscense test");
  }

  else if(a>=18 && a<=60)
  {
    console.log("you are are eligible for driving test");
  }

 else { 
  console.log("you are not eligible for the  liscense test because you are a senior citizen")
 }


// switch case :


let price = prompt("enter the product name for its price? ")
switch (price) {
  case "water": {
    const message = "Water is Rs 10";
    console.log(message);
    break;
  }
  case "cocacola": {
    const message = "Coke is Rs 35";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}

//practice switch case-:
let dic = prompt("Enter the word-: ");
switch(dic){
  case "peace": {
    const meaning = "Peace means societal friendship and harmony in the absence of hostility and violence"
    console.log(meaning);
    break;
  }
  case "war": {
    const meaning = "War is a conflict between two or more nations, usually between two countries, that is usually fought over a territory.";
    console.log(meaning);
    break;
  }
  default:{
    console.log(dic+ ' is not a word in the dictionary.');
  }
}

// Ternary Operations:
let marks = prompt("enter your marks? ");
console.log( (marks>=40? "Pass" : "Fail"))