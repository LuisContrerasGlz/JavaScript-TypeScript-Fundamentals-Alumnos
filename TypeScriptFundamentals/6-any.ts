/* El tipo any evita la verificación de tipos y puede ocultar errores en tiempo de compilación. 
Es mejor usar tipos específicos siempre que sea posible. */

let data: any = "BAtman could be anyone!";
data = 42;
data = true;
data = { foo: "bar" };

console.log(`Data actual value: ${JSON.stringify(data)}`);

// Otro ejemplo de uso de any
function processData(input: any): void {
    console.log(`Processing data: ${input}`);
}

processData("Test data");
processData(123);
processData({ key: "value" });  

// Alternativa con unknown, unknown es la versión segura de any. Te obliga a comprobar qué es la variable antes de usarla.
let safeData : unknown = "Hola, soy un dato seguro!";
// safeData = 123; // Esto es válido, pero no se puede usar directamente sin una verificación de tipo

if (typeof safeData === "string") {
    console.log(`Safe data is a string: ${safeData}`);
} else {
    console.log("Safe data is not a string.");
}
