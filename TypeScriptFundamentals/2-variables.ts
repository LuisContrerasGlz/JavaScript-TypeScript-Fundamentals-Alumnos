const suiteName: string = "My Test Suite";
const suiteName2: string = "Smoke Test Suite";

const totalTests: number = 5;

console.log(`Running ${suiteName} with ${totalTests} tests.`);
console.log(`Running ${suiteName2} with ${totalTests} tests.`);

let testExecuted: number = 0;
testExecuted += 1;
console.log(`Executed ${testExecuted} test(s) in ${suiteName}.`);

testExecuted += 1;
console.log(`Executed ${testExecuted} test(s) in ${suiteName2}.`);

