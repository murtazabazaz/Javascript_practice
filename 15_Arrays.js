const prompt =  require( 'prompt-sync')();

// Introduction to Arrays...
let a = [1, 'hi', true, 22.2, null, undefined, {name: 'Saurabh'}];

for ( let i=0; i<a.length; i++) {
  
console.log(a[i])
    
}
console.log(a)
console.log(typeof a)

// changing the value of an array...

a[1] = 'hello'
console.log(a)
 // adding new value to the array...

a[7]= 121
console.log('After adding new value to the array -: \n ', a)