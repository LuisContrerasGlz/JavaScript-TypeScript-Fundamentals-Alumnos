// SLICE vs SPLICE

// Array base
const arr = [1, 2, 3, true];
const arr2 = Array.from("hello");

// SLICE (NO modifica el array original)

// slice(inicio, fin) NOTA: El índice final NO se incluye
const arrSlice = arr.slice(1, 3);

console.log(arrSlice); // [2, 3]

// IMPORTANTE: slice NO modifica el array original
console.log(arr); // [1, 2, 3, true]

// SPLICE (SÍ modifica el array original)

// splice(inicio, cantidad), Elimina elementos del array original

const arrSplice1 = arr.splice(1, 1);

console.log(arrSplice1); // [2]

// IMPORTANTE: splice modifica el array original
console.log(arr); // [1, 3, true]

// OTRO EJEMPLO DE SPLICE

// Reiniciamos el array para evitar efectos acumulados
const arrReset = [1, 2, 3, true];

// Eliminamos 2 elementos desde el índice 1
const arrSplice2 = arrReset.splice(1, 2);

// NOTA: splice devuelve los elementos eliminados
console.log(arrSplice2); // [2, 3]

// Y el array original queda modificado
console.log(arrReset); // [1, true]