
// Reduce Method(it return a single value)...

let arr2 = [1, 4, 56, 76, 54,33,221,1]

let arr3 = arr2.reduce((m, m1)=>{
    return m*m1;
})

console.log(arr3)

// To find total sum of an array using reduce ...
let arr4 = [1,3,45,33,221,23,55,13,41,44,554];
const sum=(x, y)=>{
    return x+y;

}

let total = arr4.reduce(sum);
console.log('Sum of all the elements of the array = ',total)