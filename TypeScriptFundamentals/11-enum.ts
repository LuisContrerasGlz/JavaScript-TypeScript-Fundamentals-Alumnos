// Los enums permiten definir un conjunto fijo de valores relacionados.

enum Environment {
  QA = "QA",
  STAGING = "STAGING",
  PROD = "PROD",
}

enum BugStatus {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

let currentEnv: Environment = Environment.QA;
let bugState: BugStatus = BugStatus.NEW;

console.log(`Current environment: ${currentEnv}`);
console.log(`Bug status: ${bugState}`);

// TypeScript restringe los valores posibles al enum declarado.
// currentEnv = "DEV"; // Error


// Enum numérico por defecto
// Comienza en 0 y se autoincrementa.

enum StatusCode {
  SUCCESS,       // 0
  NOT_FOUND,     // 1
  SERVER_ERROR,  // 2
}

console.log(StatusCode.SUCCESS); // 0


// Enum numérico con valor inicial específico

enum Priority {
  LOW = 1,
  MEDIUM, // 2
  HIGH,   // 3
}


// Reverse Mapping
// SOLO funciona en enums numéricos.

let textCode: string = StatusCode[0];

console.log(textCode); // SUCCESS