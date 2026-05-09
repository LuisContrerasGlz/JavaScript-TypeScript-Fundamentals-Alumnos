/*
La sintaxis const nombre = (params) => expresion.
Por qué no necesitas return ni {} cuando la función es una sola expresión.
Cuándo conviene una arrow function vs. una function tradicional.
*/

// Versión clásica:
function isSuccessCode1(code: number): boolean { 
    return code >= 200 && code < 300; 
}
 
// Versión arrow (más corta):
export const isSuccessCode = (code: number): boolean =>
  code >= 200 && code < 300;
 
export const isClientError = (code: number): boolean =>
  code >= 400 && code < 500;
 
console.log(`200 es éxito: ${isSuccessCode(200)}`);
console.log(`404 es éxito: ${isSuccessCode(404)}`);
console.log(`404 es error de cliente: ${isClientError(404)}`);

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


// THIS EN ARROW FUNCTIONS

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
}

const person = new Person("Luis");

person.printNameArrow();

/* NOTAS:
- arrow functions NO tienen su propio this
- heredan this del contexto exterior

- esto evita muchos problemas
  en callbacks async
*/


// DIFERENCIA IMPORTANTE

class Example {
  value = "hello";

  normalFunction() {
    setTimeout(function () {
      console.log(this.value);
    }, 100);
  }

  arrowFunction() {
    setTimeout(() => {
      console.log(this.value);
    }, 100);
  }
}

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