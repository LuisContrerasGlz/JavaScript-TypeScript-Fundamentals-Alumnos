// OBJETO ORIGINAL

const circle = {
  radius: 1,

  draw() {
    console.log('draw');
  }
};


/* COPIA MANUAL CON FOR...IN */

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key];
// }


/* COPIA CON Object.assign() */

// const another = Object.assign({}, circle);


/* COPIA CON SPREAD OPERATOR */

const another = { ...circle };

console.log(another);


/* NOTAS:

Las 3 formas crean una copia superficial (shallow copy).

COPIA MANUAL:
- recorres propiedad por propiedad
- útil para entender cómo funciona internamente

Object.assign():
- copia propiedades de un objeto a otro
- muy común antes del spread operator

SPREAD OPERATOR:
- forma moderna y más limpia
- probablemente la más usada actualmente

*/


/* IMPORTANTE:

Esto:
const another = circle;

NO crea una copia.

Solo crea otra referencia al mismo objeto.

Entonces modificar uno modifica ambos.

*/


/* EJEMPLO */

const obj1 = { name: 'Alice' };

const obj2 = obj1;

obj2.name = 'Bob';

console.log(obj1.name); // Bob


/* PARA EVITAR ESO:
crear una copia real */

const obj3 = { ...obj1 };

obj3.name = 'Charlie';

console.log(obj1.name); // Bob
console.log(obj3.name); // Charlie