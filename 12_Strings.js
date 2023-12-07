const prompt = require('prompt-sync')();

// Introduction to Strings..

let name = "Murtaza";
console.log("Welcome, " + name);
console.log("Total number of characters in your name are = " + name.length);
console.log("the first letter of your name is = " + name[0]);
console.log("The last letter of your name is = " + name[name.length - 1]);
console.log(name.toUpperCase(name));
console.log(name.toLowerCase(name));
console.log(typeof name);

// Template Literals also known as string interpolation...

let Yourname = prompt("Enter your name -: ");
let FriendName = prompt("Enter your friend's name -: ")

let rel = `${FriendName} is a friend of ${Yourname} .`;
console.log(rel);

// Escape sequence characters...

let fruit = 'bana\'na'
console.log(fruit);
console.log(fruit.length);

let na = 'Hate\'s' //by using (\) we can include the single qoute in the string..
console.log(na)

console.log("\n  hello \n  How are you \n  I am fine") // using \n for going to new line ..

console.log("      , I am Murtaza \r Hello") //using \r to take hello to the starting point of the string..