/*
// Comparación
==
===
!=
!==

// Relacionales
<
>
<=
>=
*/

const a = 5
const b = "5"

console.log(a == b) // true, compara solo el valor (type coercion)
console.log(a === b) // false, compara valor y tipo
console.log(a != b) // false, compara solo el valor (type coercion)
console.log(a !== b) // true, compara valor y tipo

// Comparaciones relacionales
console.log(a < 10) // true
console.log(a > 3) // true
console.log(a <= 5) // true
console.log(a >= 6) // false    