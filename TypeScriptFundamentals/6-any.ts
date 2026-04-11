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
