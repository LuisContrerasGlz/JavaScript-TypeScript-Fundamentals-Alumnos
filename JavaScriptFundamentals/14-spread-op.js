// REFERENCIA (PROBLEMA)

// x es un array
const x = [1, 2, 3, 4];

// y NO es una copia, es una REFERENCIA al mismo array
const y = x;

// Modificamos y
y.push("hello");

// Ambos cambian porque apuntan al mismo lugar en memoria
console.log(x, y);

// Resultado:
// x: [1, 2, 3, 4, "hello"]
// y: [1, 2, 3, 4, "hello"]

/* NOTA IMPORTANTE:
En JavaScript, los arrays (y objetos) se asignan por referencia,
no por valor */

// SPREAD OPERATOR (SOLUCIÓN)

// x es un array
const x = [1, 2, 3, 4];

// y es una copia REAL (nuevo array en memoria)
const y = [...x];

// Modificamos y
y.push("hello");

// x NO cambia
console.log(x, y);

// Resultado:
// x: [1, 2, 3, 4]
// y: [1, 2, 3, 4, "hello"]

/* 
NOTA IMPORTANTE:
El spread operator (...) crea una copia superficial (shallow copy)
Es suficiente para arrays simples [...x] rompe la referencia y evita efectos secundarios
*/

/*
Combinar arrays:

El spread operator también se puede usar para combinar arrays de forma más legible.
En lugar de usar concat, podemos simplemente "expandir" ambos arrays dentro de uno nuevo.
*/

const arr1 = [1, 2];
const arr2 = [3, 4];

// Sin spread operator
const combined1 = arr1.concat(arr2);

// Con spread operator (más limpio)
const combined2 = [...arr1, ...arr2];

console.log(combined1); // [1, 2, 3, 4]
console.log(combined2); // [1, 2, 3, 4]

// Agregar elementos facilmente

const arr = [1, 2, 3];

const newArr = [...arr, 4];
console.log(newArr); // [1, 2, 3, 4]

// Copiar objetos

const user = { name: "Luis" };

const newUser = { ...user };
newUser.age = 30;

console.log(user); // { name: "Luis" }
console.log(newUser); // { name: "Luis", age: 30 }  

