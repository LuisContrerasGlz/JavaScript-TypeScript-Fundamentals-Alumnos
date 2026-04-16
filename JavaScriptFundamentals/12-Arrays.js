// DECLARACIÓN DE ARRAYS

// Array con diferentes tipos de datos
const arr = [1, 2, 3, true];

// Crear un array vacío con tamaño definido
// NOTA: No contiene valores, sino espacios vacíos (empty slots)
const arrEmpty = new Array(5);
console.log(arrEmpty); // [ <5 empty items> ]

// Crear un array a partir de un string
// NOTA: Cada carácter se convierte en un elemento del array
const arr2 = Array.from("hello");
console.log(arr2); // ['h', 'e', 'l', 'l', 'o']

// ACCESO Y MODIFICACIÓN

// Modificar un valor por índice
arr2[0] = "y";
console.log(arr2); // ['y', 'e', 'l', 'l', 'o']

// Obtener el último elemento
// NOTA: Forma estándar usando length - 1
console.log(arr2[arr2.length - 1]); // 'o'

// Agregar un valor en una posición mayor al tamaño actual
// NOTA: Esto genera "huecos" (empty slots) en el array
arr2[arr2.length + 5] = "test";
console.log(arr2);

// MÉTODOS BÁSICOS (STACK / QUEUE)

// push: agrega un elemento al final del array
arr2.push(4);

// pop: elimina el último elemento
arr2.pop();

console.log(arr2);

// shift: elimina el primer elemento
arr2.shift();
console.log(arr2);

// unshift: agrega un elemento al inicio
arr2.unshift("new");
console.log(arr2);

// BÚSQUEDA EN ARRAYS

// indexOf: devuelve el índice de la primera coincidencia
// NOTA: Si no lo encuentra, regresa -1
console.log(arr2.indexOf("o"));

// lastIndexOf: devuelve la última posición de un valor
const arr3 = Array.from("hello");
console.log(arr3.lastIndexOf("l")); // 3

// includes: verifica si existe un valor en el array
// NOTA: Más limpio que indexOf cuando solo necesitas true/false
console.log(arr3.includes("l")); // true

/* COMBINACIÓN DE ARRAYS

concat: une arrays y devuelve uno nuevo
NOTA: No modifica los arrays originales
*/
const arrCombined = arr.concat(arr3);
console.log(arrCombined);

/* CONVERSIÓN A STRING

join: convierte un array en string usando un separador
NOTA: Muy útil para logs, outputs o validaciones
*/
const str = arr.join("|");
console.log(str); // "1|2|3|true"