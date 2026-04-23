// FUNCIÓN TRADICIONAL

function greet(name, age = 12) {
  console.log(name, age);
}

greet("Luis");        // Luis 12 (usa valor por defecto)
greet("Luis", 25);    // Luis 25

/* NOTAS:
- function nombre(parametros) {}
- Puedes definir valores por defecto (age = 12)
- Se puede llamar múltiples veces
*/

// ARROW FUNCTION (FORMA BÁSICA)


const greetArrow = (name) => {
  console.log(name);
};

greetArrow("Luis");

/* NOTAS:
- Sintaxis moderna: (param) => {}
- Se suele guardar en una variable
- Más común en código moderno (React, Playwright, etc.)
*/


// ARROW FUNCTION CON RETURN IMPLÍCITO


const greetSimple = (name) => name + "!";

console.log(greetSimple("Luis")); // Luis!

/* NOTAS:
- Si es una sola línea, no necesitas {}
- El return es implícito
- Muy usado para funciones cortas
*/


// FUNCIÓN CON REST PARAMS


function addNums(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(addNums(1, 2, 3, 4)); // 10

/* NOTAS:
- ...numbers agrupa argumentos en un array
- Se usa cuando no sabes cuántos parámetros llegarán
*/

// DIFERENCIAS IMPORTANTES

/*
FUNCTION vs ARROW FUNCTION

1. this
- function → tiene su propio this
- arrow → hereda el this del contexto

2. Sintaxis
- function → más clásica
- arrow → más corta y moderna

3. return
- function → necesitas return explícito
- arrow → puede ser implícito

4. Uso recomendado
- arrow → funciones pequeñas / callbacks
- function → lógica más compleja o métodos
*/

// EJEMPLO PRÁCTICO

const nums = [1, 2, 3];

// usando arrow function (muy común)
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

/* NOTAS:
- arrow functions se usan mucho en:
  - map
  - filter
  - reduce
  - callbacks en general
*/


/* ==============================
RESUMEN PRÁCTICO

- function → forma clásica
- arrow function → forma moderna
- => hace el código más limpio
- return puede ser implícito
- ... (rest) permite múltiples argumentos

USO REAL:
- callbacks
- funciones cortas
- manipulación de arrays

============================== */