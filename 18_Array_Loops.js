// Using loops in Arrays...

// Normal for loop...

let a = [1, 4, 5, 3, 2, 4, 7, 6];

for(let i =0;i<a.length;i++){
    console.log(a[i]);
}

// For each loop...

let num = [2,4,3,2,6,10];

num.forEach((ab) =>{
    console.log('\nSquare root of array elements using for each loop -: ', ab*ab)
})

// for each to calculate sum of items

var cost = [10,20,5];
var sum = 0
cost.forEach((tc)=>{
    sum = sum + tc
    console.log('total cost = ', sum);
});

// Array.from...

let name = 'murtaza';
let arr = Array.from(name);
console.log(name, typeof name)
console.log(arr, typeof arr)

// for of loop...

let b = [22,33,44,55,5667,666];
for(let i of b){
    console.log('Using for of loop to print elements of an array-: ',i);
}

// for in loop...

let c = [2,23,30,45,59,62];

for(let j in c){
    console.log('For in loop prints the keys (index no) of elements -:  index no = ' + j +' value = ' + c[j])
}