// TRY / CATCH / FINALLY


try {
  riskyFunction();
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup code can go here."); // Siempre se ejecuta
}

/* NOTAS:
- try: bloque donde ejecutas código que puede fallar
- catch: captura el error si ocurre
- finally: siempre se ejecuta (haya error o no)

- error.message → mensaje del error
- console.error → usado para errores en consola

FLUJO:
1. Se ejecuta try
2. Si hay error → entra a catch
3. Siempre se ejecuta finally
*/


// EJEMPLO REAL

function riskyFunction() {
  throw new Error("Something went wrong");
}

try {
  riskyFunction();
} catch (error) {
  console.error("Error atrapado:", error.message);
}

/* NOTAS:
- throw new Error() → lanza un error manualmente
- Útil para validar condiciones en código
*/


// VALIDACIÓN MANUAL


function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error en división:", error.message);
}

/* NOTAS:
- throw se usa para controlar errores personalizados
- Muy útil en validaciones
*/


/* ==============================
RESUMEN PRÁCTICO

- try → intenta ejecutar código
- catch → maneja errores
- finally → siempre corre

- throw → crea errores manuales

USO COMÚN:
- validaciones
- manejo de APIs
- control de fallos en ejecución

============================== */