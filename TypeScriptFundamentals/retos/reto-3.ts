/*

Instrucciones
Declara bugId como number con un valor correlativo.
Declara description como string con el título del bug.
Declara isResolved como boolean.
Crea un enum Severity con LOW, MEDIUM, HIGH y una variable bugSeverity de ese tipo.
Declara reproductionSteps como string[] con al menos 3 pasos.
Declara evidence como string | null (aún sin captura).
Imprime todas las variables en consola de forma legible.

*/

enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

const bugId: number = 101;
const description: string = "Error al guardar el formulario";
const isResolved: boolean = false;
const bugSeverity: Severity = Severity.HIGH;
const reproductionSteps: string[] = [
  "1. Abrir la página de registro",
  "2. Llenar el formulario con datos válidos",
  "3. Hacer clic en 'Guardar'",
];
let evidence: string | null = null; // Aún sin captura

console.log(`Bug ID: ${bugId}`);
console.log(`Description: ${description}`);
console.log(`Is Resolved: ${isResolved}`);
console.log(`Severity: ${bugSeverity}`);
console.log("Reproduction Steps:");
reproductionSteps.forEach(step => console.log(step));
console.log(`Evidence: ${evidence}`);   