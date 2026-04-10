// Logical operators 

const a = true
const b = false

console.log(a && b) // false, AND
console.log(a || b) // true, OR
console.log(!a) // false, NOT
console.log(!b) // true, NOT

// Short-circuit evaluation
const c = a || (b && a) // true, because a is true, so it doesn't evaluate the rest
const d = b && (a || b) // false, because b is false, so it doesn't evaluate the rest

console.log(c) // true
console.log(d) // false 