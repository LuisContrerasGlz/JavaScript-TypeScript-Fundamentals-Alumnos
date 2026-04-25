/*
La sintaxis const nombre = (params) => expresion.
Por qué no necesitas return ni {} cuando la función es una sola expresión.
Cuándo conviene una arrow function vs. una function tradicional.
*/

// Versión clásica:
function isSuccessCode1(code: number): boolean { 
    return code >= 200 && code < 300; 
}
 
// Versión arrow (más corta):
export const isSuccessCode = (code: number): boolean =>
  code >= 200 && code < 300;
 
export const isClientError = (code: number): boolean =>
  code >= 400 && code < 500;
 
console.log(`200 es éxito: ${isSuccessCode(200)}`);
console.log(`404 es éxito: ${isSuccessCode(404)}`);
console.log(`404 es error de cliente: ${isClientError(404)}`);