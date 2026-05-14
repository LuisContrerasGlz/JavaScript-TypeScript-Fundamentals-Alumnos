import { TestUser } from "./test-user.type";

const user: TestUser = {
  username: "qa_user",
  password: "12345",
  environment: "QA",
};

console.log(`Username: ${user.username}`);
console.log(`Password: ${user.password}`);
console.log(`Environment: ${user.environment}`);

// NOTA: En este ejemplo, "TestUser" actúa como un contrato que define la forma del objeto "user". Esto asegura que cualquier objeto que se quiera usar como "TestUser" tenga las propiedades "username", "password" y "environment" con los tipos correctos. Además, el uso de un tipo específico para "environment" limita los valores posibles a "QA", "STAGE" o "PROD", lo que ayuda a prevenir errores y mejora la mantenibilidad del código.  