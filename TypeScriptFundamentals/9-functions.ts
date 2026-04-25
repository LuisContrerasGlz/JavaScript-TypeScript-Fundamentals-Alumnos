// NOTA: Las credenciales están hardcoded solo con fines didácticos.
// En la vida real se usan variables de entorno o fixtures.
const VALID_USER = "admin";
const VALID_PASS = "Test1234!";
 
// "export" hace que esta función pueda ser usada desde OTROS archivos.
export function login(username: string, password: string): boolean {
  if (username === VALID_USER && password === VALID_PASS) {
    console.log(`Login successful for user: ${username}`);
    return true;
  } else {
    console.log(`Login failed for user: ${username}`);
    return false;
  }
}
 
// Forma simplificada usando Operador Ternario
export function loginTernary(username: string, password: string): boolean {
  const isSuccess = username === VALID_USER && password === VALID_PASS;
  console.log(
    isSuccess
      ? `Ternary Login successful: ${username}`
      : `Ternary Login failed: ${username}`
  );
  return isSuccess;
}
 
const loginDemo1 = login("admin", "Test1234!");
const loginDemo2 = login("guest", "wrong");
console.log(`Result 1: ${loginDemo1}, Result 2: ${loginDemo2}`);

// Parámetros con valor por defecto

export function navigateTo(
  path: string,
  baseUrl: string = "https://qa.myapp.com"
): string {
  const fullUrl = `${baseUrl}${path}`;
  console.log(`Navigating to: ${fullUrl}`);
  return fullUrl;
}
 
navigateTo("/login");                                  // URL por defecto (QA)
navigateTo("/login", "https://staging.myapp.com");     // URL personalizada