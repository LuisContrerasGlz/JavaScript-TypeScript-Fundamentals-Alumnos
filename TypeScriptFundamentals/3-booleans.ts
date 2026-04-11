let testPassed: boolean = true;
let testFailed: boolean = false;

console.log(`Test passed: ${testPassed}`);
console.log(`Test failed: ${testFailed}`);

testPassed = false;
testFailed = true;

console.log(`Test passed: ${testPassed}`);
console.log(`Test failed: ${testFailed}`);

// Simulating API test

const expectedStatusCode: number = 200;
const actualStatusCode: number = 200;

const isTestSuccessful: boolean = expectedStatusCode === actualStatusCode;

console.log(`API Test successful: ${isTestSuccessful}`);

// Simulating API test 2

const expectedHttpCode: number = 200;
const actualResult: number = 401;
const assertionResult: boolean = expectedHttpCode === actualResult;

console.log(`Assertion ${expectedHttpCode} and my received HTTP code is: ${actualResult} and the result is ${assertionResult}`);