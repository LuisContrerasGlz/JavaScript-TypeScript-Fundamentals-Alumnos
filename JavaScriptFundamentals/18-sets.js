// CREACIÓN DE UN SET


const mySet = new Set();

/* NOTAS:
- Set es una estructura que almacena valores únicos
- No permite duplicados
- Similar a un array pero sin índices
*/


// MÉTODOS BÁSICOS


// add: agrega un valor
mySet.add(1);

// delete: elimina un valor
mySet.delete(1);

// has: verifica si existe un valor (true/false)
mySet.has(1);

// size: cantidad de elementos
console.log(mySet.size);

/* NOTAS:
- add() → agrega elementos
- delete() → elimina elementos específicos
- has() → útil para validaciones rápidas
- size → propiedad (no es función)
*/

// ITERAR UN SET


for (const value of mySet) {
  console.log(value);
}

/* NOTAS:
- Set es iterable
- Se usa for...of para recorrerlo
- No hay índices, solo valores
*/


// ==============================
// LIMPIAR EL SET
// ==============================

mySet.clear();

/* NOTAS:
- clear() elimina TODOS los elementos
*/


// ==============================
// CONVERTIR SET A ARRAY
// ==============================

// Forma 1: Array.from
const arr1 = Array.from(mySet);

// Forma 2: Spread operator
const arr2 = [...mySet];

console.log(arr1, arr2);

/* NOTAS:
- Array.from() convierte estructuras iterables a arrays
- [...] (spread) hace lo mismo de forma más moderna
*/


/* ==============================
RESUMEN PRÁCTICO

- Set → colección de valores únicos
- No tiene índices
- Métodos principales:
  add, delete, has, clear
- Propiedad importante:
  size
- Se recorre con for...of
- Se puede convertir a array con:
  Array.from() o [...set]

USO COMÚN:
- eliminar duplicados
- validaciones rápidas
- manejar listas únicas

============================== */