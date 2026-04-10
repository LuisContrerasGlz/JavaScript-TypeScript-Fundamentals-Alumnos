// Primitive data types
const a = 10 // number
const b = "Hello" // string
const c = true // boolean
const d = null // null
const e = undefined // undefined

// Not used as much, but still a primitive data type
const f = Symbol("id") // symbol
const bigInt = 9007199254740991n // bigInt

// Reference data types
const g = { name: "Luis", age: 30 } // object
const h = [1, 2, 3] // array
const i = function() { console.log("Hello") } // function

console.log(typeof a) // number
console.log(typeof b) // string
console.log(typeof c) // boolean
console.log(typeof d) // object (this is a quirk in JavaScript)
console.log(typeof e) // undefined
console.log(typeof f) // symbol
console.log(typeof g) // object
console.log(typeof h) // object (arrays are objects in JavaScript)
console.log(typeof i) // function   
