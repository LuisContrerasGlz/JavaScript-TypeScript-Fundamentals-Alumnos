// El tipo "string | null" significa: puede ser un string O null.
let screenshot: string | null = null; // todavía no se tomó la captura
console.log(`Screenshot: ${screenshot}`);
 
// Después de tomar la captura, asignamos la ruta.
screenshot = "/tmp/screenshot-001.png";
console.log(`Screenshot actual: ${screenshot}`);
 
// undefined: la variable existe pero no tiene valor asignado.
let uninitializedValue: string | undefined = undefined;
console.log(`Sin inicializar: ${uninitializedValue}`);

// otro ejemplo de undefined
function getUserName(userId: number): string | undefined {
    if (userId === 1) {
        return "Alice";
    } else {
        return undefined; // Usuario no encontrado
    }
}

const userName = getUserName(2);
console.log(`User Name: ${userName}`); // User Name: undefined

// null y undefined son tipos distintos en TypeScript, aunque ambos representan la ausencia de valor. 
// Es importante usarlos de manera consistente para evitar confusiones en el código.