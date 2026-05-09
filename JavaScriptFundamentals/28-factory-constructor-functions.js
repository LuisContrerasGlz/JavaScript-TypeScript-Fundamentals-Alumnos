// CAMEL CASE vs PASCAL CASE

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

/* NOTAS:
- camelCase:
  normalmente usado para:
  variables, funciones, métodos

- PascalCase:
  normalmente usado para:
  clases y constructor functions
*/


// FACTORY FUNCTION

function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

/* NOTAS:
- Factory Function:
  función que crea y devuelve objetos

- return { } devuelve un nuevo objeto

- radius,
  es shorthand de:
  radius: radius

- draw() es un método del objeto

USO:
- forma simple y moderna de crear objetos
*/


// CONSTRUCTOR FUNCTION

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  };
}

const circle = new Circle(1);

/* NOTAS:
- Constructor Function:
  función usada con new

- this representa el nuevo objeto creado

- new hace 4 cosas:
  1. crea objeto vacío {}
  2. this apunta a ese objeto
  3. ejecuta la función
  4. devuelve el objeto

IMPORTANTE:
- Constructor Functions usan PascalCase
- por convención:
  Circle, Person, Car, etc.
*/


/* RESUMEN PRÁCTICO

Factory Function:
- devuelve objeto manualmente
- sintaxis moderna
- más simple

Constructor Function:
- usa this y new
- estilo más antiguo
- base conceptual de classes

AMBOS:
- sirven para crear múltiples objetos

*/