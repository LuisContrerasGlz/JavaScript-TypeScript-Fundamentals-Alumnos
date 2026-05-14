import type { BugReport } from "./bug-report.type";
 
export const bug: BugReport = {
  id: 1042,
  title: "Submit button unresponsive on mobile",
  severity: "HIGH",
  // assignee se omite porque es opcional
  screenshot: null,
};

/*

severity usa un union de strings ("LOW" | "MEDIUM" | ...) para limitar los valores aceptados — un mini-enum sin declarar enum.
assignee?: string es equivalente a assignee: string | undefined, pero con ? puedes omitirlo al construir el objeto.
bug.assignee ?? "sin asignar" solo cae al default si el valor es undefined o null. Si fuera un string vacío "" también caería; usa || solo cuando ese comportamiento te convenga.

*/