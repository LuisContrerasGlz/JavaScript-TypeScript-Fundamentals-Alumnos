// void es el tipo de retorno por defecto de una función que no usa return.

function clickButton(selector: string): void {
  console.log(`Clicking on: ${selector}`);
  // No hay "return". La función solo ejecuta la acción.
}
 
clickButton("#submit-btn");
clickButton("#cancel-btn");

/*

Analogía QA: una acción que no devuelve nada, como hacer click en un botón. 
La acción ocurre, pero no esperas un valor de vuelta — igual que page.click() en Playwright.

*/

 
