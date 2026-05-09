// CONCATENACIÓN TRADICIONAL

const name = 'John';

const message = 'Hi ' + name + ',\n';

console.log(message);

/* NOTAS:
- antes era común unir strings usando +
- \n representa un salto de línea
- puede volverse difícil de leer en textos largos
*/


// TEMPLATE LITERALS

const another = `Hi ${name},

Thank you for joining my mailing list.

Regards,
Mosh`;

console.log(another);

/* NOTAS:

- los template literals usan backticks:
  ` `

- permiten texto multilínea fácilmente

- ${}
  permite insertar variables o expresiones

- mucho más limpio y legible que concatenar con +

*/


/* EJEMPLOS */

// insertar variables

const language = 'JavaScript';

console.log(`I am learning ${language}`);

// insertar expresiones

console.log(`2 + 2 = ${2 + 2}`);

// llamar funciones

function greet(user) {
  return `Hello ${user}`;
}

console.log(`${greet('Luis')}`);


/* IMPORTANTE:

Esto:
'texto'

y esto:
"texto"

son strings normales.

Pero esto:
`texto`

es un template literal.

*/


/* DIFERENCIA PRINCIPAL

STRING NORMAL:
'Hello ' + name

TEMPLATE LITERAL:
`Hello ${name}`

*/

const saludo = `hey ${name} ${5+2}`;

console.log(saludo);

/* NOTAS:
- puedes usar cualquier expresión dentro de ${}
- el resultado se evalúa e inserta en el string
- hace que el código sea más dinámico y fácil de leer
*/