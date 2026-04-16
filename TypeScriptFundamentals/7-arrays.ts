let testUsers: string[] = ["admin@qa.com", "user@qa.com", "editor@qa.com", "support@qa.com"];

let responseCodes: number[] = [200, 201, 400, 401, 403, 404, 500];

console.log("Test Users:");

// iterating over the array of test users and printing each one
for (let i = 0; i < testUsers.length; i++) {
    console.log(`- ${testUsers[i]}`);
}

console.log("\nResponse Codes:");

// iterating over the array of response codes and printing each one
for (let i = 0; i < responseCodes.length; i++) {
    console.log(`- ${responseCodes[i]}`);
}

testUsers.forEach((user) => {
    console.log(`- ${user}`);
});

// En una linea
testUsers.forEach(user => console.log(`- ${user}`));

// Conservando el index 

testUsers.forEach((user, index) => {
    console.log(`Usuario #${index + 1}: ${user}`);
});

testUsers.forEach((user) => {
    console.log(`Test user: ${user}.mx`);
});