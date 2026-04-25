// Reto "The Validation Script"
 
// TODO 1: Crea la función "validateApiResponse" que:
//   - Reciba un parámetro obligatorio "statusCode" (number)
//   - Reciba un parámetro opcional "errorMessage" (string)
//   - Retorne un boolean
//
// Lógica:
//   - Si statusCode es 200, imprime "Test Passed" y retorna true
//   - Si no, imprime el errorMessage (o "Unknown error" si no se proporcionó)
//     y retorna false
 
 
// TODO 2: Prueba tu función con estos casos:
//   - validateApiResponse(200)
//   - validateApiResponse(404, "Resource not found")
//   - validateApiResponse(500)

/*

Output esperado:

Test Passed
Resource not found
Unknown error

*/

function validateApiResponse(statusCode: number, errorMessage?: string): boolean {
    if (statusCode === 200) {
        console.log("Test Passed");
        return true;
    } else {
        console.log(errorMessage || "Unknown error");
        return false;
    }
}

// Pruebas
validateApiResponse(200);
validateApiResponse(404, "Resource not found");
validateApiResponse(500);
