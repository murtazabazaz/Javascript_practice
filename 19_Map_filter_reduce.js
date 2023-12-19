const prompt = require('prompt-sync')();
/*
// Map, Filter & Reduce (high order array methods.)..
function createarr(){


let a = [];
let size = prompt('Enter the size of array -: ');

for(let i=0;i<size;i++){
   a[i] = prompt('Enter elements of array -: ');
}
};

for(b in a){
    console.log('value at index = ', b +' is ' + a[b]);
}



// Map method(creates a new array instead of updting orginal array)...


let arr = [1,22,43,55];
let newarr = arr.map((value, index )=>{
    console.log(value, 'at index =' , index);
    return value + 2;
})

console.log('the updated array after map method -: ', newarr ,'\nOld array before using map method -: ', arr);

// Filter Method(creates a new array instead of updting orginal array)...

let a1 = [];
const s = prompt('enter size of array-: ');

for( let i=0;i<s;i++){
    a1[i]=prompt('enter the elements -: ')
}

var b = prompt('enter the number you want the values to be less than -: ');

let n  = a1.filter((v)=>{
    return v<b;
})
console.log('There are total '+ n.length + ' elements less '  + b + ' = ' +n)
*/
// filter example...
//Code to search name in an array using filter method

let a2 = [];
const si = prompt('enter size of array-: ');

for( let i=0;i<si;i++){
 a2[i]=prompt('enter the name -: ')
}

var bw = prompt('enter the name you want to search-: ');

let filteredNames = a2.filter((name)=> name == bw);


    if(filteredNames.length>0){
        return console.log('The Name '+ bw + ' matches ' + filteredNames[0] + ' in the array.')
    }
    
       else{

           console.log('name not found!!!')
       }
       
       
   
