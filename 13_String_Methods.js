const prompt = require('prompt-sync')();

// String Methods...

let name = "Murtaza Bazaz";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log("Short Form of your name -: " + name.slice(0, 1) + name.slice(8, 9));
console.log(name.slice(0, 3) + name.slice(8, 11));
console.log(name.slice(1));


// Replace method..
let name2 = name.replace("Bazaz", "Sajad Bazaz");
console.log(name2)
console.log(name2.replace("Sajad", "Ahmad"));

let qoute = 'to be or not to be'
console.log(qoute) //before replacing
console.log("After updating -: ", qoute.replaceAll('be', 'code') + ".");

// Concat method.. 

let friend = 'Kaleem';
console.log(name.concat(" is a friend of ", friend, "."))

let ak = 'Hello!, my name is Murtaza Bazaz.';
let b = 'good to know you';

console.log(`${ak}  ${b}`);
console.log(ak.concat(b))
console.log(ak + b);

//Trim method...
friend2 = '   kamran  ';
console.log(friend2);
console.log(friend2.trim());
console.log(friend2.trimEnd());
console.log(friend2.trimStart());

// Used methods in string..

let na = prompt('Enter the summer capital of kashmir-: ');

if (na.includes('nagar')) {
  console.log('Correct Answer..');
}
else {
  console.log("wrong")
}

// Using IndexOf method to find the position of the string..

let ex = 'hello how are you, Murtaza, are you here for the job or are';
console.log(ex.length);
console.log("The Index no of Word murtaza is = " + ex.indexOf('Murtaza'));

let firstoccurance = ex.indexOf('are');
console.log(firstoccurance);

let secondoccurance = ex.indexOf('are', firstoccurance + 1)
console.log(secondoccurance)

let thirdoccurance = ex.indexOf('are', secondoccurance + 1);
console.log(thirdoccurance);


// quickquiz use a for loop to print a string...

let a = 'Hello!, my name is Murtaza Bazaz.'
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
