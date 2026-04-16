// If, Else if, Else

let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket!');
} else if (weather === 70) {
    console.log('It is perfect outside!');
} else {
    console.log('No jacket necessary!');
}   

let name = 'Luisa';

if (name === 'Luisa') {
    console.log('Hello, Luisa!');
} else {
    console.log('Hello, stranger!');
}           

// Single line if statement
let isRaining = true;
if (isRaining) console.log('Don\'t forget your umbrella!');

/* Explicacion de llaves y sin llaves
Si solo hay una línea de código dentro del bloque if, else if o else, las llaves son opcionales. 
Sin embargo, es una buena práctica usarlas siempre para evitar errores en el futuro si se agrega más código al bloque. 
Además, mejora la legibilidad del código. 
*/

if (true) {
  console.log('hello world')
} else {
  console.log("run")
  console.log("")
}

// Sin llaves {}, SOLO la primera línea después del if/else pertenece al bloque
if (false)
  console.log('hello world')
else
  console.log("run")
  console.log("")

// El código en realidad se interpreta así:

if (false) {
  console.log('hello world')
} else {
  console.log("run")
}

console.log("") // esta línea SIEMPRE se ejecuta

// Ternary Operator

let isNightTime = true;
let greeting = isNightTime ? 'Good evening!' : 'Good day!';
console.log(greeting); // Output: Good evening!

isNightTime = false;
greeting = isNightTime ? 'Good evening!' : 'Good day!';
console.log(greeting); // Output: Good day!
