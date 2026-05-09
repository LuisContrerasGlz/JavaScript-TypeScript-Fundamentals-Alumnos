// comparacion entre function tradicional y arrow function

// FUNCIÓN TRADICIONAL

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

/* NOTAS:
- function es la forma clásica
- TypeScript permite tipar:
  parámetros y retorno
*/


// ARROW FUNCTION BÁSICA

const addArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(addArrow(2, 3));

/* NOTAS:
- => define una arrow function
- normalmente se guarda en const
- parámetros y retorno pueden tiparse
*/


// RETURN IMPLÍCITO

const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 4));

/* NOTAS:
- si hay una sola línea:
  puedes omitir {}
  y omitir return

- el valor se retorna automáticamente
*/


// UN SOLO PARÁMETRO

const square = (num: number): number => num * num;

console.log(square(5));

/* NOTAS:
- si hay un solo parámetro:
  los paréntesis son opcionales

ejemplo válido:
num => num * num

pero normalmente en TS se dejan ()
para mejor claridad
*/


// SIN PARÁMETROS

const getRandom = (): number => Math.random();

console.log(getRandom());

/* NOTAS:
- si no hay parámetros:
  debes usar ()
*/


// ARROW FUNCTION COMO CALLBACK

const numbers: number[] = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);

/* NOTAS:
- MUY usadas en:
  map
  filter
  reduce
  forEach

- muy comunes en Playwright y frontend moderno
*/


// FILTER CON ARROW FUNCTION

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

/* NOTAS:
- filter devuelve elementos
  que cumplan la condición
*/



/* NOTAS:
- arrow functions NO tienen su propio this
- heredan this del contexto exterior

- esto evita muchos problemas
  en callbacks async
*/


/* NOTAS:
function tradicional:
- this cambia según cómo se llama

arrow function:
- this se hereda

por eso arrow functions son muy usadas
en código moderno
*/


/* RESUMEN PRÁCTICO

ARROW FUNCTIONS:
- sintaxis moderna y corta
- usan =>
- pueden tener return implícito
- muy usadas en callbacks
- heredan this automáticamente

MUY COMUNES EN:
- Playwright
- React
- Node.js
- arrays methods
- async code

REGLA SIMPLE:
- funciones pequeñas/callbacks → arrow
- lógica compleja o métodos clásicos → function

*/