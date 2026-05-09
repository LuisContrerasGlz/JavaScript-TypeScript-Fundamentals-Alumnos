// OBJETO

const circle = {
  radius: 1,

  draw() {
    console.log('draw');
  }
};


/* RECORRER OBJETO CON FOR...IN */

for (let key in circle) {
  console.log(key, circle[key]);
}

/* NOTAS:
- for...in recorre las propiedades de un objeto

- key representa el nombre de la propiedad
  ejemplo:
  "radius"
  "draw"

- circle[key]
  accede dinámicamente al valor de la propiedad

- equivalente a:
  circle.radius
  pero dinámico
*/


/* RESULTADO APROXIMADO:

radius 1
draw [Function: draw]

*/


/* IMPORTANTE:

for...in:
- se usa principalmente para OBJETOS

for...of:
- se usa para ITERABLES
  como arrays, strings, sets, maps

*/

// ejemplo de for...of con un array

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

/* RESULTADO APROXIMADO:

10
20
30

*/