/* WHILE
NOTA:
while primero evalúa la condición y luego ejecuta, por lo que si la condición es falsa desde el inicio, el bloque de código no se ejecutará ni una sola vez.

*/


// Se ejecuta solo si la condición es verdadera
while (true) {
  console.log("hello");
  break; // evita loop infinito
}

/* DO...WHILE
Se ejecuta AL MENOS una vez, aunque la condición sea falsa
NOTA:
do...while primero ejecuta y luego evalúa la condición */

do {
  console.log("run");
  break; // rompe el ciclo inmediatamente
} while (true);

//EJEMPLO PRÁCTICO: Solicitar al usuario que ingrese un número hasta que ingrese uno válido (entre 1 y 10)

const prompt = require('prompt-sync')();

let number;

do {
  number = parseInt(prompt("Please enter a number between 1 and 10: "));
} while (isNaN(number) || number < 1 || number > 10);

console.log(`You entered: ${number}`);  

// Ejemplo con while: Contar de 1 a 5

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}



