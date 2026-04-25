// EJEMPLO DE THIS CON CLASE

class Person {
  constructor(name) {
    this.name = name;
  }

  // usando arrow function dentro de setTimeout
  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
    }, 100);
  }

  // usando function tradicional dentro de setTimeout
  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ' + this.name);
    }, 100);
  }
}

// EJECUCIÓN

let person = new Person('Bob');

person.printNameArrow();     // Arrow: Bob
person.printNameFunction();  // Function: undefined (o error en strict mode)

/* ==============================
EXPLICACIÓN CLAVE

ARROW FUNCTION:
- NO tiene su propio this
- Hereda el this del contexto donde fue creada
- Aquí hereda el this de la clase (Person)
- Por eso imprime correctamente "Bob"

FUNCTION TRADICIONAL:
- Tiene su propio this
- En setTimeout, this apunta a:
  → window (en navegador)
  → o undefined (en strict mode)
- Por eso this.name NO es "Bob"

RESUMEN:
- Arrow → mantiene el this del objeto
- function → pierde el this en callbacks

CASO REAL:
- Muy importante en:
  - setTimeout
  - event listeners
  - Promises
  - Playwright (callbacks)

============================== */