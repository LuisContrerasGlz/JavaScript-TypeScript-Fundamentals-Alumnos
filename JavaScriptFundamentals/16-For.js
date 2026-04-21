
// FOR CLÁSICO (con índice)

const arr1 = [1, 2, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

/* NOTAS:
- i empieza en 0 (primer índice)
- i < arr.length evita salirnos del array
- i++ incrementa en cada iteración
- arr[i] accede al valor en esa posición
*/

// FOR...OF (recorre valores)


const arr2 = [4, 5, 6];

for (let value of arr2) {
  console.log(value);
}

/* NOTAS:
- Recorre directamente los valores
- No necesitas índice
- Más limpio y moderno para arrays
*/

// FOR...OF con STRING

const str = "hello";

for (let value of str) {
  console.log(value);
}

/* NOTAS:
- Los strings también son iterables
- Se recorren carácter por carácter
*/


// FOR...OF con entries() (índice + valor)


const arr3 = [1, 2, 3, 4];

for (let [i, value] of arr3.entries()) {
  console.log(i, value);
}

/* NOTAS:
- entries() devuelve pares [índice, valor]
- destructuring [i, value] separa ambos
- útil cuando necesitas índice y valor
*/

/* RESUMEN PRÁCTICO

for clásico → cuando necesitas control total del índice
for...of → cuando solo necesitas los valores
entries() → cuando necesitas índice + valor
*/