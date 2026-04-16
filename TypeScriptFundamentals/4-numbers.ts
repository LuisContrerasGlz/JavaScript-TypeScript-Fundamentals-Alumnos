let statusCode: number = 200;
let responseTime: number = 1.3;
let retries: number = 3;

console.log(`status: ${statusCode}`);
console.log(`Response Time: ${responseTime}`);
console.log(`Configured Retries: ${retries}`);

const totalTime:number = responseTime * retries;
// toFixed formatea el número con un solo decimal
console.log(`Estimated total time: ${totalTime.toFixed(1)}`);