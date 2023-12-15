// Sort Method (upadtes the original array.)...

let a = [22, 121, 554, 765, 87, 32, 11];
a.sort(); // it sorts the array in alphabetical order.
console.log('Alphabetically sorted array-: ', a);

// use compare function to solve this ..
// sorting array in ascending order..

let compare = (a, b) => {
    return a - b;
}
a.sort(compare); //this will sort the array in ascending order..
console.log('\nAscending order array-: ', a);

// sorting array in descending order..

let comparedes = (a, b) => {
    return b - a;
}
a.sort(comparedes);
console.log('\nDescending order array-: ', a);

// Reverse Method(Changes the original array)...

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
arr.reverse();
console.log(arr);

// Splice Method(Changes the orginal array)...
let arra = [1, 2, 6, 4, 5]
console.log('array before updating using splice -: ', arra)
let deletedValues = arra.splice(2, 1, 3); // splice(index of the element, No of elements to be deleted, New elements)
console.log('array after updating using splice -: ', arra)
console.log(deletedValues) //return deleted item..

// Slice Method(doesn't change the original array instead creates a new one)...

const num = [1,2,3,5,66,8,86];
console.log('Array before using slice -: ', num)
let numUp = num.slice(1,5); //slice(index from start , index upto end( last element not included)).
console.log('Array after using slice -: ', numUp)