// FUNCIÓN SUM (NORMAL → ARROW)

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => {
  return a + b;
};

// versión más corta (return implícito)
let sum3 = (a, b) => a + b;

/* NOTAS:
- Arrow function permite omitir return si es una sola línea
- Más limpia para operaciones simples
*/

// FUNCIÓN isPositive (NORMAL → ARROW)

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

/* NOTAS:
- Perfecta para validaciones simples
- Muy usada en filtros (filter)
*/

// FUNCIÓN randomNumber (NORMAL → ARROW)

function randomNumber() {
  return Math.random();
}

let randomNumber2 = () => {
  return Math.random();
};

// versión corta
let randomNumber3 = () => Math.random();

/* NOTAS:
- Si no hay parámetros → ()
- También puede simplificarse a una sola línea
*/

// EVENT LISTENER (NORMAL → ARROW)

document.addEventListener('click', function () {
  console.log('click');
});

document.addEventListener('click', () => console.log('click'));

/* NOTAS:
- Arrow functions son muy comunes en callbacks
- Especialmente en eventos, Promises, Playwright, etc.
*/


/* ==============================
RESUMEN PRÁCTICO

TRANSFORMACIÓN:

function nombre(param) {
  return algo;
}

↓

const nombre = (param) => algo;

VENTAJAS:
- Menos código
- Más legible
- Ideal para funciones cortas

CUÁNDO USAR:
- callbacks
- funciones simples
- map / filter / reduce

CUÁNDO NO:
- cuando necesitas this propio (usar function)

============================== */