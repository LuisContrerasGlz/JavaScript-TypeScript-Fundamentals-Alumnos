let baseUrl: string = "https://qaApp.com";
let errorMessage: string = "An error occurred while processing the request.";
let cssSelector: string = ".test-result";

console.log(`Base URL: ${baseUrl}`);
console.log(`Error Message: ${errorMessage}`);
console.log(`Found CSS Selector: ${cssSelector}`);    

const testName: string = "Login Test";
const duration: number = 2.5;

// Interpolación de cadenas para mostrar el nombre del test y su duración, String literal con template strings
console.log(`Running ${testName} which took ${duration} seconds.`);


