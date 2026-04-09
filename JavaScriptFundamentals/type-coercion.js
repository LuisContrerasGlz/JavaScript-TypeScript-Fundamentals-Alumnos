const x1 = 6
const y1 = "7"

/* Aquí JS hace "type coercion" (conversión automática de tipos)
Como uno de los valores es string ("7"),
el operador + se convierte en CONCATENACIÓN.*/

console.log(x1 + y1) // "67"


// Ejemplo 2

const x2 = 6
const y2 = true

/* Aquí JS convierte true a número automáticamente:
true = 1
false = 0
*/

console.log(y2 + x2) // 7

// Ejemplo 3

const x3 = "hello"
const y3 = false

/* false se convierte a string cuando se concatena
 porque hay un string involucrado */

console.log(y3 + x3) // "falsehello"



