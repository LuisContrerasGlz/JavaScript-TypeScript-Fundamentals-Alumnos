import type { ButtonState } from "./button-state.type";
import { processResult } from "./process-result";

let submitButton: ButtonState = "enabled";
console.log(`Button state: ${submitButton}`);
submitButton = "loading";
console.log(`Button state: ${submitButton}`);
// submitButton = "invisible"; // ❌ Error: valor no permitido
 
processResult("Success");
processResult(200);
processResult(true);

/*

ButtonState es un union de string literals: cualquier valor fuera de la lista falla en compilación. Es la base de los enums "ligeros" en TypeScript moderno.
ApiResult acepta tipos distintos entre sí. Dentro de processResult, si necesitaras llamar .toUpperCase() solo cuando result es string, usarías if (typeof result === "string") { ... } para hacer narrowing.
Los union types son la herramienta natural para modelar respuestas de API que vienen con varias formas posibles.

*/