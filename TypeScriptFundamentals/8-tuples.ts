// Tuplas en TypeScript ejemplo
// Las tuplas son un tipo de dato que permite almacenar un conjunto de valores de diferentes tipos en una sola variable. 
// Son útiles para representar estructuras de datos más complejas.

let person: [string, number, boolean] = ["Alice", 30, true];

console.log(`Name: ${person[0]}, Age: ${person[1]}, Is Student: ${person[2]}`);

// También puedes usar tuplas con tipos opcionales o con un número variable de elementos usando el operador rest.

let flexibleTuple: [string, number?, ...boolean[]] = ["Bob", 25, true, false, true];

console.log(`Name: ${flexibleTuple[0]}, Age: ${flexibleTuple[1]}, Flags: ${flexibleTuple.slice(2).join(", ")}`);

// Las tuplas también pueden ser útiles para representar pares clave-valor o resultados de funciones que devuelven múltiples valores.

function getUserInfo(): [string, number] {
    return ["Charlie", 28];
}

const [username, userAge] = getUserInfo();
console.log(`Username: ${username}, User Age: ${userAge}`);

// Tuplas útiles para representar códigos HTTP y sus respuestas
let httpCodesandResponse: [number, string][] = [
    [200, "OK"],
    [201, "Created"],
    [400, "Bad Request"],
    [401, "Unauthorized"],
    [404, "Not Found"],
    [500, "Internal Server Error"],
    [503, "Service Unavailable"]
];

console.log("\nHTTP Status Codes and Responses:");
httpCodesandResponse.forEach(function([httpCode, response]) {
    console.log(`HTTP Response: ${httpCode} - "${response}"`);
});