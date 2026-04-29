// Ejemplo de uso de async/await para manejar promesas en Playwright
await page.goto("url");
await page.click("boton");

// En Playwright normalmente await es suficiente. No necesitas usar .then() en el día a día.

// Porque Playwright ya está diseñado para usarse con async/await: 

// - Todas las funciones de Playwright devuelven promesas, así que await es natural.
// - El código es más limpio y fácil de leer sin .then() encadenados.
// - Manejar errores con try/catch es más sencillo que con .catch().

await page.goto("https://example.com");
await page.click("#login");
await page.fill("#user", "test");

// Cada una de esas líneas ya es una Promise, pero tú no la ves porque await la maneja.

const title = await page.title();
console.log(title);

// Regla importante (esto sí rompe tests) SIN await (MAL):

page.click("#login");
page.fill("#user", "test");

/* esto puede fallar porque:

JS no espera
las acciones se ejecutan “al mismo tiempo”
*/

// CON await (BIEN):

await page.click("#login");
await page.fill("#user", "test");

/* esto funciona porque:

JS espera a que cada acción termine
las acciones se ejecutan en orden
*/
