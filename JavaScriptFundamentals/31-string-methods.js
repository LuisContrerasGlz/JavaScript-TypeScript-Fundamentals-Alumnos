// STRING PRIMITIVE

const message = ' This is my first message ';


/* STRING OBJECT */

const another = new String('hi');

console.log(another);

/* NOTAS:
- JavaScript tiene strings primitivos y objetos String
- normalmente usamos strings primitivos
- usar new String() es poco común
*/


// LENGTH

console.log(message.length);

/* NOTAS:
- devuelve la cantidad de caracteres
- incluye espacios
*/


// ACCEDER A CARACTERES

console.log(message[0]);
console.log(message[1]);

/* NOTAS:
- los strings pueden accederse por índice
- empiezan en 0
*/


// includes()

console.log(message.includes('my'));
console.log(message.includes('not'));

/* NOTAS:
- verifica si un texto existe dentro del string
- devuelve true o false
- distingue mayúsculas y minúsculas
*/


// startsWith()

console.log(message.startsWith(' This'));
console.log(message.startsWith(' this'));

/* NOTAS:
- verifica cómo inicia el string
- también distingue mayúsculas/minúsculas
*/


// indexOf()

console.log(message.indexOf('my'));

/* NOTAS:
- devuelve la posición donde encuentra el texto
- si no existe devuelve -1
*/


// replace()

console.log(message.replace('first', 'second'));

/* NOTAS:
- reemplaza texto dentro del string
- no modifica el original
- devuelve un nuevo string
*/

console.log(message);


/* MAYÚSCULAS */

console.log(message.toUpperCase());

/* NOTAS:
- convierte el string a mayúsculas
- no modifica el original
*/


/* ELIMINAR ESPACIOS */

console.log(message.trim());

/* NOTAS:
- elimina espacios al inicio y final
*/


console.log(message.trimLeft());

/* NOTAS:
- elimina espacios solo del lado izquierdo
- también existe trimRight()
*/


/* IMPORTANTE:

Los strings en JavaScript son INMUTABLES.

Eso significa que métodos como:
- replace()
- toUpperCase()
- trim()

NO modifican el string original.

Siempre devuelven uno nuevo.

*/


/* EJEMPLO */

const text = 'hello';

const upper = text.toUpperCase();

console.log(text);   // hello
console.log(upper);  // HELLO