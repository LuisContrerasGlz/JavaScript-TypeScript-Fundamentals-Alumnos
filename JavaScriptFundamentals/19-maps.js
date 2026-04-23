// CREACIÓN DE MAP


const myMap = new Map();

/* NOTAS:
- Map es una estructura clave → valor
- A diferencia de objetos, las claves pueden ser cualquier tipo (número, string, objeto, etc.)
- Mantiene el orden de inserción
*/

// Crear Map con valores iniciales
const numberMap = new Map([
  [1, "one"],
  [2, "two"],
]);

// MÉTODOS BÁSICOS


// set: agrega o actualiza un valor
myMap.set(4, "four");

// delete: elimina por clave
myMap.delete(4);

// get: obtiene el valor por clave
myMap.get(1);

// has: verifica si existe una clave
myMap.has(1);

// size: cantidad de elementos
console.log(myMap.size);

/* NOTAS:
- set(key, value)
- get(key)
- has(key) → true/false
- delete(key)
- size → propiedad, no función
*/

// ITERAR MAP (KEY + VALUE)


for (const [key, value] of myMap) {
  console.log(key, value);
}

/* NOTAS:
- Map es iterable
- Devuelve pares [key, value]
- Se usa destructuring para separar
*/


// ITERAR SOLO KEYS


for (const key of myMap.keys()) {
  console.log(key);
}

/* NOTAS:
- keys() devuelve solo las claves
*/


// ITERAR SOLO VALUES


for (const value of myMap.values()) {
  console.log(value);
}

/* NOTAS:
- values() devuelve solo los valores
*/


// LIMPIAR MAP


myMap.clear();

/* NOTAS:
- clear() elimina todos los elementos
*/


// CONVERTIR MAP A ARRAY


const arr = Array.from(myMap);

console.log(arr);

/* NOTAS:
- Devuelve array de pares: [[key, value], ...]
- Útil para manipulación con métodos de arrays
*/


/* ==============================
RESUMEN PRÁCTICO

- Map → clave → valor (más flexible que objeto)
- Métodos principales:
  set, get, has, delete, clear
- Propiedad:
  size
- Iteración:
  for...of → [key, value]
  keys(), values()
- Conversión:
  Array.from(map)

DIFERENCIA CLAVE VS OBJETO:
- Map permite cualquier tipo de clave
- Mejor para colecciones dinámicas

============================== */