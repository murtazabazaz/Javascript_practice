const prompt = require('prompt-sync')();

// Array Methods...

// toString Method..
let a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a, typeof a);

let b = a.toString(); //coverts array 'a' to string.
console.log(b);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);

}

// Join Method...

let c = a.join('_');
console.log(c, typeof c);

// pop Method..

let d = a.pop();
console.log(d, '\n' + a); // this method changes the array..

// push Method..

let e = a.push(89);
console.log(a);

// shift Method..

let f = a.shift(); // it 
console.log(a, '\n' + f); // removes the first element and returns the value.

// unshift Method...

let g = a.unshift(1);
console.log(a + '\nNew array length = ' + g);

// delete (this is an operator not method)..
console.log(a.length)
delete a[1];
console.log('delete',  a); //array size remains same
console.log(a.length)

// concat method..

let a1 = [1, 2, 3];
let b1 = [4, 5, 6];
let c1 = [7, 8, 9];

let newar = a1.concat(b1, c1);
console.log(newar, typeof newar);