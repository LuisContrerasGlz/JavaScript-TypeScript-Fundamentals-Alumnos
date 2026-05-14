// Analogía QA: un payload JSON con los datos de un usuario de prueba. Sin un "contrato" (type), TypeScript infiere los tipos pero no puedes reutilizar esa forma en otros lugares.

const testUser = {
  name: "John Doe",
  age: 30,
  role: "admin",
};
 
console.log(`User: ${testUser.name}`);
console.log(`Role: ${testUser.role}`);
console.log(`Edad: ${testUser.age}`);
 
// Problema: si quieres otro usuario con la MISMA estructura,
// tendrías que repetir la forma. Solución → "type"

type User = {
    name: string;
    age: number;
    role: string;
}
 
const testUser2: User = {
  name: "Jane Smith",
  age: 25,
  role: "editor",
};
 
console.log(`User: ${testUser2.name}`);
console.log(`Role: ${testUser2.role}`);
console.log(`Edad: ${testUser2.age}`);

// Ahora puedes usar "User" como un contrato para cualquier objeto que quieras crear con esa forma. Esto mejora la mantenibilidad y la consistencia en tu código.