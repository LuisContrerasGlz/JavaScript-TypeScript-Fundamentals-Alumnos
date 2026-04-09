var helloWorld = "hello"
helloWorld = "world"

let x = 3

const VELOCITY = 34

// Blocked scope vs function scope

/* var (viejo, evitarlo)

Tiene scope de función, no de bloque
Se puede re-declarar
Se puede reasignar
Tiene hoisting raro (puede causar bugs)

*/

if (true) {
  var a = 5
}
console.log(a) // imprime 5 (aunque está dentro del if y no deberia)

/* let (moderno, variable)

Scope de bloque (if, for, etc.)
Se puede reasignar

Uso típico: Variables que cambian (contadores, estados, etc.)

*/

let b = 10
b = 20 // válido


if (true) {
  let y = 5
}
console.log(y) // error

/* const (moderno, constante)

Scope de bloque
No se puede reasignar (pero objetos y arrays sí pueden modificarse)

Uso típico: Valores que no cambian (configuraciones, constantes matemáticas, etc.)

*/

const PI = 3.14159
// PI = 3.14 // error

const config = { theme: "dark" }
config.theme = "light" // válido (modificando la propiedad del objeto)

const VELO = 34
const a = 10
a = 20 // error

// Recomendación: Usar const por defecto, let solo cuando se necesite reasignar, y evitar var.

/* const NO significa inmutable totalmente, solo que la variable no puede ser reasignada a otro valor. 
Sin embargo, si el valor es un objeto o un array, sus propiedades o elementos sí pueden ser modificados.*/

const obj = { name: "Luis" }
obj.name = "Juan" // permitido

obj = {} // error, esto no se puede hacer porque obj es una constante y no se puede reasignar a otro objeto.

/* O sea:

No puedes cambiar la referencia
Pero sí modificar el contenido

*/