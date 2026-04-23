// THIS EN JAVASCRIPT

/*
¿QUÉ ES this?

this es una palabra clave que hace referencia al "contexto actual"
de ejecución.

La parte importante es esta:

this NO depende de dónde se escribió la función,
depende de CÓMO se llama la función.
*/

// 1. THIS EN UN OBJETO

const user = {
  name: "Luis",
  greet: function () {
    console.log(this.name);
  },
};

user.greet(); // Luis

/* NOTAS:
- Aquí this apunta al objeto que llamó la función
- Como user.greet() ejecuta el método,
  this === user
*/

// 2. THIS FUERA DE UN OBJETO


function showThis() {
  console.log(this);
}

showThis();

/* NOTAS:
- En navegador, en modo no estricto, suele apuntar a window
- En strict mode puede ser undefined
- Por eso puede ser confuso y peligroso
*/

// 3. PROBLEMA CLÁSICO CON function


const person = {
  name: "Alice",
  greet: function () {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

person.greet(); // normalmente undefined

/* NOTAS:
- inner() se llama como función normal
- NO se llama como person.inner()
- Por eso this ya no apunta a person
*/


// 4. ARROW FUNCTION Y THIS

const person2 = {
  name: "Alice",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

person2.greet(); // Alice

/* NOTAS:
- Arrow function NO tiene su propio this
- Hereda el this del contexto donde fue creada
- Aquí inner hereda this de greet
- Y greet sí fue llamado como método de person2
*/


// 5. RESUMEN SIMPLE DE this

/*
function tradicional:
- this depende de cómo se llama

arrow function:
- this se hereda del contexto externo

REGLA SIMPLE:
- Si necesitas un método de objeto, normalmente usa function
- Si necesitas una función interna que conserve el this externo, usa arrow
*/