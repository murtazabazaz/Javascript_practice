var x="hello"
// using var for a specific block we will change the value globally also ,so using var can change the value of x..                   
console.log(x)
{
  var x=11
  console.log(x)
}
console.log(x)

//using let

let a="murtaza"
let b=88
let c=null

// by using let i can use block scoped function for a with value murtaza globally and value 99 for a specific block..
console.log(a)
{
  let a=99

console.log(a)
}
console.log(a)

//using const..

const admin="$murtaza"
//const admin=88 // throws an error because constant cannot be changed..
console.log(admin)