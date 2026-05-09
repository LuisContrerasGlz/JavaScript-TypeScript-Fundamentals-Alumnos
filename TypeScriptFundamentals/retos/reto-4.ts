/*

Crea una función llamada validateApiResponse que:

Reciba un parámetro obligatorio statusCode de tipo number.
Reciba un parámetro opcional errorMessage de tipo string.
Retorne un boolean.
Lógica esperada:

Si statusCode === 200: imprime "Test Passed" y retorna true.
En cualquier otro caso: imprime el errorMessage (o "Unknown error" si no se proporcionó) y retorna false.

*/

const validateApiResponse4 = (statusCode: number, errorMessage?: string): boolean => {
  if (statusCode === 200) {
    console.log("Test Passed");
    return true;
  } else {
    console.log(errorMessage || "Unknown error");
    return false;
  }
};  

/*
Casos de prueba obligatorios:

validateApiResponse(200)
validateApiResponse(404, "Resource not found")
validateApiResponse(500)


*/

// Pruebas
validateApiResponse4(200);
validateApiResponse4(404, "Resource not found");
validateApiResponse4(500);

/*

Output esperado:

Test Passed
Resource not found
Unknown error

correr con pnpm tsx modulo-01-hello-world/reto-4.ts

*/