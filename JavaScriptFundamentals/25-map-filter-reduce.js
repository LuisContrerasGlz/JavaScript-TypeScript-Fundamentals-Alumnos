// MAP - transformar cada elemento del array

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

/* NOTAS:
- map recorre el array
- devuelve un nuevo array
- NO modifica el original
- se usa para transformar datos
*/


// MAP con objetos - extraer propiedades

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const names = users.map((user) => user.name);

console.log(names); // ["Alice", "Bob"]

/* NOTAS:
- muy común en APIs
- extraer campos específicos
*/


// REDUCE - acumular valores

const numbers2 = [1, 2, 3, 4];

const sum = numbers2.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10

/* NOTAS:
- reduce toma un acumulador (acc)
- recorre todo el array
- el segundo parámetro (0) es el valor inicial
- se usa para sumas, conteos, etc.
*/


// FILTER - filtrar elementos

const numbers3 = [1, 2, 3, 4, 5];

const evenNumbers = numbers3.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

/* NOTAS:
- filter devuelve un nuevo array
- solo incluye elementos que cumplan la condición
- NO modifica el original
*/


/* RESUMEN PRÁCTICO

map → transforma datos
filter → filtra datos
reduce → acumula datos

TODOS:
- devuelven nuevo array (excepto reduce que puede devolver cualquier cosa)
- no modifican el array original

USO REAL:
- APIs
- UI data handling
- automation data validation

*/