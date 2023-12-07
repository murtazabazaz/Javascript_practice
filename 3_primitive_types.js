//Primitive Data types in javascript(nn bb ss u)

let a = null //null type.
let b = 77 //number type.
let c = true //boolean type.
let d = BigInt("567") + BigInt("3") //bigint type.
let e = "murtaza" //string type.
let f = Symbol("I am a nice symbol") //symbol type.
let g = undefined //undefined type.
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

//(Non Primitive data types) -> objects in javascript..

const murtaza = {
"name": "murtaza bazaz",
"age": 23,
  "roll": 27,
  "cgpa": 7.8
}
console.log(murtaza["name"])