const prompt = require('prompt-sync')();

// Map, Filter & Reduce (high order array methods.)..
function createarr(){


let a = [];
let size = prompt('Enter the size of array -: ');

for(let i=0;i<size;i++){
   a[i] = prompt('Enter elements of array -: ');
}
};
/*
for(b in a){
    console.log('value at index = ', b +' is ' + a[b]);
}

*/

// Map method(creates a new array instead of updting orginal array)...


let arr = [1,22,43,55];
let newarr = arr.map((value, index )=>{
    console.log(value, 'at index =' , index);
    return value + 2;
})

console.log('the updated array after map method -: ', newarr ,'\nOld array before using map method -: ', arr);