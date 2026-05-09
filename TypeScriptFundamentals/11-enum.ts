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

// Para ser espefificos, podemos usar esta forma
let currentEnv: Environment = Environment.QA;
let bugState: BugStatus = BugStatus.NEW;

console.log(`Current environment: ${currentEnv}`);
console.log(`Bug status: ${bugState}`);

// TypeScript restringe los valores posibles al enum declarado.
// currentEnv = "DEV"; // Error


// Enum numérico por defecto
// Comienza en 0 y se autoincrementa.


// normalmente se sa asi porque TypeScript normalmente puede inferir el tipo automáticamente.

const currentEnv2 = Environment.PROD; // Type: Environment.PROD

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

// ------------------ Enum en test automation ------------------

enum TestStatus {
  PASSED = "PASSED",
  FAILED = "FAILED",
  SKIPPED = "SKIPPED",
}

function logTestResult(testName: string, status: TestStatus): void {
  console.log(`Test "${testName}" has ${status}`);
}

logTestResult("Login Test", TestStatus.PASSED);
logTestResult("Signup Test", TestStatus.FAILED);
logTestResult("Profile Update Test", TestStatus.SKIPPED);

/*

Donde más valor tienen es cuando tienes:

valores repetitivos
estados fijos
ambientes
roles
tipos de usuario
endpoints
status
browsers
flags/configuración

*/

enum UserRole {
  ADMIN = "admin",
  AGENT = "agent",
  CUSTOMER = "customer",
}

enum BrowserType {
  CHROME = "chromium",
  FIREFOX = "firefox",
  WEBKIT = "webkit",
}

enum ApiStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

enum ClaimStatus {
  OPEN = "OPEN",
  PENDING = "PENDING",
  CLOSED = "CLOSED",
}